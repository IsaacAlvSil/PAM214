import { Text, View, ScrollView, Image, ImageBackground, Button } from 'react-native';
import { useState } from 'react';
const logoImg = require("./assets/favicon.png");

 
export default function App(){
  const[mensaje, setMensaje] = useState("sin accion");
  
return (
      <View style={{flex: 1, backgroundColor:"lightblue", padding:60}}>
        <ScrollView> 
        <Image source={logoImg} style={{width:300, height:300}}/>
      <Text>Amet nisi eiusmod laborum laboris. Ad ad elit aliqua elit. 
        Cillum eiusmod ea ea cupidatat culpa. Adipisicing aliquip pariatur pariatur 
        cillum quis ea culpa qui officia. Sit duis enim incididunt et esse in aute dolor 
        veniam do labore. Dolore duis tempor minim eu aliqua ad ea aute sint.
        </Text>
        <Button
        title='Presione' onPress={()=> setMensaje("boton presionado")} 
        color="purple"/>

        <Text style={{marginTop:10 }}>{mensaje}</Text>

         <Image source={logoImg} style={{width:300, height:300}}/>
         </ScrollView>
      </View> 
    );
  }
