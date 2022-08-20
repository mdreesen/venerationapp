import React from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

function WelcomeScreen(props) {

    const image = require('../assets/background.jpg');


    return (
        <View style={styles.background}>
            <Text style={styles.text}>VENERATION CHURCH</Text>
            <Image style={styles.logo} source={require('../assets/veneration-circle.webp')} />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </View>
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
        backgroundColor: "#141011"
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logo: {
        width: 265,
        height: 240,
        position: 'absolute',
        top: 112,
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