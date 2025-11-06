import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GraficasScreen({ goBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfica por Mes</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ingresos totales: $5,000</Text>
        <Text style={styles.cardSubtitle}>Gastos del mes: $3,200</Text>
      </View>

      <View style={styles.graficaPlaceholder}>
        <Text>📅 Gráfica Mensual Aquí</Text>
        <Text style={styles.placeholderText}>Tendencias por mes</Text>
      </View>

      <View style={styles.estadisticas}>
        <Text style={styles.estadistica}>Mes con más ingresos: Enero</Text>
        <Text style={styles.estadistica}>Mes con más gastos: Diciembre</Text>
        <Text style={styles.estadistica}>Promedio mensual: $3,200</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  graficaPlaceholder: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  placeholderText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  estadisticas: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  estadistica: {
    fontSize: 16,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});