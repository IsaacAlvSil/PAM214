import React, { useState } from 'react';
import {Text,StyleSheet,View,FlatList,TouchableOpacity,ImageBackground,} from 'react-native';

export default function ListaPresupuestos() {
  const [lista, setLista] = useState([
    { categoria: 'Alimentación', presupuesto: '$ 1,200', key: '1' },
    { categoria: 'Ocio', presupuesto: '$ 600', key: '2' },
    { categoria: 'Transporte', presupuesto: '$ 400', key: '3' },
    { categoria: 'Deudas', presupuesto: '$ 5,000', key: '4' },
    { categoria: 'Servicios', presupuesto: '$ 300', key: '5' },
  ]);

  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Presupuestos Mensuales</Text>

        <View style={styles.cajaPresupuestos}>
          <Text style={styles.texto}>Lista de presupuestos creados</Text>

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

          <View style={styles.botones}>
            <TouchableOpacity style={styles.botonAgregar} activeOpacity={0.8}>
              <Text style={styles.botonTexto}>Agregar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonQuitar} activeOpacity={0.8}>
              <Text style={styles.botonTexto}>Quitar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  cajaPresupuestos: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '90%',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  texto: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  lista: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoCategoria: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  textoPresupuesto: {
    fontSize: 16,
    color: '#0a6d0a',
    fontWeight: 'bold',
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  botonAgregar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  botonQuitar: {
    backgroundColor: '#e53935',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
