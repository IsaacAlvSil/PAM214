import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { Switch, TouchableWithoutFeedback} from 'react-native-web';

export default function BotonesScreen(){
  const [accion, setAccion] = useState('nada');
  const [isDisabled, setDisabled] = useState(false);
    return (
      <View style={styles.container}>
        <Text>
          Activado
        </Text>
        <Switch
        onValueChange={() => setDisabled(!isDisabled)}
        value={isDisabled}
        />
        <Text>
          {accion}
        </Text>
        <Pressable
          disabled={isDisabled}
          onPressIn={()=> setAccion('Pressable In')}
          onPressOut={()=> setAccion('Pressable Out')}
          onLongPress={()=> setAccion('Pressable Long')}


        >
          {({pressed}) =>(
            <View style={[styles.card, !pressed && styles.shadow]}>
          <View style={styles.mockImage}></View>
          <Text>
            {pressed ? 'Tarjeta presionada.' : 'Tarjeta no presionada'}
          </Text>
         </View>
          )}
        </Pressable>
        <TouchableOpacity
        disabled={isDisabled} 
        activeOpacity={0.1}
        onPress={() => setAccion('Opacity')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>
              esta es una tarjeta.
            </Text>

          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
        disabled={isDisabled}
        onPress={() => setAccion('Whitout Feedback')}
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>
              esta es una tarjeta.
            </Text>

          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});