import React from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from "react";

export default function AddItem({ addHandler }) {
    const [text, setText] = useState("");
    const pressHandler = () => {
        console.log(text);
        addHandler(text);
        setText("");
    }
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            margin: 10,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: "white",
            
        },
        input: {
            padding: 5,
            width: "80%",
            borderColor: "black",
            fontFamily: 'sans-serif-medium'
        },

    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter todo"
                onChangeText={(text) => setText(text)}
                value={text}
            />
            <Button color="#00a9d4" title="Add" onPress={pressHandler} />
        </View>

    );


}