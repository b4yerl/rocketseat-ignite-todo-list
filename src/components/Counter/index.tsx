import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

interface CounterProps {
    criadas: number;
    concluidas: number;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
    return (
        <View style={styles.counterContainer}>
            <View style={styles.counter}>
            <Text style={styles.textoCriadas}>Criadas</Text>
            <View style={styles.counterNumber}>
                <Text style={{ color: Colors.GRAY200 }}>{ props.criadas }</Text>
            </View>
            </View>
            <View style={styles.counter}>
            <Text style={styles.textoConcluidas}>Concluídas</Text>
            <View style={styles.counterNumber}>
                <Text style={{ color: Colors.GRAY200 }}>{ props.concluidas }</Text>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 33,
    marginBottom: 20
  },
  counter: {
    flexDirection: 'row',
    gap: 8
  },
  counterNumber: {
    backgroundColor: Colors.GRAY400,
    alignItems: 'center',
    borderRadius: 8,
    width: 24,
    height: 20
  },
  textoCriadas: {
    color: Colors.BLUE,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20
  },
  textoConcluidas: {
    color: Colors.PURPLE,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20
  }
})

export default Counter;
