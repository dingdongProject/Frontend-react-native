import React from 'react';
import {StatusBar} from 'react-native';
import {ModalProvider} from 'react-native-use-modal-hooks';
import {ActivityIndicator} from 'react-native';

import {AppRegistry} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import {CircleContextProvider} from '~/Context/Circle';
import AsyncStorage from '@react-native-community/async-storage';
import Onboarding from '~/Screens/Onboarding';
import Loading from './Components/Loading';


interface Props {}

const App = ({}:Props) => {
  //AsyncStorage.clear();
  // AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
  
  return (
      
      <UserContextProvider>
        <CircleContextProvider>
          <ModalProvider>
        <StatusBar barStyle="default"/>
        <Navigator/>
        </ModalProvider>
        </CircleContextProvider>
      </UserContextProvider>
    
  );
};


export default App;
