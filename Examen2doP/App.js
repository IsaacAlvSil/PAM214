import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TextInput, Button,Alert} from 'react-native';
import react, {component, useState} from 'react';

export default function App () {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la app</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEzebLGIxVUGhCEUu-ti9BozzGwJbTuDYJajpa7y9V1R9qP_bw6i3DXndUw2v-kKGLkk&usqp=CAU" }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenidos!</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});