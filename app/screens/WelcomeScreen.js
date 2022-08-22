import React from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

function WelcomeScreen(props) {

    const backgroundImage = require('../assets/background.jpg');
    const logo = require('../assets/veneration-logo.webp')


    return (
            <ImageBackground style={styles.background} source={backgroundImage}>
                {/* <Text style={styles.text}>VENERATION CHURCH</Text> */}
                <Image style={styles.logo} source={logo} />
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logo: {
        width: 292,
        height: 100,
        position: 'absolute',
        top: 134,
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
        fontSize: 22,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white",
        fontFamily: 'aktiv-grotesk',
        width: '100%',
        height: 100,
        position: 'absolute',
        top: 50,
    }
});

export default WelcomeScreen;