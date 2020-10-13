import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
} from 'react-native';
import Voice from '@react-native-community/voice';

import {Context as DiaryContext} from '../context/DiaryContext';


export default class VoiceNative extends React.Component {
  static contextType = DiaryContext;
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      // text:''//this.context.currentEntryText,
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    // this.state.text = this.context.currentEntryText;
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
    // console.log('currentEntryText '+this.context.currentEntryText)
    this.context.setText(this.state.results[0]);
    // console.log('currentEntryText '+this.context.currentEntryText)
    // this.setState({
    //   text:this.context.currentEntryText,
    // });
  };
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
render () {
  // this.setState({
  //   text:this.context.currentEntryText,
  // });
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.transcript}>
              Entry:
          </Text>
          <Text style={styles.transcript}> {this.state.results[0]}</Text>
          {/* {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
          )} */}
        </View>
        <Button
        onPress={this._startRecognition.bind(this)}
        title="Record"></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: 'black',
    margin:5,
    // top: '400%',
  },
  textContainer:{
    margin: 10,
    borderColor:'black',
    borderWidth:1,
  }
});
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);