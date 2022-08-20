import React from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

function WelcomeScreen(props) {

    const image = require('../assets/background.jpg');


    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>VENERATION CHURCH</Text>
        <Image style={styles.logo} source={require('../assets/veneration-logo-size.png')} />
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: 'center'
    },
    logo: {
        width: 265,
        height: 100,
        position: 'absolute',
        top: 50,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#172d36',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    text: {
      color: "black",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "white",
      fontFamily: 'aktiv-grotesk',
      width: 265,
      height: 100,
      position: 'absolute',
      top: 50,
    }
  });

export default WelcomeScreen;