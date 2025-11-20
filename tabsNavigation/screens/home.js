import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  {Ionicons} from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="#e49a19ff"/>
        <Text style={styles.title}>Bienvenido a la pantalla principal Isaac</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#e49a19ff',
  },
});