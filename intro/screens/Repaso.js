import React, { useState, useEffect } from "react";
import {View,Text,TextInput,Switch,Alert,StyleSheet,ImageBackground,Image,TouchableOpacity,SafeAreaView,} from "react-native";

export default function Repaso() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [acepta, setAcepta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={{
            uri: "https://www.reuters.com/resizer/v2/43YAWLITTZJLZIQTCP2JSS4KSM.jpg?auth=97aa50895d96abc0233aee045e9246a221d9afaa3d2470fd2bc7ba66baa1a5cc&height=2400&width=1920&quality=80&smart=true",
          }}
          style={styles.splashLogo}
        />
        <Text style={styles.splashText}>Bienvenido al repaso</Text>
      </View>
    );
  }
  const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const registrar = () => {
    if (nombre.trim() === "" || correo.trim() === "") {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }

    if (!validarCorreo(correo)) {
      Alert.alert("Error", "Por favor ingresa un correo electrónico válido");
      return;
    }

    if (!acepta) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      return;
    }

    Alert.alert(
      "Registro exitoso",
      `Nombre: ${nombre}\nCorreo: ${correo}`,
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfXGCyQo6jEv5jypSeaEu9ZEvo-n2lNewyQ&s",
        }}
        style={styles.fondo}
      >
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#aaa"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={correo}
            onChangeText={(text) => setCorreo(text)}
          />

          <View style={styles.switchContainer}>
            <Switch value={acepta} onValueChange={(value) => setAcepta(value)} />
            <Text style={styles.textoSwitch}>
              Aceptar términos y condiciones
            </Text>
          </View>

          <TouchableOpacity style={styles.boton} onPress={registrar}>
            <Text style={styles.textoBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  splashLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  splashText: {
    color: "#fff",
    fontSize: 22,
  },
  fondo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedor: {
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 20,
    padding: 25,
    width: "85%",
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  textoSwitch: {
    color: "#fff",
    marginLeft: 10,
  },
  boton: {
    backgroundColor: "#00BFFF",
    padding: 12,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
  },
});
