import { Text, StyleSheet, View, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ListaPresupuestos() {

  const [lista, setLista] = useState([
    { categoria: 'Alimentación', presupuesto: '$ 1,200', key: '1' },
    { categoria: 'Ocio', presupuesto: '$ 600', key: '2' },
    { categoria: 'Transporte', presupuesto: '$ 400', key: '3' },
    { categoria: 'Deudas', presupuesto: '$ 5,000', key: '4' },
    { categoria: 'Servicios', presupuesto: '$ 300', key: '5' }
  ]);


  return (
    <View style={styles.container} >
      <Text style={styles.titulo} >Presupuestos Mensuales</Text>

      <View style={styles.cajaPresupuestos} >

        <Text style={styles.texto} > Lista de presupuesto creados</Text>
        <FlatList
          style={styles.lista}
          data={lista}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.textoCategoria}>{item.categoria}</Text>
              <Text style={styles.textoPresupuesto}>{item.presupuesto}</Text>
            </View>
          )}
        />
        <View style={styles.botones} >

          <TouchableOpacity
            style={styles.boton1}
            activeOpacity={0.2}
          >
            <Text>Agregar</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton2}
            activeOpacity={0.2}
          >
            <Text>Quitar</Text>

          </TouchableOpacity>
        </View>

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
    marginBottom: 15

  },

  cajaPresupuestos: {
    backgroundColor: '#1a2a69c0',
    width: '100%',
    borderRadius: 12
  },

  lista: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#1a2a69c0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },


  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  textoCategoria: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",

  },

  textoPresupuesto: {
    fontSize: 16,
    color: "#0a6d0a",
    fontWeight: "bold",
  },

  texto: {

    color: 'white',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14,
    marginLeft: 80

  },

  botones:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginBottom: 15
  },

  boton1: {
    backgroundColor: '#40e432cb',
    width: 70,
    borderRadius: 8,
    padding: 10,

  },

  boton2: {
    backgroundColor: '#f3392cee',
    width: '25%',
    borderRadius: 8,
    padding: 10


  },

});