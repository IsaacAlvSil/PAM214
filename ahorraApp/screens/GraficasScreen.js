import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function GraficasScreen({ goBack }) {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gráfica por Mes</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ingresos totales: $5,000</Text>
          <Text style={styles.cardSubtitle}>Gastos del mes: $3,200</Text>
        </View>

        {/* 📊 Aquí reemplazamos el ícono por tu imagen local */}
        <View style={styles.graficaPlaceholder}>
          <Image
            source={require('../assets/g1.jpeg')}
            style={styles.graficaImagen}
            resizeMode="contain"
          />
        </View>

        <View style={styles.estadisticas}>
          <Text style={styles.estadistica}>Mes con más ingresos: Enero</Text>
          <Text style={styles.estadistica}>Mes con más gastos: Diciembre</Text>
          <Text style={styles.estadistica}>Promedio mensual: $3,200</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>← Volver</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 20,
    borderRadius: 25,
    marginBottom: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  graficaPlaceholder: {
    width: '90%',
    height: 220,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    overflow: 'hidden',
  },
  graficaImagen: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  estadisticas: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 20,
    borderRadius: 25,
    marginBottom: 25,
  },
  estadistica: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4c7c3f',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
