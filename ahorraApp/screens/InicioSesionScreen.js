import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet, Alert } from 'react-native';
import logo from '../assets/lAhorra-logo.jpg';

export default function InicioSesionScreen() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleAcceder = () => {
    if ( correo.trim() === '' || contrasena.trim() === '') {
      alert('Error Por favor llena todos los campos');
      Alert.alert('Error, Por favor llena todos los campos');
    } else {
      Alert.alert(` Bienvenido, Has iniciado sesión como: ${correo}, y con contraseña: ${contrasena}`);
      alert(` Bienvenido, Has iniciado sesión como: ${correo}, y con contraseña: ${contrasena}`);
    }
  };

  const handleRegistrar = () => {
    Alert.alert('Registro', 'Redirigiendo a registro...');
  };

  return (
 <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
        style={styles.background}
      >
        <View style={styles.container}>
          {/* Logo - también con ruta relativa */}
          <Image
           source={logo}
           style={styles.logo}
         />

          <TextInput
            style={styles.input}
            placeholder="Ingresar correo electrónico"
            placeholderTextColor="#ddd"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Ingresar contraseña"
            placeholderTextColor="#ddd"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
          />
          
          <TouchableOpacity>
            <Text style={styles.linkText}>¿Olvidaste la contraseña?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
          style={styles.button}
           onPress={handleAcceder}
           activeOpacity={0.2}
           >
            
            <Text style={styles.buttonText}>ACCEDER</Text>
          </TouchableOpacity>
          
          <Text style={styles.textoCuenta}>¿Aún no tienes cuenta?</Text>
          <TouchableOpacity onPress={handleRegistrar}>
            <Text style={styles.registrar}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Tus estilos permanecen igual...
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
  logo: {
    width: 250,
    height: 100,
    marginBottom: 60,
    resizeMode: 'contain',
  },
  input: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    borderRadius: 25,
    color: '#fff',
    marginBottom: 15,
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
    textDecorationLine: 'underline',
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
  textoCuenta: {
    color: '#fff',
    fontSize: 14,
  },
  registrar: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
  },
});