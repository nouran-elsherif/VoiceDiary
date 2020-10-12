import React,{useState, useContext} from 'react';
import {View, Button, Text,StyleSheet} from 'react-native';
import MyDatePicker from './MyDatePicker';
// import DiaryController from '../../controller/Controller';
import {MainContext} from '../context/MainContext';
import {Context as DiaryContext} from '../context/DiaryContext';

const NewDiary =() =>{
    const {state,setDate,record,addDiaryEntry} =useContext(DiaryContext);
    let appContext = useContext(MainContext);
    // const [text,setText] = useState('TEEEEEEXT');
    // const [date,setDate] = useState ('');
    // const controller = new DiaryController();
    return (
        <View style= {styles.container}>
            {/* <MyDatePicker initialDate={new Date()} changeDate={(date)=>{setDate(date)}}/>
            <Text>{state.currentEntryText} TEXTT</Text> */}
            <MyDatePicker initialDate={state.currentEntryDate} changeDate={setDate}/>
            <Text style={styles.text}>{state.currentEntryText}</Text>
            <Button style={styles.buttonStyle} title="Record" onPress={async()=>{
                // appContext.context =this;
                console.log('record');

                await record(this);
                console.log('baaaaaaack')
            }
            }/>
            <Button title="Save" onPress={()=>{
                // controller.addEntry(text,date);
                // addDiaryEntry(text,date);
                console.log('saave ');
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