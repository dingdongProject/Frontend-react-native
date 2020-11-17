import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
<<<<<<< HEAD

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { onChange } from 'react-native-reanimated';
import Colors from '~/Constants/constants';

import api from '~/Api/api'
=======
import {Text, TouchableOpacity} from 'react-native';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import constants from '~/Constants/constants';
>>>>>>> 83327fd6a0eeb0254f38a960332b1310d7bcfd59

type NavigationProp = StackNavigationProp<AddCircleNaviParamList, 'AddCircle'>;

interface Props {
  navigation: NavigationProp;
}


const Container = Styled.SafeAreaView`
    flex : 1;
<<<<<<< HEAD
    background-color : #ffffff;
`;
const Logo = Styled.Text`
    color : ${Colors.PRIMARY};
    font-size : 40px;
    font-weight : bold;
    text-align : center;
    margin-bottom : 40px;
=======
    background-color : #fff;
>>>>>>> 83327fd6a0eeb0254f38a960332b1310d7bcfd59
`;
const FormContainer = Styled.View`
<<<<<<< HEAD
    flex : 1;
=======
>>>>>>> 83327fd6a0eeb0254f38a960332b1310d7bcfd59
    width : 100%;
    height: 90%;
    align-items : center;
    justify-content : center;
    padding : 32px;
<<<<<<< HEAD
`;

const Description = Styled.Text`
    width: 100%;
    text-align : left;
    font-size : 12px;
    color : #929292;
    margin-left: 20px;
    margin-bottom: 5px;
`;

const Footer = Styled.View`
    width : 100%;
    padding : 8px;
`;

const FooterDescription = Styled.Text`
    color : #000000;
    text-align : center;
`;
=======
`;  
const Icon = Styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100;
  margin-bottom: 20px;
`;
const Description = Styled.Text`
  width: 100%;
  text-align : left;
  font-size : 12px;
  color : #929292;
  margin-left: 20px;
  margin-bottom: 5px;
`;

>>>>>>> 83327fd6a0eeb0254f38a960332b1310d7bcfd59

const GoBack = Styled.Text`
    color : #5F89FA;
`;

const AddCircle =  ({navigation } : Props) => {
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circlePicture,onChangecirclePicture] =useState('')
  const {addCircle} = useContext<IUserContext>(UserContext)

  const checkInputs= () => {
    
    return true;
}
  

    


    return (
      <Container>
<<<<<<< HEAD
            <FormContainer>
            <Logo>dingdong</Logo>
            <Description>circlename</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'circlename should be valid' }
                onChangeText={text => onChangecircleName(text)}
            />
            <Description>explaination</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'circle explaination' }
                onChangeText={text => onChangeExplaination(text)}
            />
            <Description>picture</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'Password must be at least 8 characters long' }
                onChangeText={text => onChangecirclePicture(text)}
                
            />
            
                <Button 
                onPress={()=>
                 {
                     {
                        if (checkInputs()) {
                          addCircle(circleName,circleExplaination,circlePicture);
                        }
                        else {
                            console.warn('wrong email or pw');
                        }
                     }
                 }
                
                }
                label="회원가입" 
                style={{marginBottom : 24,
                    
                        }}/>
            </FormContainer>
           <Footer>
            <FooterDescription>
                이미 계정이 있으신가요?{' '}
                <GoBack onPress={()=>navigation.goBack()}>로그인</GoBack>
            </FooterDescription>
            </Footer>
        </Container>
=======
          <FormContainer> 
          <Icon source={{uri: constants.DEFAULT_CIRCLE_IMG}}/>
          <Description>Name</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="동아리명"/>
          <Description>Tags</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="태그"/>
          <Description>Explanation</Description>
          <Input style={{marginBottom:32, flex: 5 }} placeholder="동아리소개"/>
          <Button label="동아리 생성" onPress={() => {
            navigation.goBack()
          }}/>
          </FormContainer>
      </Container> 
>>>>>>> 83327fd6a0eeb0254f38a960332b1310d7bcfd59
       
    );
};

export default AddCircle;