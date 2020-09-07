import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View,FlatList,ImageBackground} from 'react-native';
import Controller from './src/Controller';
import Header from './components/header';
import EntryItem from './components/listItem';
import Footer from './components/footer';

export default function App() {
  const controller=new Controller();
  const [entries, setEntries]= useState(Controller.getEntries());
  const entryText="no text yet";
  return (
    <ImageBackground
    source={require('./images/diary.jpg')}
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <View style={styles.body}>
        <FlatList 
        style={styles.list}
        data={entries}
        renderItem={({entry})=>(
          <EntryItem item={entry}/>
          
        )}
        keyExtractor={(entry)=>entry.entryID}
        />
      </View>
      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    alignContent:'flex-start',
    // justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.5,
    width:'100%',
    height:'100%',
  },
  body:{
    height:600,
    width:'100%',
    padding:20,
  },
  list:{
    width:'100%',
  },
  item:{
    marginTop:10,
    padding:15,
    backgroundColor: 'grey',
    fontSize:25,

  },
  footer:{
    // height:200,
    width:'100%',
    bottom:0,
    // marginBottom:50,

  },
  
});
