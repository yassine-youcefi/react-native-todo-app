import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddItem from './components/addItem';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Build an app', key: '2' },
    { text: 'Publish to the App Store', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

    return (
      <View style={styles.container}>
        <Header title="Todo :" />
        <View style={styles.subContainer}>
          <AddItem addHandler={(text) => {
            setTodos(prevTodos => {
              return [{ text: text, key: Math.random().toString() }, ...prevTodos]
            })
          }
          } />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key.toString()}
              renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />}
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
      marginTop: 20,
    },
  });
