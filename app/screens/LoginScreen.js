import React from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView, Image, Button } from 'react-native';

// Import Components
import LoginModal from '../components/loginModal';
import SignupModal from '../components/signupModal';


function WelcomeScreen(props) {

    const backgroundImage = require('../assets/bg-chalkboard.webp');
    const logo = require('../assets/v-logo-black.webp')

    return (
        <ImageBackground style={styles.background} source={backgroundImage}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.buttonContainer}>
                <View style={styles.loginButton}>
                <LoginModal />
                </View>
                <View style={styles.registerButton}>
                    <SignupModal/>
                </View>
            </View>
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
        height: 300,
        position: 'absolute',
        top: 134,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        // backgroundColor: '#172d36',
    },
    registerButton: {
        width: '100%',
        height: 70,
        // backgroundColor: '#4ecdc4',
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