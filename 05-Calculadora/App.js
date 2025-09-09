import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
const [valor, setValor] = useState("");
const [result, setResult] = useState ("")
const [resultado, setResultado] = useState(false);
const handleIncrement = () => {
 const setResultado = valor + result
};

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.card}>
        <View style={styles.inputContainer}>
       
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />
                  
        </View>
        </View>

<View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}
         onPress={handleIncrement}
         >
            <Text style={styles.buttonText} >+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value={result}
            onChangeText={setResult}
          />
                    
      
          
                     {resultado && (
        <View style={styles.card}>
          <Text style={styles.finalResultText}>
            <Text style={{ fontWeight: "bold" }}>$</Text>
            {setResultado} Dólares
          </Text>

       
        </View>
      )}

</View>
        </View>
    
   

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
card:{
  backgroundColor:"#007bff",
  width:400,
},
input:{
  color:"#fff",
  fontSize:60,
},
buttonText:{
  fontSize:60,
}
});
