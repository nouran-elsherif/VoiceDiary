import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDatePicker = (changeDate) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    console.log(date)

 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    changeDate(currentDate);
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
