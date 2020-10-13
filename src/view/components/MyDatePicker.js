import React,{useState, useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Context as DiaryContext} from '../context/DiaryContext';

const MyDatePicker = () => {
    const {state, setDate} =useContext(DiaryContext);
    let date = new Date(state.currentEntryDate);
    const [show, setShow] = useState(false);

 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };
    return (
        <View>
        <TouchableOpacity  onPress={()=>{setShow(true)}}>
            <Text style= {styles.date}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
            {show && ( 
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
            />
            )}
        </View>
    );
};

const styles= StyleSheet.create({
    date:{
        color:'violet',
        padding:10,
        borderColor:'black',
        borderWidth:1,
        alignSelf:'center'
    }
});

export default MyDatePicker;
