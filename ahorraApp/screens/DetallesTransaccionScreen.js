import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function DetallesTransaccionScreen() {
  // Simulamos los datos de una transacción
  const [monto, setMonto] = useState('250');
  const [destinatario, setDestinatario] = useState('Carlos Pérez');
  const [descripcion, setDescripcion] = useState('Pago de servicios');
  const [editando, setEditando] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalles de la Transacción</Text>

      <Text style={styles.label}>Destinatario:</Text>
      <TextInput
        style={[styles.input, !editando && styles.disabled]}
        value={destinatario}
        onChangeText={setDestinatario}
        editable={editando}
      />

      <Text style={styles.label}>Monto:</Text>
      <TextInput
        style={[styles.input, !editando && styles.disabled]}
        value={monto}
        onChangeText={setMonto}
        editable={editando}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={[styles.input, !editando && styles.disabled]}
        value={descripcion}
        onChangeText={setDescripcion}
        editable={editando}
      />

      <View style={styles.botones}>
        {editando ? (
          <Button title="Guardar cambios" onPress={() => setEditando(false)} />
        ) : (
          <Button title="Editar datos" onPress={() => setEditando(true)} />
        )}
      </View>

      <Button title="Volver al menú" onPress={() => console.log('Volver al menú')} />
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
  label: {
    color: 'white',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  disabled: {
    backgroundColor: '#e0e0e0',
  },
  botones: {
    marginVertical: 10,
  },
});
