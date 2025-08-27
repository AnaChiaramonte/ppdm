import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

    export default function App() {
      const [tasks, setTasks]= useState([]);//estado para armazenar a lista de tarefas
      const [newtask, setNewTask] =useState("");//estado para o texto da nova tarefa

      const addTask = () =>{
        if(newtask.trim().length > 0){
          //garante que a tarefa não seja vazia
          setTasks((prevTasks) =>[
            ...prevTasks,
            {id : Date.now().toString(), text:newtask.trim(), completed:false}
          ]);
          setNewTask("");//limpa o campo de input
          Keyboard.dismiss();//Fecha o teclado do usuario
        }else{
          Alert.alert("Atenção","Por favor, digite uma tarefa.");
        }
      };
      return (
        //cabeçario
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Text style={styles.topBarTitle}>Minhas Tarefas</Text>
            <TouchableOpacity>
              <Text>🌛</Text>
            </TouchableOpacity>
          </View>
    {/* Local onde o usuario insere as tarefas */}
          <View style={styles.card}>
            <TextInput
            style={styles.input}
            placeholder="Adicionar nova tarefa..."
            value={newtask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}//adiciona a tarefa ap pressionar enter no teclado
            />
            {/* botão */}
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
    
        {/* Lista de Tarefas do usuario */}
        <FlatList
        style={styles.flatList}
        data={tasks}
        //mostrar em tela
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <View key={item.id} style={styles.taskItem}>
            <Text>{item.text}</Text>
          <TouchableOpacity><Text>🗑️</Text></TouchableOpacity>
          
          </View>
        )}
       
        ListEmptyComponent={()=> (
          <Text style={styles.emptyListText}>Nenhuma tarefa adicionada ainda.</Text>
       )}
        contentContainerStyle={styles.flatListContent}
        />
       
          <StatusBar style="auto" />
        </View>
      );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  topBar: {
    backgroundColor:"#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  topBarTitle:{
    color:"#00796d",
    fontSize: 24,
    fontWeight: "bold",
  },
  card:{
    backgroundColor:"#fff",
    color:"#000",
    margin: 20,
    borderRadius: 15,
    padding:20,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    
  },
  input:{
    backgroundColor:"#fcfcfc",
    color:"#333",
    borderColor:"#b0bec5",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    fontSize: 18,
    marginBottom: 10,
  },
  addButton:{
    backgroundColor:"#009688",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  flatList:{
    paddingBottom: 10, //espaçamento no final da lista 
  },
  taskItem:{
    backgroundColor:"#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#fff",
    color: "#333",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  takTextConatiner:{
    flex:1,//permirtir que o texto ocupe o espaço disponivel
    marginRight:10,

  },
  taskText:{
    fontSize:18,
    flexWrap:"wrap", //permite que o texto quebre linha
  },
  completedTaskItem:{
    textDecorationLine:"line-though", //risca o texto
    opacity:0.6,
  },
  deleButtom:{
padding:8,
borderRadius:5,

  },
  deleteButtomText:{
    //color :"#ffff",
    fontSize:22,
    fontWeight:"bold",

  },
  emptyListText:{
    color:"#9e9e9e",
    textAlign:"center",
    marginTop:50,
    fontSize:16,
  },


});
