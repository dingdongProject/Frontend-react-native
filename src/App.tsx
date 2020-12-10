import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {ModalProvider} from 'react-native-use-modal-hooks';

import Navigator from '~/Screens/Navigator';
import {UserContextProvider} from '~/Context/User';
import {CircleContextProvider} from '~/Context/Circle';


interface Props {}

const App = ({}:Props) => {
  
  LogBox.ignoreAllLogs();

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
