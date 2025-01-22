import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useNewTask } from "./useNewTask";

export default function NewTask(props: any): JSX.Element {
  const { isFocused, setIsFocused, textInput, setTextInput, submitData } = useNewTask();

  return(
    <View style={ styles.inputContainer }>
        <TextInput 
          style={[ styles.input, { borderColor: isFocused ? Colors.PURPLEDARK : Colors.GRAY700 } ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={Colors.GRAY300}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setTextInput}
          value={textInput}
        />
        <TouchableOpacity style={ styles.button }
          onPress={submitData}
        >
          <Image 
            source={require("../../../assets/Plus.png")}
          />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 270,
    height: 54,
    backgroundColor: Colors.GRAY500,
    color: Colors.GRAY100,
    borderRadius: 6,
    borderWidth: 1,
    padding: 16
  },
  inputContainer: {
    marginTop: 60,
    marginBottom: -150,
    flexDirection: 'row',
    gap: 4,
    marginHorizontal: 24
  },
  button: {
    backgroundColor: Colors.BLUEDARK,
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
})