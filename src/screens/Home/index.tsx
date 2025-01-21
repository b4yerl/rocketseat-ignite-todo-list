import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import TaskBox from "../../components/TaskBox";

export default function Home(props: any): JSX.Element {
  return (
    <View style={ styles.container }>
      <Header />
      <TaskBox />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#1a1a1a'
  }
})