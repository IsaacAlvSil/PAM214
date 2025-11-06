import { Text, StyleSheet, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import TransaccionesScreen from './Transacciones';
import NuevaTransaccionScreen from './NuevaTransaccionScreen';
import DetallesTransaccionScreen from './DetallesTransaccionScreen';
import GraficasScreen from './GraficasScreen';
import FiltradoScreen from './FiltradoScreen';
import CategoriaScreen from './CategoriaScreen';
import InicioSesionScreen from './InicioSesionScreen';
import ListaPresupuestos from './ListaPresupuestos';



export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'transacciones':
      return <TransaccionesScreen />;

    case 'nuevaTransaccion':
      return <NuevaTransaccionScreen />;

    case 'detalles':
      return <DetallesTransaccionScreen />;

    case 'graficas':
      return <GraficasScreen />;

    case 'filtrado':
      return <FiltradoScreen />;
    
    case 'categoria':
      return <CategoriaScreen />;

     case 'inicio sesion':
      return <InicioSesionScreen />;

    case 'lista presupuestos':
      return <ListaPresupuestos />;

    default:
      return (
        <View style={styles.container}>
          {/* Logo en la parte superior */}
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/logo_ahorraApp.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.text}>Screens</Text>
          <Button onPress={() => setScreen('inicio sesion')} title="inicio sesion"/>
          <Button onPress={() => setScreen('transacciones')} title="Transacciones" />
          <Button onPress={() => setScreen('nuevaTransaccion')} title="Nueva Transacción" />
          <Button onPress={() => setScreen('detalles')} title="Detalles de Transacción" />
          <Button onPress={() => setScreen('graficas')} title="graficas"/>
          <Button onPress={() => setScreen('filtrado')} title="filtrado"/>
          <Button onPress={() => setScreen('categoria')} title="categoria"/>
          <Button onPress={() => setScreen('lista presupuestos')} title="lista presupuestos"/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15297c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 50,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
});
