import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const MyButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ff5252",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin:5,
      },
      appButtonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});

export default MyButton;
