
import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";

import UsuarioController from "../controllers/UsuarioController";

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
      controller.addListener(cargarUsuarios);
    };

    init();

    return () => controller.removeListener(cargarUsuarios);
  }, []);

 
  const handleInsertar = async () => {
    if (guardando) return;

    try {
      setGuardando(true);

      const nuevo = await controller.crearUsuario(nombre);

      Alert.alert(
        "Usuario Creado",
        `"${nuevo.nombre}" guardado con ID: ${nuevo.id}`
      );

      setNombre("");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };

  
  const handleEditar = (usuario) => {
    setUsuarioEditando(usuario);
    setNombre(usuario.nombre);
  };

  
  const handleCancelarEdicion = () => {
    setUsuarioEditando(null);
    setNombre("");
  };

  
  const handleActualizar = async () => {
    if (!usuarioEditando || guardando) return;

    try {
      setGuardando(true);

      await controller.actualizarUsuario(usuarioEditando.id, nombre);

      Alert.alert(
        "Usuario Actualizado",
        `Se actualizó el usuario #${usuarioEditando.id}`
      );

      setUsuarioEditando(null);
      setNombre("");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };

 
  const confirmarEliminar = (usuario) => {
    if (guardando) return;

    Alert.alert(
      "Eliminar usuario",
      `¿Seguro que deseas eliminar a "${usuario.nombre}" (ID: ${usuario.id})?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              setGuardando(true);
              await controller.eliminarUsuario(usuario.id);

              if (usuarioEditando && usuarioEditando.id === usuario.id) {
                setUsuarioEditando(null);
                setNombre("");
              }

              Alert.alert("Usuario Eliminado", "El registro fue eliminado.");
            } catch (error) {
              Alert.alert("Error", error.message);
            } finally {
              setGuardando(false);
            }
          },
        },
      ]
    );
  };

  const renderUsuario = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{item.id}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>

        <Text style={styles.userId}>ID: {item.id}</Text>

        <Text style={styles.userDate}>
          {new Date(item.fecha_creacion).toLocaleDateString("es-MX")}
        </Text>

        
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.actionButtonEdit}
            onPress={() => handleEditar(item)}
            disabled={guardando}
          >
            <Text style={styles.actionButtonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButtonDelete}
            onPress={() => confirmarEliminar(item)}
            disabled={guardando}
          >
            <Text style={styles.actionButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> INSERT & SELECT</Text>

      <Text style={styles.subtitle}>
        {Platform.OS === "web"
          ? " WEB (LocalStorage)"
          : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}>
          {usuarioEditando ? "Editar Usuario" : "Insertar Usuario"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity
          style={[styles.button, guardando && styles.buttonDisabled]}
          onPress={usuarioEditando ? handleActualizar : handleInsertar}
          disabled={guardando}
        >
          <Text style={styles.buttonText}>
            {guardando
              ? "Procesando..."
              : usuarioEditando
              ? "Actualizar Usuario"
              : "Agregar Usuario"}
          </Text>
        </TouchableOpacity>

        
        {usuarioEditando && (
          <TouchableOpacity
            style={[styles.buttonCancel, guardando && styles.buttonDisabled]}
            onPress={handleCancelarEdicion}
            disabled={guardando}
          >
            <Text style={styles.buttonCancelText}>Cancelar edición</Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="selectSection" style={styles.selectSection}>
        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={cargarUsuarios}
            disabled={loading || guardando}
          >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>
                  Agrega el primero arriba
                </Text>
              </View>
            }
            contentContainerStyle={
              usuarios.length === 0 && styles.emptyList
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonCancel: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonCancelText: {
    color: "#666",
    fontSize: 15,
    fontWeight: "500",
  },
  selectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: "#007AFF",
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
    fontSize: 14,
  },
  userItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  userNumberText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: "#007AFF",
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: "#666",
  },
  
  actionsRow: {
    flexDirection: "row",
    marginTop: 8,
    gap: 8,
  },
  actionButtonEdit: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#007AFF",
    marginRight: 8,
  },
  actionButtonDelete: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#FF3B30",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#bbb",
  },
});
