import { Text, StyleSheet, View, Button,} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import PracticaInput from './PracticaInput'
import ImageBackgroundS from './ImageBackgroundS'
import ScrollView from './ScrollView'
import ActivityIndicator from './ActivityIndicator'
import FlatList from './FlatList'
import Modal from './Modal'
import BottomSheet from './BottomSheet'
import Repaso from './Repaso'

//import { ActivityIndicator, FlatList, ImageBackground, Modal, ScrollView, TextInput } from 'react-native-web';

export default function MenuScreen ()  {

    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        
        case 'botones':
            return <BotonesScreen/>

        case 'PracticaInput':
            return <PracticaInput/>

        case 'ImageBackgroundS':
            return <ImageBackgroundS/>

        case 'ScrollView':
            return <ScrollView/>

        case 'ActivityIndicator':
            return <ActivityIndicator/>

        case 'Flatlist':
            return <FlatList/>

        case 'Modal':
            return <Modal/>

        case 'BottomSheet':
            return <BottomSheet/>

        case 'Repaso':
            return <Repaso/>    

        case 'menu':
            default:
                return (
      <View style={styles.container}>
        <Text style={styles.text}>MenuPracticas</Text>
        <Button onPress={()=>setScreen('contador')} title='Practica:Contador'/>
        <Button onPress={()=>setScreen('botones')} title='Practica:Buttons'/>
        <Button onPress={()=>setScreen('PracticaInput')} title='Practica: Text imput'/>
        <Button onPress={()=>setScreen('ImageBackgroundS')} title='Practica: ImageBackground'/>
        <Button onPress={()=>setScreen('ScrollView')} title='Practica:Scroll View'/>
        <Button onPress={()=>setScreen('ActivityIndicator')} title='Practica:Activity indicator'/>
        <Button onPress={()=>setScreen('FlatList')} title='Practica:Flat List'/>
        <Button onPress={()=>setScreen('Modal')} title='Practica:Modal'/>
        <Button onPress={()=>setScreen('BottomSheet')} title='Practica:Bottom Sheet'/>
        <Button onPress={()=>setScreen('Repaso')} title='Repaso'/>
      </View>
    )             
    }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#212121ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    backgroundColor: 'white',
  },
});