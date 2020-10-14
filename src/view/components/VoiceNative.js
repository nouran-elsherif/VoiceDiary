import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';
import Voice from '@react-native-community/voice';
import MyButton from '../components/MyButton';
import {Context as DiaryContext} from '../context/DiaryContext';


export default class VoiceNative extends React.Component {
  static contextType = DiaryContext;
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
    this.context.setText(this.state.results[0]);
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
  };

render () {
  let text = this.context.state.currentEntryText;
  
    return (
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.transcript}>
              Entry:
          </Text>
          <Text style={styles.transcript}> {text}</Text>
        </View>

        <MyButton
        onPress={this._startRecognition.bind(this)}
        title="Record"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: 'black',
    margin:5,
  },
  textContainer:{
    margin: 10,
    borderColor:'#1b0c5c',
    borderWidth:1,
    borderRadius:15,
  }
});
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);