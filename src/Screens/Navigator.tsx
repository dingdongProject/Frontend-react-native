import React, {useContext,useLayoutEffect} from 'react';
import {Image,View,Text, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {UserContext} from '~/Context/User';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';
import DDHome from './Home';
import onboard from './Onboarding';
import CustomDrawer from './Drawer';
import Calendar from './Calendar';
import Circles from './Circles';
import Mypage from './Mypage';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
    return (
       //header가 필요한 컴포넌트들
       <Stack.Navigator screenOptions={{headerShown : false}}>
           <Stack.Screen name="onboard" component={onboard}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}/>

        </Stack.Navigator>
    );
};


const MainStackNavigator = () =>{
    return(

        

        <Stack.Navigator screenOptions={{headerShown : true}}>
            <Stack.Screen name="dingdong" component={MainNavigator} 
            
            />
            
        </Stack.Navigator>
        

    )
}


const MainTab = () => {
    return (
        
        <BottomTab.Navigator
            tabBarOptions={{showLabel: false}}>
                <BottomTab.Screen
                name = 'Home'
                component = {DDHome}
                options={{
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/ic_all.png')
                            : require('~/Assets/Images/ic_all.png')
                        }
                        />
                    ),
                }}
                />
                <BottomTab.Screen
                name = "Calendar"
                component = {Calendar}
                options={{
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/ic_all.png')
                            : require('~/Assets/Images/ic_all.png')
                        }
                        />
                    ),

                }}
                />
                <BottomTab.Screen
                name = "Circles"
                component ={Circles}
                options={{
                    tabBarLabel : 'Third',
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/ic_all.png')
                            : require('~/Assets/Images/ic_all.png')
                        }
                        />
                    ),

                }}
                />
                <BottomTab.Screen
                name = "Mypage"
                component ={Mypage}
                options={{
                    
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/ic_all.png')
                            : require('~/Assets/Images/ic_all.png')
                        }
                        />
                    ),

                }}
                />
  

            </BottomTab.Navigator>
            
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerPosition="left"
            drawerContent={(props)=><CustomDrawer props={props}/>}>
                <Drawer.Screen name ="MainTabs" component={MainTab}/>
            </Drawer.Navigator>
    );
};

export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    if(isLoading === false){
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {userInfo? <MainStackNavigator/> : <LoginNavigator/>}
        </NavigationContainer>
    );
};