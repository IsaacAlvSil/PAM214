import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function NuevaTransaccionScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
      style={styles.background}
    >
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar Transacción</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 5,
  },
  input: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 25,
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4c7c3f",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
