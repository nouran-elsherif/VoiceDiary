import React,{useEffect,useContext} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Context as DiaryContext} from '../context/DiaryContext';

const IndexScreen = () => {
    // const state=[];
    const {state,setText,setDate,deleteDiaryEntry} =useContext(DiaryContext);
    // useEffect(()=>{
    //     console.log('??'+ state.entryList)
    //     getDiaryEntries();
    //     console.log('???' + state.entryList)
    // },[])

    console.log('entry list  '+state.entryList);
    return (
        <View style={styles.container}>
            <FlatList 
            data={state.entryList}
            keyExtractor={(diaryEntry)=>{ 
                // console.log('diary entry '+ diaryEntry +'  '+ state.entryList);
                // for (var x in diaryEntry){
                //     console.log(' flatlist '+ x+'  '+diaryEntry[x])
                // }
                return diaryEntry.entry_id.toString()}}
            renderItem={({item})=>{
                return (
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=>{
                        console.log('hi'+ item);
                        setText(item.entry_text);
                        setDate(item.entry_date);
                        //show full text in component 2 (update state of current entry)
                        }
                        }>
                            <Text style={styles.date}>{new Date(item.entry_date).toLocaleDateString()}</Text>
                            <Text>{item.entry_text}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            console.log('hi'+ item.entry_id);
                            deleteDiaryEntry(item.entry_id);
                            //deleteEntry(item)
                            }}>
                            <Icon name="trash" style={styles.iconStyle }/>
                        </TouchableOpacity>
                    </View>
                
                );
            }}
        />
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:10,
    },
    row:{
        flexDirection:'row',
        backgroundColor:'#b8b8b8',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
        // borderTopWidth: 1,
        // borderBottomWidth:1,
        // borderColor:'gray',
        borderRadius:10,
        marginVertical:7,
        marginHorizontal:10,

    },
    date:{
        fontSize:14,
        fontWeight:'bold',
        color:'white'

    },
    iconStyle:{
        fontSize: 26,

    }
});

export default IndexScreen;
