import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  Header  from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Build an app', key: '2' },
    { text: 'Publish to the App Store', key: '3' }, 
  ])
  return (
    <View style={styles.container}>
      <Header title="Todo :" />
      <View style={styles.subContainer}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item, index }) => <TodoItem item={item}/>}
          />
        </View>


      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    padding: 40,
 
  },
  list: {
    marginTop: 20,},
});
