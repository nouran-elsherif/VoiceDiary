import React,{useEffect,useContext} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Context as DiaryContext} from '../context/DiaryContext';

const IndexScreen = () => {
    // const state=[];
    const {state,setText,setDate,deleteEntry,getDiaryEntries} =useContext(DiaryContext);
    // useEffect(()=>{
    //     console.log('??'+ state.entryList)
    //     getDiaryEntries();
    //     console.log('???' + state.entryList)
    // },[])

    return (
        <View style={styles.container}>
            <FlatList 
            data={state.entryList}
            keyExtractor={(diaryEntry)=>{ console.log('diary entry '+ diaryEntry);
                return diaryEntry.entry_id.toString()}}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>{
                    console.log('hi'+ item);
                    setText(item.entry_text);
                    setDate(item.entry_date);
                    //show full text in component 2 (update state of current entry)
                }
                }>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.entry_date}</Text>
                        <Text>{item.entry_text}</Text>
                        <TouchableOpacity onPress={()=>{
                            console.log('hi')
                            deleteEntry(item.entry_id);
                            //deleteEntry(item)
                            }}>
                            <Icon name="trash" style={styles.iconStyle }/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth: 1,
        borderColor:'gray',
        marginBottom:10,

    },
    title:{
        fontSize:18,

    },
    iconStyle:{
        fontSize: 24,

    }
});

export default IndexScreen;
