import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({ item }) {
    return (

        <TouchableOpacity>
            <Text style={styles.todoItem}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: '#f8f8f8',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 5,
        borderStyle: 'dashed',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 20,
        color: '#16504b',
        fontFamily: 'sans-serif-medium',
    },
}
)