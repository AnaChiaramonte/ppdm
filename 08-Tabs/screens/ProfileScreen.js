import { StyleSheet, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-get-random-values"

import {v4 as uuidv4} from "uuid";


export default function ProfileScreen() {
  const[userId] = useState(uuidv4());




  return (
<SafeAreaView style={styles.container}>
<Text style={styles.text}>👤Tela de perfil</Text>
  <Text style={styles.subText}>Seu ID único:{userId}</Text>
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
  subText:{ fontSize:16, color:"#666"}
  

});
