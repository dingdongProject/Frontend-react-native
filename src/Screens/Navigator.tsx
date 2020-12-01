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
import {CircleContext} from '~/Context/Circle';
import Loading from '~/Components/Loading';

import Login from '~/Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';
import DDHome from './Home';
import onboard from './Onboarding';
import CustomDrawer from './Drawer';
import Calendars from './Calendar';
import Circles from './Circles';
import Mypage from './Mypage';
import IconButton from '~/Components/IconButton';
import MyCirlce from './MyCircle';
import MyPageEdit from './MyPageEdit';
import AddCircle from './AddCircle';
import JoinCircle from './JoinCircle';
import Constants from '~/Constants/constants'
import SplashScreen from 'react-native-splash-screen';
import constants from '~/Constants/constants';
import Gallery from '~/Screens/Gallery';
import BulleteinBoard from '~/Screens/BulleteinBoard';
import Write from '~/Screens/Write';
import Read from '~/Screens/Read';
import Information from '~/Screens/Information';
import CirclePageEdit from '~/Screens/CirclePageEdit';
import AddBoard from '~/Screens/AddBoard';
import CircleSearchInfo from '~/Screens/CircleSearchInfo';
import AddSchedule from '~/Screens/AddSchedule';
import Requests from '~/Screens/Requests';



const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
//tab->drawer->stack
const CircleIcon = Styled.Image`
    margin-right : 10px;
    width: 25px;
    height: 25px;
    border-radius: 100px;
    border: 0.5px;
    border-color : ${constants.TEXT2};
    resize-mode:center;
`;
const Circles1Icon = Styled.Image`
margin-right : 10px;
width: 35px;
height: 35px;
border-radius: 100px;
resize-mode:center;
`
const Circles2Icon = Styled.Image`
margin-right : 10px;
width: 50px;
height: 50px;
border-radius: 100px;
resize-mode:center;
`


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
    const {isCircle, circleChosen,circleMembers} = useContext<ICircleContext>(CircleContext);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    const checkAdmin = () => {
        isCircle && circleChosen?
        circleChosen?.isAdmin?
        navigation.navigate('CirclePageEdit')
        :
        Alert.alert('No Access!!!')
        :
        Alert.alert('No Access!!!')
        
      }
    return(
        <Stack.Navigator screenOptions={{headerShown : true}}>
            <Stack.Screen name={isCircle && circleChosen ?  circleChosen.name: "dingdong"} component={isCircle ? MyCirlce: DDHome } 
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
                            onPress={()=> navigation.navigate('Information')}
                            iconName='info'/>
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
                            onPress={()=> navigation.navigate('Information')}
                            iconName='search'/>
                    )
                }}
            
            />
            <Stack.Screen name = "MyPageEdit" component={MyPageEdit}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: '개인정보수정',
                headerBackTitleVisible: false 
            }}/>
            <Stack.Screen name = "AddCircle" component={AddCircle}
                options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Create New Circle',
                headerBackTitleVisible: false
            }}/>
            <Stack.Screen name = "JoinCircle" component={JoinCircle}
                options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Join a Circle',
                headerBackTitleVisible: false
            }}/>
            <Stack.Screen name = "Requests" component={Requests}
                options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Requests',
                headerBackTitleVisible: false
            }}/>
            <Stack.Screen name = "Gallery" component={Gallery}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: '사진첩',
                headerBackTitleVisible: false 
            }}/>
            <Stack.Screen name = "BulleteinBoard" component={BulleteinBoard} 
            options={({ route }) => ({ title: route.params!.name,
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false })
                
            }/>
            <Stack.Screen name = "Write" component={Write}
             options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Write',
                headerBackTitleVisible: false
            }}/>
            <Stack.Screen name = "Read" component={Read}
            options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Read',
                headerBackTitleVisible: false 
            }}/>
            
            <Stack.Screen name= "Information" component={Information}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Information',
                headerBackTitleVisible: false ,
                headerRight: () => (
                    <IconButton
                        // onPress={()=> {circleMembers.forEach((item)=>{
                        //     item.isAdmin? navigation.navigate('CirclePageEdit')
                        //     :
                        //     Alert.alert("no acess!")
                        onPress={()=>{
                            checkAdmin()
                        }}
                        // })}}
                        iconName='dotMenu'/>
                )
            }}/>
            <Stack.Screen name= "CirclePageEdit" component={CirclePageEdit}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Circle Edit',
                headerBackTitleVisible: false 
            }}/>
            <Stack.Screen name="AddBoard" component={AddBoard}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Add Board',
                headerBackTitleVisible: false 
            }}/>
            
        </Stack.Navigator>
        

    )
}


const CalendarNavigator = ({navigation } : Props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Calendar" component={Calendars}  
            options={{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerRight : () => (
                    <IconButton
                        onPress={()=> navigation.navigate('AddSchedule')}
                        iconName='add'/>
                ),
                
            }}
            />
            <Stack.Screen name = "AddSchedule" component={AddSchedule}

                options={{
                    headerStyle:{
                        backgroundColor : Constants.PRIMARY,
                    },
                    headerTitle: 'Add Schedule',
                    headerTintColor: '#fff',
                    
                    
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
            }}
            />
             <Stack.Screen name= "CircleSearchInfo" component={CircleSearchInfo}
             options= {{
                headerStyle:{
                    backgroundColor : Constants.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitle: 'Information',
                headerBackTitleVisible: false ,
            }}/>
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
                            ? require('~/Assets/Images/home_out.png')
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
                            ? require('~/Assets/Images/base_calendar.png')
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
                        focused?
                        <Circles2Icon
                        
                        source={
                            
                             require('~/Assets/Images/dingdong_splas.png')
                            
                        }
                        />
                        :
                        <Circles1Icon
                        source={
                            
                            require('~/Assets/Images/dingdong_splas.png')
                           
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
    const {isCircleLoading} = useContext<ICircleContext>(CircleContext);
    
    
        
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