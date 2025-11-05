import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function TransaccionesScreen() {
  // Datos simulados de transacciones (no funcionales)
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
          { color: item.monto.includes("-") ? "#ff5e5e" : "#4caf50" },
        ]}
      >
        {item.monto}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de Transacciones</Text>
      <FlatList
        data={transacciones}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.lista}
      />
    </View>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15297c",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  lista: {
    backgroundColor: "#ffffff20",
    borderRadius: 15,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#15297c",
  },
  fecha: {
    fontSize: 12,
    color: "#444",
  },
  monto: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
