import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FiltradoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Gráficas y Filtrado</Text>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('GraficaCategoria')}
      >
        <Text style={styles.menuText}>Gráfica por Categoría</Text>
        <Text style={styles.menuDescription}>Distribución de gastos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('GraficaMes')}
      >
        <Text style={styles.menuText}>Gráfica por Mes</Text>
        <Text style={styles.menuDescription}>Tendencias mensuales</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.menuItem}
        onPress={() => navigation.navigate('Filtrado')}
      >
        <Text style={styles.menuText}>Filtrar Transacciones</Text>
        <Text style={styles.menuDescription}>Filtrar por criterios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Volver al Menú Principal</Text>
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
    marginBottom: 30,
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  backButton: {
    backgroundColor: '#666',
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