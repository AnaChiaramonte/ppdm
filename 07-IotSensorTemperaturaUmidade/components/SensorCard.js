import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SensorCard from "./components/SensorCard";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const styles = createStyles(useTheme());

  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [humMin, setHumMin] = useState(null);
  const [humMax, setHumMax] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const getTemperatureProgress = () => {
    if (temperature === null) return 0;
    return Math.max(0, Math.min(100, ((temperature + 10) / 60) * 100));
  };

  const getHumidityProgress = () => {
    return humidity || 0;
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      console.log("🔄 Atualizando dados...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error("Erro durante refresh:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { paddingTop: 70 }]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#8faaff"}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🌡️ Dashboard IoT</Text>
          <View style={[styles.connectionStatus, { marginTop: 10 }]}>
            <Text style={styles.connectionText}>
              {isConnected ? "🟢 Conectado" : "🔴 Desconectado"}
            </Text>
          </View>
        </View>

        <SensorCard
          title="Temperatura"
          value={temperature}
          unit="°C"
          icon="🌡️"
          progress={getTemperatureProgress()}
          min={tempMin}
          max={tempMax}
        />

        <SensorCard
          title="Umidade"
          value={humidity}
          unit="%"
          icon="💧"
          progress={getHumidityProgress()}
          min={humMin}
          max={humMax}
        />
      </ScrollView>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
