import React from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native";

export default function TransaccionesScreen() {
  const transacciones = [
    { id: "1", tipo: "Depósito", monto: "+$1,200.00", fecha: "01/11/2025" },
    { id: "2", tipo: "Retiro", monto: "-$350.00", fecha: "02/11/2025" },
    { id: "3", tipo: "Depósito", monto: "+$800.00", fecha: "03/11/2025" },
    { id: "4", tipo: "Transferencia recibida", monto: "+$1,500.00", fecha: "03/11/2025" },
    { id: "5", tipo: "Pago enviado", monto: "-$200.00", fecha: "04/11/2025" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.tipo}>{item.tipo}</Text>
        <Text style={styles.fecha}>{item.fecha}</Text>
      </View>
      <Text
        style={[
          styles.monto,
          { color: item.monto.includes("-") ? "#ff8a8a" : "#90ee90" },
        ]}
      >
        {item.monto}
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYif2M6fKDGvl-Mmjd5jgZ7Bnm46zWAOZJHg&s' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Historial de Transacciones</Text>
        <View style={styles.listaContainer}>
          <FlatList
            data={transacciones}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={styles.lista}
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 25,
    textAlign: "center",
  },
  listaContainer: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    padding: 15,
  },
  lista: {
    width: "100%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  tipo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  fecha: {
    fontSize: 12,
    color: "#e0e0e0",
  },
  monto: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
