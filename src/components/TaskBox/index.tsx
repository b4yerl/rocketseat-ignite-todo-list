import React from "react";
import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { useAppContext } from "../../../AppContext";
import Counter from "../Counter";
import NoTask from "../NoTask";

export default function TaskBox(): JSX.Element {
  const { taskList, updateTaskState, removeTask } = useAppContext();

  return(
    <View style={styles.container}>
      <Counter criadas={ taskList.length } concluidas={ taskList.filter(i => i.done == true).length }/>


      <ScrollView>
        {
          (taskList.length == 0) ? <NoTask /> : taskList.map((task, index) => {
            return (
              <View key={ index } style={{ flexDirection: 'row', marginBottom: 8, marginHorizontal: 24 }}>
                <View style={ styles.taskContainer}>
                    <View
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 16, flex: 1 }}
                    onTouchStart={() => updateTaskState(task.description)}
                    >
                    <View style={ task.done ? styles.doneTaskSign : styles.todoTaskSign}>
                      { task.done && <Image source={require('../../../assets/Vector.png')} style={{ width: 12, height: 12 }}/> }
                    </View>
                    <Text style={[ styles.taskDescription, task.done ? { textDecorationLine: 'line-through' } : {} ]}>{ task.description }</Text>
                    </View>
                  <TouchableOpacity onPress={() => removeTask(task.description)}>
                    <Image source={require('../../../assets/Layer\ 2.png')}/>
                  </TouchableOpacity>

                </View>
              </View>
            )
          })


        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1
  },
  taskContainer: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: Colors.GRAY500,
    borderRadius: 8
  },
  todoTaskSign: {
    borderRadius: 50,
    borderColor: Colors.BLUE,
    borderWidth: 1,
    height: 24,
    width: 24
  },
  doneTaskSign: {
    borderRadius: 50,
    borderColor: Colors.PURPLE,
    backgroundColor: Colors.PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 24,
    width: 24,
  },
  taskDescription: {
    color: Colors.GRAY100,
    flexShrink: 1,
    fontSize: 14,
    lineHeight: 20
  }
})
