import { Text, StyleSheet, View, Alert, FlatList} from 'react-native'
import React,{useState} from 'react'

export default function ListaPresupuestos() {

    const[lista, setLista] =useState([
        {categoria: 'Alimentación', presupuesto: '$ 1,200', key: '1'},
        {categoria: 'Ocio', presupuesto: '$ 600', key: '2'},
        {categoria: 'Transporte', presupuesto: '$ 400', key: '3'},
        {categoria: 'Deudas', presupuesto: '$ 5,000', key: '4'},
        {categoria: 'Servicios', presupuesto: '$ 300', key: '5'}
    ]);

    
  return (
    <View style={styles.container} >
      <Text style={styles.titulo} >Presupuestos Mensuales</Text>

      <View style={styles.cajaPresupuestos} >  

        <Text> Lista Presupuestos Creados</Text>
        <FlatList
        data={lista}
        renderItem={({item}) => (
            <Text style={styles.item} >{item.categoria} {item.presupuesto}</Text>
        )}
        />

      </View>
























    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#15297c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        color: 'white',
        fontSize: 22,
        

    },
    label: {
        color: 'white',
        alignSelf: 'flex-start',
    },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
    botones: {
        marginVertical: 10,
    },
});