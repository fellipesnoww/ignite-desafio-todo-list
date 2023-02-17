import React from 'react';
import { View, Image, FlatList,Text, TextInput} from 'react-native';

import TodoLogo from '../../assets/todo-logo.png';
import EmptyTask from '../../assets/empty-task.png';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={TodoLogo}/>
        </View>
        <View style={styles.todoContent}>
            <View style={styles.inputContent}>
                <TextInput style={styles.input}/>
                <Button />
            </View>
            <FlatList 
                data={[]}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <></>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContent}>
                        <Image source={EmptyTask} style={styles.image}/>
                        <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas.</Text>
                        <Text style={styles.emptyTextRegular}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    </View>
  );
}