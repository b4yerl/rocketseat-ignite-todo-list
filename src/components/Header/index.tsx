import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";
import NewTask from "../NewTask";


export default function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/Logo.png")}
        style={ styles.image }
      />
      <NewTask />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY700,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    gap: 4,
    zIndex: 2
  },
  image: {
    height: 32
  }
})