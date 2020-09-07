import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import '../src/global';

 
export default class MyDate extends Component {
    constructor(props){
      super(props)
      this.state = {date:this.getCurrentDate()}
    }

    getCurrentDate=()=>{

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return year + '-' + month + '-' + date;//format: yyyy-mm-day;
  }
   
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-01-01"
          maxDate="2021-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {
            this.setState({date: date}); 
            global.entryDate=this.state.date;
          }}
        />
      )
    }
  }

