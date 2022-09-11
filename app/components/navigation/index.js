import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View, SafeAreaView, Button, TouchableHighlight, Text } from "react-native";

export default function Navigation({ navigation }) {

  const titles = ['About', 'Sermons', 'Events']

  return (
    <View style={styles.navContainer}>
      {
        titles.map((title, index) => {
          return (
            <Pressable
              onPress={() => alert(`button pressed -> ${title}`)}
              key={`nav-${index}`}
            >
              <Text style={styles.navText}>{title}</Text>
            </Pressable>

          )
        })
      }
    </View >
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
  },
  navText: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'none'
  }
});