import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
const logoImg = require("./assets/favicon.png");


export default function App() {
  
    return (
      <View style={{flex:1, backgroundColor:'lightblue', padding:60}}>
        <ScrollView>
        <Image source={logoImg} style={{width:300, height:300}}/>
        <Text>Cupidatat laboris pariatur est dolore. Ea dolor proident ex quis nisi. Velit minim amet enim duis ad anim id mollit dolor quis tempor. Reprehenderit veniam anim ex reprehenderit proident reprehenderit. Aute occaecat eu labore velit est sunt deserunt aute ipsum nulla veniam. Elit cupidatat enim labore culpa ad ipsum fugiat irure veniam culpa exercitation qui esse duis. Nostrud labore laboris et quis minim sit qui sunt deserunt deserunt deserunt aliqua ex.  </Text>
              <Image source={logoImg} style={{width:300, height:300}}/>
              <Image source={logoImg} style={{width:300, height:300}}/>

      </ScrollView>
      </View>
    )
  }