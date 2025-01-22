import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { useAppContext } from "../../../AppContext";

export default function TaskBox(): JSX.Element {
  const { taskList } = useAppContext();

  return(
    <View style={styles.container}>
      <View>
        <View>
          <View>
            <Text>Criadas</Text>
          </View>
          <View>
            <Text>Concluídas</Text>
          </View>
        </View>
        <View style={{ backgroundColor: Colors.GRAY300, width: '100%', height: 1, opacity: 0.3 }} />
      </View>
      <ScrollView>
        { 
          (taskList.length == 0) && 
          <View>
            <Image
              source={require('../../../assets/Logo.png')}
            />
            <View>
              <Text>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
          
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    flex: 1
  }
})