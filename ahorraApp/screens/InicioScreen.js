import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity,ScrollView} from 'react-native';

export default function InicioScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s',
      }}
      style={styles.background}
    >
      <ScrollView>  
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image 
            source={require('../assets/user.png')} 
            style={styles.logo} 
          />

          <Text style={styles.title}>Bienvenido a Ahorra+App</Text>
          <Text style={styles.subtitle}>
            Tu asistente personal para administrar tus gastos, establecer metas 
            y lograr tus objetivos financieros.
          </Text>

          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Text style={styles.menuTitle}>Gráficas</Text>
              <Text style={styles.menuDesc}>Analiza tus gastos mensuales</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Text style={styles.menuTitle}>Presupuestos</Text>
              <Text style={styles.menuDesc}>Organiza tus gastos por categoría</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Text style={styles.menuTitle}>Metas de Ahorro</Text>
              <Text style={styles.menuDesc}>Establece objetivos financieros</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Text style={styles.menuTitle}>Actividad</Text>
              <Text style={styles.menuDesc}>Consulta tu historial de movimientos</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.startButton} activeOpacity={0.8}>
            <Text style={styles.startText}>Comenzar →</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // oscurece fondo para resaltar texto
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#e0e0e0',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 30,
  },
  menu: {
    width: '100%',
  },
  menuItem: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuDesc: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: 25,
  },
  startText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
