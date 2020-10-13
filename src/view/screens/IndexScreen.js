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
        backgroundColor:'#EAEAEA'
        
    },
    list:{
        flex:1,
        // height:'60%',
        // borderColor:'black',
        // borderWidth:1,
        margin:10,
        marginBottom:0
    },
    newdiary:{
        justifyContent:'flex-end',
        backgroundColor:'white',
        borderRadius:15,
        height:'40%',
        // borderColor:'black',
        // borderWidth:1,
        margin:10
    }
});

export default IndexScreen;
