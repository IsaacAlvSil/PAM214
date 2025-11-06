import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

export default function ListaPresupuestos() {
  const [lista, setLista] = useState([
    { categoria: "Alimentación", presupuesto: "$ 1,200", key: "1" },
    { categoria: "Ocio", presupuesto: "$ 600", key: "2" },
    { categoria: "Transporte", presupuesto: "$ 400", key: "3" },
    { categoria: "Deudas", presupuesto: "$ 5,000", key: "4" },
    { categoria: "Servicios", presupuesto: "$ 300", key: "5" },
  ]);

  return (
    <ImageBackground
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Presupuestos Mensuales</Text>

        <View style={styles.cajaPresupuestos}>
          <Text style={styles.texto}>Lista de presupuestos creados</Text>

          <FlatList
            style={styles.lista}
            data={lista}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.textoCategoria}>{item.categoria}</Text>
                <Text style={styles.textoPresupuesto}>{item.presupuesto}</Text>
              </View>
            )}
          />
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  titulo: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  cajaPresupuestos: {
    backgroundColor: "rgba(255, 255, 255, 0.15)", // efecto glassmorphism
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backdropFilter: "blur(8px)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  texto: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  lista: {
    width: "100%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  textoCategoria: {
    fontSize: 16,
    color: "#15297c",
    fontWeight: "600",
  },
  textoPresupuesto: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
});
