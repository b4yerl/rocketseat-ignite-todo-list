import React from "react";
import Task from "../../interfaces/Task";
import { Text, View } from "react-native";

export default function TaskItem(props: Task): JSX.Element {
  return (
    <View>
      <Text>
        {props.description}
      </Text>
    </View>
  )
}