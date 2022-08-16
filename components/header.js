import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text>
                Todo :
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        height: '10%',
        backgroundColor: '#111d5e',
        alignItems: 'center',
        justifyContent: 'center',
    }
})