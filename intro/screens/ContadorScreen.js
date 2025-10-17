//1. import: zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2. main: zona de componentes 
export default function ContadorScreen() {

  const [contador, setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}> Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color='green' title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button color='red' title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color='blue' title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//3. estilos: zona estetica y posicionamiento
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#374749ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{

    color:'white',
    fontSize:30,
    fontFamily:'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through'

  },

    texto2:{

    color:'yellow',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'900',
    textDecorationLine:'underline',
  },
  
  contenedorBotones:{
    marginTop:20,
    flexDirection:'row',
    gap:15,

  },

});
