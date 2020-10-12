import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import IndexScreen from './src/view/screens/IndexScreen';
// import VoiceNative from './src/view/screens/VoiceTrial';
import TrialScreen from './src/view/screens/TrialScreen';
import {MainContext} from './src/view/context/MainContext';
import {Provider as DiaryProvider} from './src/view/context/DiaryContext';

const stackNavigator = createStackNavigator({
  Index:IndexScreen,
  Trial:TrialScreen,
  // Voice: VoiceNative,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Diary App'
  }
});

const App= createAppContainer(stackNavigator);

export default ()=>{
  return(
        <DiaryProvider>
          <MainContext.Provider value={this}>
            <App/>
          </MainContext.Provider>
        </DiaryProvider>
  );
};