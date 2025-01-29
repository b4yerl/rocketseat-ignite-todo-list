import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../../constants/Colors';

const NoTask: React.FC = () => {
    return (
        <>
            <View style={{ backgroundColor: Colors.GRAY300, width: '100%', height: 1, opacity: 0.3 }} />
            <View style={styles.noTasks}>
                <Image
                    source={require('../../../assets/Clipboard.png')}
                    style={{ width: 56, height: 56 }}
                />
                <View>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.text}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    noTasks: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        gap: 16
      },
      text: {
        fontSize: 14,
        color: Colors.GRAY300
      }
});

export default NoTask;
