import React,{ useContext} from 'react';
import {View, ScrollView,StyleSheet} from 'react-native';
import MyDatePicker from './MyDatePicker';
import {Context as DiaryContext} from '../context/DiaryContext';
import VoiceNative from '../components/VoiceNative';
import MyButton from '../components/MyButton';

const NewDiary =() =>{
    const {state,addDiaryEntry} =useContext(DiaryContext);
    return (
        <ScrollView>
        <View style= {styles.container}>
            <MyDatePicker/>
            <VoiceNative/>
            <View>
                <MyButton title="Save" onPress={()=>{
                    addDiaryEntry(state.currentEntryText,state.currentEntryDate);
                }
                }/>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
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