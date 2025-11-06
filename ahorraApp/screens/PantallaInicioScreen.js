import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';

export default function PantallaInicioScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Inicio</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('../assets/lAhorra-logo.jpg')} style={styles.logo} />
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Tu Saldo Actual:</Text>
          <Text style={styles.amount}>$14,892.50</Text>
          <Text style={styles.change}>+ $500.45 este mes</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Metas de Ahorro</Text>
          <Text style={styles.text}>Viaje a Japón — $5,000 / $8,000</Text>
          <Text style={styles.text}>Apartados — $8,500 / $10,000</Text>
        </View>

        <View style={styles.buttons}>
          <Button title="Invertir" onPress={() => alert('Ir a Invertir')} />
          <Button title="Metas" onPress={() => alert('Ir a Metas')} />
          <Button title="Transferir" onPress={() => alert('Ir a Transferir')} />
          <Button title="Notificaciones" onPress={() => alert('Ir a Notificaciones')} />
        </View>

        <View style={styles.bottom}>
          <Button title="Inicio" onPress={() => alert('Pantalla Inicio')} />
          <Button title="Transacciones" onPress={() => alert('Transacciones')} />
          <Button title="Gráficas" onPress={() => alert('Gráficas')} />
          <Button title="Ajustes" onPress={() => alert('Ajustes')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  section: {
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    color: '#d6f658',
    fontSize: 28,
    fontWeight: 'bold',
  },
  change: {
    color: '#8fe682',
  },
  text: {
    color: 'white',
  },
  buttons: {
    marginVertical: 10,
    alignItems: 'center',
    gap: 5,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
  },
});
