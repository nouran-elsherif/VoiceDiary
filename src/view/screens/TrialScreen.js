import React,{useState} from 'react';
import {View,Button,StyleSheet,TextInput, ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Realm from 'realm';
// let realm;
// import {addUser} from '../../model/model/trialmodel';

import TrialModel from '../../model/model/trialmodel';

const TrialScreen = () => {
    const [userName,setUserName]=useState('');
    const [userContact,setUserContact]=useState('');
    const [userAddress,setUserAddress]=useState('');
    const model = new TrialModel();

    console.log(' what is model? '+model);

    // const realm = new Realm({
    //     path: 'UserDatabase.realm',
    //     schema: [
    //       {
    //         name: 'user_details',
    //         properties: {
    //           user_id: { type: 'int', default: 0 },
    //           user_name: 'string',
    //           user_contact: 'string',
    //           user_address: 'string',
    //         },
    //       },
    //     ],
    //   });
    //   console.log(realm);

      register_user = () => {
        if (userName) {
          if (userContact) {
            if (userAddress) {
               let user= model.addUser(userName,userContact,userAddress);
               console.log("BACK TO TRIAL SCREEN "+user)
               for (var x in user ){
                   console.log(x )
                console.log(user[x]);
            }
                Alert.alert(
                  'Success',
                  'You are registered successfully ',//+ user.user_id + ' '+ user.user_name + ' ' + user.user_contact + ' ' + userContact.user_address,
                  [
                    {
                      text: 'Ok',
                    },
                  ],
                  { cancelable: false }
                );
            } else {
              alert('Please fill Address');
            }
          } else {
            alert('Please fill Contact Number');
          }
        } else {
          alert('Please fill Name');
        }
      };

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <TextInput
              placeholder="Enter Name"
              onChangeText={user_name => setUserName( user_name )}
            />
            <TextInput
              placeholder="Enter Contact No"
              onChangeText={user_contact => setUserContact(user_contact)}
              maxLength={10}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Enter Address"
              onChangeText={user_address => setUserAddress(user_address )}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />
            <Button
              title="Submit"
              onPress={()=>{register_user()}}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
};

const styles= StyleSheet.create({});

export default TrialScreen;
