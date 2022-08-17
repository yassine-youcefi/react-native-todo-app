import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddItem from './components/addItem';


export default function App() {
  const [todos, setTodos] = useState([])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const addHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        todos.some(todo => {
          todo.text === text ? Alert.alert("Error",'Already Exists') : setTodos(prevTodos => {
            return [...prevTodos, { text: text, key: Math.random().toString() }]
          }
          )

        })
      })
    }
    else {
      Alert.alert('Error', 'Todo must be atleast 3 characters long', [{ text: 'OK', onPress: () => { console.log("Alert closed") } }])
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Todo :" />
      <View style={styles.subContainer}>

        <AddItem addHandler={addHandler} />

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
