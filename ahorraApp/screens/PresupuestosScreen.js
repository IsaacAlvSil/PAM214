import React, { useState } from 'react';
import {Text,StyleSheet,View,Alert,TextInput,TouchableOpacity,ImageBackground,} from 'react-native';

export default function PresupuestosScreen() {
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');

  const mostrarAlerta = () => {
    if (monto.trim() === '' || categoria.trim() === '') {
      Alert.alert('Error', 'Favor de rellenar todos los campos');
    } else {
      Alert.alert(
        'Presupuesto definido',
        `Tu presupuesto mensual de ${categoria} es de ${monto} pesos mexicanos`
      );
      setMonto('');
      setCategoria('');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Presupuestos</Text>

        <View style={styles.cajaPresupuesto}>
          <Text style={styles.textoIntro}>Establece tu presupuesto mensual</Text>

          <Text style={styles.texto}>Monto</Text>
          <TextInput
            style={styles.input}
            placeholder="$$$"
            placeholderTextColor="#777"
            value={monto}
            onChangeText={setMonto}
            keyboardType="numeric"
          />

          <Text style={styles.texto}>Categoría</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. Comida, Transporte, Ocio..."
            placeholderTextColor="#777"
            value={categoria}
            onChangeText={setCategoria}
          />

          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.8}
            onPress={mostrarAlerta}
          >
            <Text style={styles.botonTexto}>Aceptar</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  cajaPresupuesto: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    padding: 25,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textoIntro: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#000',
  },
  boton: {
    backgroundColor: '#4c7c3f',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
