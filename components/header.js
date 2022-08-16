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
        marginTop: 35,
        backgroundColor: '#00a9d4',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    title:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',

    }
})