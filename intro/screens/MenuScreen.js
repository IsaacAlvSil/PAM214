import { Text, StyleSheet, View, Button,} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInput from './TextInput'
import ImageBackground from './ImageBackground'
import ScrollView from './ScrollView'
import ActivityIndicator from './ActivityIndicator'
import FlatList from './FlatList'
import Modal from './Modal'
import BottomSheet from './BottomSheet'
//import { ActivityIndicator, FlatList, ImageBackground, Modal, ScrollView, TextInput } from 'react-native-web';

export default function MenuScreen ()  {

    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        
        case 'botones':
            return <BotonesScreen/>

        case 'TextInput':
            return <TextInput/>

        case 'ImageBackground':
            return <ImageBackground/>

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

        case 'menu':
            default:
                return (
      <View>
        <Text>MenuPracticas</Text>
        <Button onPress={()=>setScreen('contador')} title='Practica:Contador'/>
        <Button onPress={()=>setScreen('botones')} title='Practica:Buttons'/>
        <Button onPress={()=>setScreen('Textimput')} title='Practica: Text Imput'/>
        <Button onPress={()=>setScreen('ImageBackground')} title='Practica: ImageBackground'/>
        <Button onPress={()=>setScreen('ScrollView')} title='Practica:Scroll View'/>
        <Button onPress={()=>setScreen('ActivityIndicator')} title='Practica:Activity indicator'/>
        <Button onPress={()=>setScreen('FlatList')} title='Practica:Flat List'/>
        <Button onPress={()=>setScreen('Modal')} title='Practica:Modal'/>
        <Button onPress={()=>setScreen('BottomSheet')} title='Practica:Bottom Sheet'/>
      </View>
    )             
    }
}