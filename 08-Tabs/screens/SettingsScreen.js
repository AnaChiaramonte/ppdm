import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>⚙️Ajuste suas configurações aqui</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: "center", 
     alignItems: "center"
     },
 text:{
fontSize:24,
fontWeight:"bold",
marginBottom: 10,
 },
 
  

});