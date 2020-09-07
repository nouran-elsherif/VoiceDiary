import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Controller from '../src/Controller2';

export default function EntryItem({entry}){

    return(
        <View style={styles.item}>
        <Text>{entry.entryDate}</Text>
      <Text>{entry.entryText}</Text>
      <TouchableOpacity onPress={Controller.deleteEntry(entry.entryID)}>
        <Image 
        source={require('../images/delete.png')} 
        style={styles.deleteBtn}/>
      </TouchableOpacity>
      </View>
    )

}

const styles= StyleSheet.create({
    deleteBtn:{
        width:20,
        height:20,
        margin:5,
      },
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        shadowColor:'grey',
        shadowOpacity:0.5,
        shadowRadius:50,
}
})