import { Text, StyleSheet, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

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
    <View style={styles.container}>
      <Text style={styles.titulo}>Presupuestos</Text>

      <View style={styles.cajaPresupuesto}>
        <Text style={styles.texto}>Establece tu presupuesto mensual</Text>

        <Text style={styles.texto}>Monto</Text>
        <TextInput
          style={styles.input}
          placeholder="$$$"
          value={monto}
          onChangeText={setMonto}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Categoría..."
          value={categoria}
          onChangeText={setCategoria}
        />

        <TouchableOpacity style={styles.boton} activeOpacity={0.8} onPress={mostrarAlerta}>
          <Text style={styles.botonTexto}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15297c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    marginBottom: 20,
  },
  cajaPresupuesto: {
    backgroundColor: '#1a2a69c0',
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  texto: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
