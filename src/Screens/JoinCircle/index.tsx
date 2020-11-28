import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import ImagePicker from 'react-native-image-picker';

import { onChange } from 'react-native-reanimated';
import constants from '~/Constants/constants';

import api from '~/Api/api'
import {Platform, Image, Alert} from 'react-native';
import IconButton from '~/Components/IconButton';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import ImageButton from '~/Components/ImageButton';
import { useLinkProps } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<AddCircleNaviParamList, 'AddCircle'>;

interface Props {
  navigation: NavigationProp;
}


const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #fff;
`;
const FormContainer = Styled.View`
    width : 100%;
    height: 90%;
    align-items : center;
    justify-content : center;
    padding : 32px;
`;  
const Description = Styled.Text`
  width: 100%;
  text-align : left;
  font-size : 12px;
  color : #929292;
  margin-left: 20px;
  margin-bottom: 5px;
`;
const CircleImage = Styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100; 
    border: 1px solid ${constants.PRIMARY};
`

const CircleName = Styled.Text`
    color : #5F89FA;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;

`;

const JoinCircle =  ({navigation } : Props) => {
  const [circleCode,onChangecircleCode] = useState('')
  const [circleInfo, setCircleInfo] = useState({name: "", picture: ""});
  

    const changeText= (text: string) => {
        onChangecircleCode(text);
        if (text.length === 6)
            api.getCircleInfo({code: text})
            .then((response) => response.data)
            .then((data) => {
                if (data.success) {
                    setCircleInfo(data.circle)
                }
                else {
                    setCircleInfo({name: "Not found", picture:""});
                }
        })
        else {
            setCircleInfo({name: "", picture: ""});
        }
    }
  

    


    return (
      <Container>
            <FormContainer> 
            {
                circleInfo.picture !== "" && <CircleImage source={{uri: circleInfo.picture}}/>
            }
            {
                circleInfo.name !== "" && <CircleName>{circleInfo.name}</CircleName>
            }
            <Description>Enter a Circle Code (6 characters, upper case only)</Description>
            <Input style={{marginBottom:32, height: 50}} onChangeText={(text)=> changeText(text)} 
            placeholder="Circle Code" max={6}
            />

            <Button label="Send Request" onPress={ () => {
                api.postRequest({code: circleCode})
                .then((response) => response.data)
                .then((data) => {
                    if (data.success) {
                        navigation.pop();
                    }
                    else {
                        Alert.alert( "Failed", data.message)
                    }
                })
            
            }}/>
            </FormContainer>
      </Container> 
       
    );
};

export default JoinCircle;