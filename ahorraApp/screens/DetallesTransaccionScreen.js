import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function DetallesTransaccionScreen() {
  const [monto, setMonto] = useState("250");
  const [destinatario, setDestinatario] = useState("Carlos Pérez");
  const [descripcion, setDescripcion] = useState("Pago de servicios");
  const [editando, setEditando] = useState(false);

  return (
    <ImageBackground
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Detalles de la Transacción</Text>

        <Text style={styles.label}>Destinatario:</Text>
        <TextInput
          style={[styles.input, !editando && styles.disabled]}
          value={destinatario}
          onChangeText={setDestinatario}
          editable={editando}
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>Monto:</Text>
        <TextInput
          style={[styles.input, !editando && styles.disabled]}
          value={monto}
          onChangeText={setMonto}
          editable={editando}
          keyboardType="numeric"
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={[styles.input, !editando && styles.disabled, { height: 70 }]}
          value={descripcion}
          onChangeText={setDescripcion}
          editable={editando}
          multiline
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => setEditando(!editando)}
        >
          <Text style={styles.buttonText}>
            {editando ? "Guardar cambios" : "Editar datos"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => console.log("Volver al menú")}
        >
          <Text style={styles.buttonText}>Volver al menú</Text>
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
    paddingHorizontal: 25,
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
  disabled: {
    opacity: 0.6,
  },
  buttonPrimary: {
    backgroundColor: "#4c7c3f",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonSecondary: {
    backgroundColor: "#1c3879",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
