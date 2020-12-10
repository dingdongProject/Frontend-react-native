import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';
import {RouteProp} from '@react-navigation/native';
import api from '~/Api/api';
import Loading from '~/Components/Loading';
import Button from '~/Components/Button';
import { Alert } from 'react-native';
type NavigationProp = StackNavigationProp<TotalNaviParamList>;
type CircleInfoScreenRouteProp = RouteProp<CircleInfoNaviParamList, 'circle'>;

interface Props {
  navigation: NavigationProp;
  route:CircleInfoScreenRouteProp;
}

const Container = Styled.SafeAreaView`
  flex: 1
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;


const MyImage = Styled.Image`
  margin: 30px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px;
  border-color : ${constants.PRIMARY};

`;

const MyScriptText =Styled.Text`
font-size:20px;
text-align:center;
color:${constants.TEXT1};
margin-bottom : 20px;
`;

const MyExp = Styled.View`
`;
const MyExpText =Styled.Text`
font-size: 18px;
text-align:center;
color:${constants.TEXT1};
margin-bottom : 30px;
`;



const CircleSearchInfo =  ({route, navigation } : Props) => {
    const circle = route.params;
    return (
        <Container>
            <MyImage source={{uri : circle.picture}}/>
                <MyScriptText>
                    {circle.name}
                </MyScriptText>
                <MyExpText>
                    {circle.explanation}
                </MyExpText>
            <Button label="Send Request" 
                style={{marginBottom : 24,width: '80%'
                        }}
                onPress={()=>{Alert.alert('Requset Successful!')}}
                        />
        </Container>   
      
    );
};

export default CircleSearchInfo;