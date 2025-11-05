import { Text, StyleSheet, View, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function PresupuestosScreen() {
    const [monto, setMonto] = useState('');
    const [categoria, setCategoria] = useState('');

    const mostrarAlerta = () => {
        if (monto.trim() === ' ' || categoria.trim() === ' ') {
            alert('Error, favor de rellenar todos los campos');
            Alert.alert('Error, favor de rellenar todos los campos');
        } else {
            alert(`Se ha definido correctamente tu presupuesto de ${monto} con la categoría de ${categoria}`);
            Alert.alert(`Se ha definido correctamente tu presupuesto de ${monto} con la categoría de ${categoria}`);

            setMonto('');
            setCategoria('');

        }



    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Presupuestos</Text>

            <view style={styles.cajaPresupuesto}>
                <Text> Establece tu presupuesto mensual</Text>
                <br></br>
                <Text> Monto</Text>
                <TextInput

                    style={styles.input}
                    placeholder='$$$'
                    value={monto}
                    onChangeText={setMonto}
                    keyboardType='default'

                />

                <TextInput

                    style={styles.input}
                    placeholder='Categoría...'
                    value={categoria}
                    onChangeText={setCategoria}
                    keyboardType='default'

                />
                <TouchableOpacity
                activeOpacity={0.2}
                onPress={mostrarAlerta}
                
                >
                    <Text>Aceptar</Text>
                </TouchableOpacity>

                
            </view>















        </View>
    )

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