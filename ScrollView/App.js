import { Text, StyleSheet, View, Pressable, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import { useState } from "react";
import { Switch, TouchableWithoutFeedback} from 'react-native-web';

export default function BotonesScreen(){
  const [accion, setAccion] = useState('nada');
  const [isDisabled, setDisabled] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
    return (
      <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      refreshControl ={
        <RefreshControl refreshing ={refreshing} onRefresh={onRefresh} />
      }
      stickyHeaderIndices={[0]}
      >
      <View style={styles.header}>
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
        </View>

        <View style={styles.content}>
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
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f7f7f7',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#cbd2d0ff',
        paddingTop: 10,
    },
    card: {
        width: 200,
        height: 250,
        backgroundColor: 'white',
        padding: 20,
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
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});