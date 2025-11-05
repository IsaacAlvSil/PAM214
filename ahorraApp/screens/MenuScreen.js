import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import TransaccionesScreen from './Transacciones';
import NuevaTransaccionScreen from './NuevaTransaccionScreen';
import DetallesTransaccionScreen from './DetallesTransaccionScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'transacciones':
      return <TransaccionesScreen />;

    case 'nuevaTransaccion':
      return <NuevaTransaccionScreen />;

    case 'detalles':
      return <DetallesTransaccionScreen />;

    default:
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Screens</Text>
          <Button onPress={() => setScreen('transacciones')} title="Transacciones" />
          <Button onPress={() => setScreen('nuevaTransaccion')} title="Nueva Transacción" />
          <Button onPress={() => setScreen('detalles')} title="Detalles de Transacción" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15297c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
});
