import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Voice Diary App</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        height:90,
        width:'100%',
        paddingTop:50,
        //marginTop:150,
        backgroundColor:'coral',
    },
    title:{
        textAlign:'center',
        color:'brown',
        fontSize:20,
        fontWeight:'bold',
    }
});