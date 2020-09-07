import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import Controller from '../src/Controller';
import NativeVoice from '../src/VoiceToText';
import MyDate from './date';

export default function Footer(){
    return (
        <View>
        <MyDate/>
        <NativeVoice/>
        </View>
    )
}

