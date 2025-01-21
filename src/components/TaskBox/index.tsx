import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function TaskBox(): JSX.Element {
  return(
    <ScrollView style={styles.container}>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1
  }
})