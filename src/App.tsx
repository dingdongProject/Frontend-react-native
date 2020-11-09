import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import AsyncStorage from '@react-native-community/async-storage';


interface Props {}

const App = ({}:Props) => {
  // AsyncStorage.clear();
  return (
      
      <UserContextProvider>
        <StatusBar barStyle="default"/>
        <Navigator/>
      </UserContextProvider>
    
  );
};


export default App;
