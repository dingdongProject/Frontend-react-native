import React, {useContext} from 'react';
import {Image,View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UserContext} from '~/Context/User';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';
import DDHome from './Home';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
    return (
       //header가 필요한 컴포넌트들
       <Stack.Navigator screenOptions={{headerShown : true}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}/>

        </Stack.Navigator>
    );
};


const MainNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown : true}}>
            <Stack.Screen name="Home" component={DDHome}/>
        </Stack.Navigator>
    )
}


const MainTab = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{showLabel: false}}>
                <BottomTab.Screen
                name = 'a'
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
                name = "b"
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
                name = "c"
                component ={DDHome}
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
                name = "d"
                component ={DDHome}
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
                name = "e"
                component ={DDHome}
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

// const MainNavigator = () => {
//     return (
//         <Drawer.Navigator
//             drawerPosition="left"
//             drawerType='slide'
//             drawerContent={(props)=><CustomDrawer props={props}/>}>
//                 <Drawer.Screen name ="MainTabs" component={MainTab}/>
//             </Drawer.Navigator>
//     );
// };

export default () => {
    const {isLoading, userInfo} = useContext<IUserContext>(UserContext);

    if(isLoading === false){
        return <Loading />;
    }

    return (
        <NavigationContainer>
            {userInfo? <MainNavigator/> : <LoginNavigator/>}
        </NavigationContainer>
    );
};