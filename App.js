import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  Header  from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
  ])
  return (
    <View style={styles.container}>
      <Header title="Todo :" />
      <View style={styles.subContainer}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item, index }) => <Text key={index} style={styles.item}>{item.text}</Text>}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    padding: 40,
    // backgroundColor: '#111d5e',
 
  },
  list: {
    marginTop: 20,},
});
