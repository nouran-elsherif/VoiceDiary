// speech to text api "Voice"
import Voice from '@react-native-community/voice';
// import React, {Component, useContext} from 'react';
// import {MainContext} from '../view/context/MainContext';

let apiInstance = null;
// let con = MainContext;

export default class VoiceNative {
    constructor(con) {
        if(!apiInstance){
            this.recognized= '';
            this.started= '';
            this.results= [];
            this.context= con;//useContext(MainContext);
        
            Voice.onSpeechStart = this.onSpeechStart.bind(this.context);
            Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this.context);
            Voice.onSpeechResults = this.onSpeechResults.bind(this.context);
            
            apiInstance=this;
        }
        return apiInstance;
    }

  removeListeners() {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  
  onSpeechStart(e) {
        this.started= '√';
    };
  onSpeechRecognized(e) {
        this.recognized='√';
    };
  onSpeechResults(e) {
        this.results= e.value;
    }
  async _startRecognition(e) {
        this.recognized= '';
        this.started= '';
        this.results= [];
      try {
        await Voice.start('en-US');
        return this.results;
      } catch (e) {
        console.error(e);
      }
    }
  
    bindStartRecognition(){
        this._startRecognition.bind(this.context);
    }
  }