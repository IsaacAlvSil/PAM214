import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

export default function ActivityScreen() {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Presiona para iniciar carga</Text>

      <ActivityIndicator
        style={styles.indicador}
        animating={cargando}
        size="large"
        color="#007BFF"
        hidesWhenStopped={true}
      />

      <View style={styles.botonContainer}>
        <Button color="red" title="Iniciar carga" onPress={iniciarCarga} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  texto: {
    fontFamily: 'Times New Roman',
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  indicador: {
    marginVertical: 10,
  },
  botonContainer: {
    marginTop: 30,
  },
});