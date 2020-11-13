import React from 'react';
import {StatusBar} from 'react-native';

import {AppRegistry} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import {PageContextProvider} from '~/Context/Page';
import AsyncStorage from '@react-native-community/async-storage';


interface Props {}

const App = ({}:Props) => {
  //AsyncStorage.clear();
  AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
  return (
    
      <UserContextProvider>
        <PageContextProvider>
        <StatusBar barStyle="default"/>
        <Navigator/>
        </PageContextProvider>
      </UserContextProvider>
    
  );
};


export default App;
