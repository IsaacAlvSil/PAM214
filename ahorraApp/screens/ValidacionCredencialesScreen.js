import React from 'react';
import {View,Text,StyleSheet,ImageBackground,TouchableOpacity,ActivityIndicator,} from 'react-native';

export default function ValidacionCredencialesScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s',
      }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Validación de Credenciales</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            Estamos validando tus credenciales, por favor espera unos segundos...
          </Text>

          <ActivityIndicator size="large" color="#4CAF50" style={{ marginVertical: 20 }} />

          <Text style={styles.subtext}>
            Este proceso puede tardar unos momentos dependiendo de tu conexión.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>← Volver al Menú</Text>
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
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
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
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '500',
  },
  subtext: {
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '85%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
