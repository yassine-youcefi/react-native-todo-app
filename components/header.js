import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '10%',
        backgroundColor: '#111d5e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }
})