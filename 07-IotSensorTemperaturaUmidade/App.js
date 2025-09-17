import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "./hooks/useTheme";
import SensorCards from "./components/SensorCard";

export default function App() {
  const styles = createStyles(useTheme());
  const [refreshing, setRefreshing] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const onRefresh = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { paddingTop: 70 }]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"8faaff"}
          />
        }
        showVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🌡 Dashboard IoT</Text>
          <View style={[styles.connectionStatus, { marginTop: 10 }]}>
            <Text styles={styles.connectionText}>
              {isConnected ? "🟢 Conectado" : "🔴 Desconected"}
            </Text>
          </View>
        </View>

        <SensorCards funcionou={"sim"} />
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

