import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { onChange } from 'react-native-reanimated';
import Colors from '~/Constants/constants';

import api from '~/Api/api'

type NavigationProp = StackNavigationProp<AddCircleNaviParamList, 'AddCircle'>;

interface Props {
  navigation: NavigationProp;
}


const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #ffffff;
`;
const Logo = Styled.Text`
    color : ${Colors.PRIMARY};
    font-size : 40px;
    font-weight : bold;
    text-align : center;
    margin-bottom : 40px;
`;
const FormContainer = Styled.View`
    flex : 1;
    width : 100%;
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

const Footer = Styled.View`
    width : 100%;
    padding : 8px;
`;

const FooterDescription = Styled.Text`
    color : #000000;
    text-align : center;
`;

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
       
    );
};

export default AddCircle;