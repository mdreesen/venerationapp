import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, TextInput } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emailText, onChangeEmailText] = React.useState("");
  const [passwordText, onChangePasswordText] = React.useState("");

  const emailInput = (
    <View>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmailText}
        value={emailText}
      />
    </View>
  );

  const passwordInput = (
    <View>
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePasswordText}
        value={passwordText}
      />
    </View>
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SafeAreaView>
              {emailInput}
              {passwordInput}
            </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >

        <Text style={styles.textStyle}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "transparent",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;