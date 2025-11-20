import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import  {Ionicons} from '@expo/vector-icons';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de usuario</Text>
      </View>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detalle')}>
        <Text style={styles.detalles}>Detalles de Usuario</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
  button:{
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    top:15,
  },
  detalles: {
    color: 'white',
    fontSize: 16,
  },
});