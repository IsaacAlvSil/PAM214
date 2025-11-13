import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';

export default function ModalScreen(){
  const [showModal, setShowModal] = useState(false);


    return (
      <View style={styles.contenedorMain}>
        <TouchableOpacity
        style={styles.botonAbrir}
        onPress={()=> setShowModal(true)}
        activeOpacity={0.8}
        >
          <Text style={styles.textoBoton}>abrir Modal</Text>
        </TouchableOpacity>

        <Modal
        visible={showModal}
        transparent={true}
        animationType='fade'
        onRequestClose={()=> setShowModal(false)}
        >
        <View style={styles.contenedorModal}>
          <View style={styles.modal}>
            <Text style={styles.titulo}>HOLA</Text>
            <Text style={styles.mensaje}>esto es un modal</Text>

            <TouchableOpacity style={styles.botonCerrar}
            onPress={()=> setShowModal(false)}
            activeOpacity={0.8}
            >
              <Text style={styles.textoCerrar}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
      </View>
    )
  }

const styles = StyleSheet.create({
  contenedorMain: {
    flex: 1,
    backgroundColor: '#36F79F',
    alignItems: 'center',
    justifyContent: 'center',
  },


  botonAbrir: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  contenedorModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  modal: {
    width: '80%',
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  mensaje: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  botonCerrar: {
    backgroundColor: '#F7363C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoCerrar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});