import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function NuevaTransaccionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nueva Transacción</Text>

      <Text style={styles.label}>Nombre del destinatario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Juan Pérez"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Monto a enviar</Text>
      <TextInput
        style={styles.input}
        placeholder="$0.00"
        keyboardType="numeric"
        placeholderTextColor="#ccc"
      />

      <Text style={styles.label}>Descripción (opcional)</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Motivo o nota..."
        placeholderTextColor="#ccc"
        multiline
      />

      <View style={styles.botonContainer}>
        <Button title="Enviar Transacción" color="#0d1f5b" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15297c",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ffffff20",
    borderRadius: 10,
    padding: 10,
    color: "#fff",
    marginBottom: 15,
  },
  botonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
