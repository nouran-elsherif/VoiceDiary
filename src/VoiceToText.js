import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';
import Voice from 'react-native-voice';
import Controller from './Controller';
import './global';


export default class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
    };
Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };
onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  };
onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }
async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

addEntrytoDB(){
  entry="";
  this.state.results.map((result, index) => {entry=entry+result;});
  global.entryText=entry;
  Controller.addEntry(global.entryText,global.entryDate);
  
}

async _stopRecognizing(){
    try {
      await Voice.stop();
      this.addEntrytoDB();
    } catch (e) {
      console.error(e);
    }
  };
render () {
    return (
      <View>
        <Text style={styles.transcript}>
           Entry Text
        </Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
        )}
        <TouchableOpacity 
style={styles.recordBtn}
onPressIn={this._startRecognition.bind(this)} 
onPressOut={this._stopRecognizing}>
      <Button  title='Record'/>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    margin:10,
  },
  recordBtn:{
    backgroundColor:'white',
    width:100,
    borderColor:'black',
    borderRadius:10,
    color:'black',
    alignSelf:'center',
  },
});
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);