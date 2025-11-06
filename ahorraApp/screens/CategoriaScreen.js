import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CategoriaScreen({ goBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfica por Categoría</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ingresos totales: $5,000</Text>
        <Text style={styles.cardSubtitle}>Gastos del mes: $3,200</Text>
      </View>

      <View style={styles.graficaPlaceholder}>
        <Text>🎯 Gráfica Circular Aquí</Text>
        <Text style={styles.placeholderText}>Como tu diseño de Figma</Text>
      </View>

      <View style={styles.lista}>
        <Text style={styles.item}>• Salario: 12.4%</Text>
        <Text style={styles.item}>• Renta: 10.3%</Text>
        <Text style={styles.item}>• Bills: 18.6%</Text>
        <Text style={styles.item}>• Inversiones: 24.1%</Text>
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
  lista: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
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