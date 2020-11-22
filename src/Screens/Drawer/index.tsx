import React, {useContext, useState, createContext} from 'react';
import Styled from 'styled-components/native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions

} from '@react-navigation/drawer';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';


import {UserContext} from '~/Context/User';

import IconButton from '~/Components/IconButton';
import MyCircle from '~/Screens/MyCircle';
import { Alert } from 'react-native';
import { PrivateValueStore } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import constants from '~/Constants/constants';
import { CircleContext } from '~/Context/Circle';

const Header = Styled.View`
    border-bottom-width : 1px;
    border-color : #D3D3D3;
    padding : 8px 16px;
`;

const Title = Styled.Text`
    margin: auto;  
`;

const Button = Styled.TouchableOpacity`
    padding : 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction : row;
    align-items : center;
    `;

const Icon = Styled.Image`
    margin-right : 8px;
    width: 25px;
    height: 25px;
`;
const CircleIcon = Styled.Image`
    margin-right : 8px;
    width: 35px;
    height: 35px;   
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const ProfilePic = Styled.Image`
    margin: auto;
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100;
    border: 2px;
    border-color : ${constants.PRIMARY};
`

const Label = Styled.Text`
    font-size : 16px;
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #D3D3D3;
`;

interface Props {
    props : DrawerContentComponentProps<DrawerContentOptions>;
}

// const Stack = createStackNavigator();

// const MycircleStackNavigator = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = "MyCircle" component={MyCircle}/>
//         </Stack.Navigator>
//     )
// }


const Drawer = ({props}:Props) => {
    const {logout,userInfo, circleInfo} = useContext<IUserContext>(UserContext);
    const {changeToCircle,getCircleMembers} = useContext<ICircleContext>(CircleContext);
    return (
        <DrawerContentScrollView {...props}>
            <Button
                onPress={()=>{props.navigation.navigate('MyPageEdit',{screen : 'MyPageEdit'})}}
                >
                <Header>
                <ProfilePic source={{uri: userInfo?.picture ? userInfo.picture : constants.DEFAULT_USER_IMG}}
                />
                <Title>{userInfo?.username}</Title>
                <Title>{userInfo?.email}</Title>
                </Header>
            </Button>
            <Button onPress={()=>{changeToCircle(false, 0); props.navigation.closeDrawer();}}>
            <ButtonContainer
                >
                    <Icon source={require('~/Assets/Images/home.png')}/>
                    <Label>HOME</Label>
                </ButtonContainer>
            </Button>
            {
            circleInfo?
            circleInfo.map((circle, key) => {
                return (
                    <Button 
                    onPress={()=>{changeToCircle(true, key); getCircleMembers(circle.name);props.navigation.closeDrawer();}}>
                        <ButtonContainer>
                            <CircleIcon source={{uri: circle.picture ? circle.picture : constants.DEFAULT_CIRCLE_IMG}}/>
                            <Label>{circle.name}</Label>
                        </ButtonContainer>
                    </Button>
                )
            }) : console.log('a')
            }
            <Button
                onPress={()=>{props.navigation.navigate('AddCircle',{screen : 'AddCircle'})}}
                
            >
                <ButtonContainer>
                    <Icon source={require('~/Assets/Images/add_circle.png')}/>
                    <Label>새로만들기</Label>
                </ButtonContainer>
            </Button>
            <Footer>
                <Button
                    onPress={()=>{
                        logout();
                    }}>
                    <ButtonContainer>
                        <Icon
                            source = {require('~/Assets/Images/ic_all.png')}
                        />
                        <Label>로그아웃</Label>
                        </ButtonContainer>
                    </Button>
            </Footer>
        </DrawerContentScrollView>
    );
};

export default Drawer;
