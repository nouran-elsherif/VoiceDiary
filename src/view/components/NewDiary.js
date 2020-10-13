import React,{ useContext} from 'react';
import {View, Button,StyleSheet} from 'react-native';
import MyDatePicker from './MyDatePicker';
import {Context as DiaryContext} from '../context/DiaryContext';
import VoiceNative from '../components/VoiceNative';

const NewDiary =() =>{
    const {state,addDiaryEntry} =useContext(DiaryContext);
    return (
        <View style= {styles.container}>
            <MyDatePicker/>
            <VoiceNative/>
            <Button title="Save" onPress={()=>{
                addDiaryEntry(state.currentEntryText,state.currentEntryDate);
            }
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    text:{
        margin:10,
        alignSelf:'center',
        fontSize:18
    }, 
    buttonStyle:{
        marginBottom:15,
        backgroundColor:'yellow'
    }
});

export default NewDiary;