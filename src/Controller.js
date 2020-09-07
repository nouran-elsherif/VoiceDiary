import React,{useState, useEffect} from "react";

  import DatabaseHelper from './Model';
const entries=[];

  class Controller{
      
      constructor(){
        DatabaseHelper.initializeDatabase();
      }

     static getEntries(){
          DatabaseHelper.getAllEntries(entries);
          console.log(entries)
          return entries;
      }

     static addEntry(text,date){
          DatabaseHelper.addEntryDB(text,date);
      }

      static deleteEntry(id){
          DatabaseHelper.deleteEntryDB(id);
      }

      // static clickHandlerStart(){
      //     VoiceToText.onStartButtonPress();
      // }

      // static clickHandlerEnd(text){
      //    text= VoiceToText.onButtonRelease();
      // }

      
  }
  export default Controller;