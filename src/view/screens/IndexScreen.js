import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
// import MyDatePicker from '../components/MyDatePicker';
import NewDiary from '../components/NewDiary';
import DiaryList from '../components/DiaryList';

const IndexScreen = () => {
    return (
        <View style={styles.container}>
            <View style= {styles.list}>
                <DiaryList/>
            </View>
            <View style={styles.newdiary}>
                <NewDiary/>
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    list:{
        flex:1,
        height:400,
        borderColor:'black',
        borderWidth:1,
        margin:10,
        marginBottom:0
    },
    newdiary:{
        justifyContent:'flex-end',
        borderColor:'black',
        borderWidth:1,
        margin:10
    }
});

export default IndexScreen;
