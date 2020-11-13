import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';



import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import { DrawerActions } from '@react-navigation/native';

import Mainnotice from '~/Components/Mainnotice';
import Prac from '~/Components/Mainnotice/practice';

type NavigationProp = StackNavigationProp<HomeNaviParamList, 'DDHome'>;

interface Props {
  navigation: NavigationProp;
}


const DDHome =  ({navigation } : Props) => {
  

    useEffect(() => {
        
        SplashScreen.hide();
      }, []);

    //   useLayoutEffect(()=>{
    //     console.log("aa")
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <IconButton
    //                 iconName="menu"
    //                 onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
    //             />
    //         ),
    //     });
    // },[]);
      

    return (
      
            <Mainnotice
            title ={'a'}
            item = {"b"}
            />
            // <Prac/>
        
       
    );
};

export default DDHome;


