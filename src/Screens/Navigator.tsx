import React, {useContext,useEffect,useLayoutEffect,useState} from 'react';
import {Image,View,Text, Alert } from 'react-native';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';
import {createDrawerNavigator, useIsDrawerOpen} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';
import {PageContext} from '~/Context/Page';
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
import IconButton from '~/Components/IconButton';
import MyCirlce from './MyCircle';
import MyPageEdit from './MyPageEdit';
import AddCircle from './AddCircle';
import Constants from '~/Constants/constants'
import SplashScreen from 'react-native-splash-screen';
import constants from '~/Constants/constants';
import Gallery from '~/Screens/Gallery';
import BulleteinBoard from '~/Screens/BulleteinBoard';
import Write from '~/Screens/Write';
import Read from '~/Screens/Read';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//tab->drawer->stack
const CircleIcon = Styled.Image`
    margin-right : 10px;
    width: 25px;
    height: 25px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.TEXT2};
    resize-mode:center;
`;


type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation: NavigationProp;
}

const LoginNavigator = () => {
    return (
       
       <Stack.Navigator screenOptions={{headerShown : false}}>
           {/* <Stack.Screen name="onboard" component={onboard}/> */}
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="PasswordReset" component={PasswordReset}/>
            
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    

    return (
        <Drawer.Navigator
            drawerPosition="left"
            drawerContent={(props)=><CustomDrawer props={props}/>}>
                 <Drawer.Screen name="dingdong" component={MainStackNavigator}/>  
            </Drawer.Navigator>
    );
};


const MainStackNavigator = ({navigation } : Props) =>{
    
    return(
        <Stack.Navigator screenOptions={{headerShown : true}}>
            <Stack.Screen name="dingdong" component={MyCirlce} 
                options={{
                    headerStyle:{
                        backgroundColor : Constants.PRIMARY,
                    },
                    headerTintColor: '#fff',
                    headerLeft : () => (
                        <IconButton
                            onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                            iconName='menu'/>
                    ),
                    headerRight: () => (
                        <IconButton
                            onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                            iconName='search'/>
                    )
                }}
            />
            <Stack.Screen name = "MyCircle" component={MyCirlce} 
                options={{
                    headerStyle:{
                        backgroundColor : Constants.PRIMARY,
                    },
                    headerTintColor: '#fff',
                    // headerLeft : () => (
                    //     <IconButton
                    //         onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                    //         iconName='menu'/>
                    // ),
                    headerRight: () => (
                        <IconButton
                            onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                            iconName='search'/>
                    )
                }}
            
            />
            <Stack.Screen name = "MyPageEdit" component={MyPageEdit}/>
            <Stack.Screen name = "AddCircle" component={AddCircle}
                options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Add New Circle',
                headerBackTitleVisible: false
            }}
                />
            <Stack.Screen name = "Gallery" component={Gallery}/>
            <Stack.Screen name = "BulleteinBoard" component={BulleteinBoard}/>
            <Stack.Screen name = "Write" component={Write}/>
            <Stack.Screen name = "Read" component={Read}/>
        </Stack.Navigator>
        

    )
}

const CalendarNavigator = ({navigation } : Props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Calendar" component={Calendar}  //edit
            options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerLeft : () => (
                    <IconButton
                        onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                        iconName='menu'/>
                ),
                headerRight: () => (
                    <IconButton
                        onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                        iconName='search'/>
                )
            }}
            />
        </Stack.Navigator>
    )
}

const CirclesNavigator = ({navigation } : Props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Circles" component={Circles}
            options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                // headerLeft : () => (
                //     <IconButton
                //         onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                //         iconName='menu'/>
                // ),
                // headerRight: () => (
                //     <IconButton
                //         onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                //         iconName='search'/>
                // )
            }}
            />
        </Stack.Navigator>
    )
}

const MypageNavigator = ({navigation } : Props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Mypage" component={Mypage}
            options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                // headerLeft : () => (
                //     <IconButton
                //         onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                //         iconName='menu'/>
                // ),
                // headerRight: () => (
                //     <IconButton
                //         onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
                //         iconName='search'/>
                // )
            }}
            />
        </Stack.Navigator>
    )
}


const MainTab = () => {
    // const {tokenInfo,user} = useContext<IUserContext>(UserContext);
    //     if(tokenInfo){
    //         user();
    //     }
    const {userInfo} = useContext<IUserContext>(UserContext);
    return (
        
        <BottomTab.Navigator
            tabBarOptions={{showLabel: false}}>
                <BottomTab.Screen
                name = 'Home'
                component = {MainNavigator}
                options={{
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/home.png')
                            : require('~/Assets/Images/home.png')
                        }
                        />
                    ),
                }}
                />
                <BottomTab.Screen
                name = "Calendar"
                component = {CalendarNavigator}
                options={{
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/calendar.png')
                            : require('~/Assets/Images/calendar.png')
                        }
                        />
                    ),

                }}
                />
                <BottomTab.Screen
                name = "Circles"
                component ={CirclesNavigator}
                options={{
                    tabBarLabel : 'Third',
                    tabBarIcon : ({color, focused}) => (
                        <Image
                        source={
                            focused
                            ? require('~/Assets/Images/blur_circle.png')
                            : require('~/Assets/Images/blur_circle.png')
                        }
                        />
                    ),

                }}
                />
                <BottomTab.Screen
                name = "Mypage"
                component ={MypageNavigator}
                options={{
                    
                    tabBarIcon : ({color, focused}) => (
                        <CircleIcon
                        // source={
                        //     focused
                        //     ? userInfo?.picture
                        //     : userInfo?.picture
                        // }
                        source={{uri: userInfo?.picture ? userInfo.picture : 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg'}}
                        />
                    ),

                }}
                />
  

            </BottomTab.Navigator>
            
    );
};





export default () => {
    const {isLoading,userInfo,tokenInfo} = useContext<IUserContext>(UserContext);
    
    
        
    if(isLoading === false){
        return <Loading/>
    }
    console.log('여긴가?',tokenInfo);
    
    return (
        <NavigationContainer>
            {tokenInfo? <MainTab/> : <LoginNavigator/>}  
        </NavigationContainer>
    );
};