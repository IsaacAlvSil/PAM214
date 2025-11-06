import { Text, StyleSheet, View, Button, Image, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';
import TransaccionesScreen from './Transacciones';
import NuevaTransaccionScreen from './NuevaTransaccionScreen';
import DetallesTransaccionScreen from './DetallesTransaccionScreen';
import GraficasScreen from './GraficasScreen';
import FiltradoScreen from './FiltradoScreen';
import CategoriaScreen from './CategoriaScreen';
import InicioSesionScreen from './InicioSesionScreen';
import ListaPresupuestos from './ListaPresupuestos';
import PresupuestosScreen from './PresupuestosScreen';
import ValidacionCredencialesScreen from './ValidacionCredencialesScreen';
import InicioScreen from './InicioScreen';

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

    case 'presupuestos':
      return <PresupuestosScreen/>;

    case 'validar credenciales':
      return <ValidacionCredencialesScreen/>;

    case 'inicio':
      return <InicioScreen/>;

    default:
      return (
        <ImageBackground
          source={require('../assets/fondo.jpeg')}
          style={styles.fondo}
        >
          <View style={styles.overlay}>
            
              <View style={styles.logoContainer}>
                <Image 
                  source={require('../assets/logo_ahorraApp.png')} 
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.text}>Screens</Text>
              
              <ScrollView 
              contentContainerStyle={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.botonesContainer}>
                <Button color="#03A9F4" onPress={() => setScreen('inicio sesion')} title="Inicio Sesión"/>
                <Button color="#03A9F4" onPress={() => setScreen('inicio')} title="Inicio"/>
                <Button color="#03A9F4" onPress={() => setScreen('validar credenciales')} title="Validar Credenciales"/>
                <Button color="#03A9F4" onPress={() => setScreen('transacciones')} title="Transacciones" />
                <Button color="#03A9F4" onPress={() => setScreen('nuevaTransaccion')} title="Nueva Transacción" />
                <Button color="#03A9F4" onPress={() => setScreen('detalles')} title="Detalles de Transacción" />
                <Button color="#03A9F4" onPress={() => setScreen('graficas')} title="Gráficas"/>
                <Button color="#03A9F4" onPress={() => setScreen('filtrado')} title="Filtrado"/>
                <Button color="#03A9F4" onPress={() => setScreen('categoria')} title="Categoría"/>
                <Button color="#03A9F4" onPress={() => setScreen('lista presupuestos')} title="Lista Presupuestos"/>
                <Button color="#03A9F4" onPress={() => setScreen('presupuestos')} title="Presupuestos"/>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      );
  }
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(21, 41, 124, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logoContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 1,
  marginTop: 2,
  width: '100%',
},

  logo: {
    width: 350,
    height: 350,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  botonesContainer: {
    width: '90%',
    gap: 10,
  },
});
