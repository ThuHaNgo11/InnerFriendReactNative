import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomedButton = function (props) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 10,
        backgroundColor: '#9ec5ab',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#043b40',
    },
});

export default CustomedButton;