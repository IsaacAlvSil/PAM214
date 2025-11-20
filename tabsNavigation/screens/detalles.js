import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default function Detalles({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles de Usuario</Text>
            <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'blue',
  },
});