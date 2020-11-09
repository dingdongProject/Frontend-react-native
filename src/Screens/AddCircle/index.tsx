import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';


import Input from '~/Components/Input';

type NavigationProp = StackNavigationProp<AddCircleNaviParamList, 'AddCircle'>;

interface Props {
  navigation: NavigationProp;
}


const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #5F89FA;
`;

const FormContainer = Styled.View`
    flex : 2;
    width : 100%;
    align-items : center;
    padding : 32px;
`;
const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #D3D3D3;
    padding : 8px;
`;

const GoBack = Styled.Text`
    color : #000000;
    text-align : center;
`;

const AddCircle =  ({navigation } : Props) => {
  

    useEffect(() => {
        SplashScreen.hide();
      }, []);


    return (
      <Container>
          <FormContainer>
          <Input style={{marginBottom:32}} placeholder="동아리명"/>
          <Input style={{marginBottom:32}} placeholder="태그"/>
          <Input style={{marginBottom:32, flex:1}} placeholder="동아리소개"/>
          </FormContainer>
          <FormContainer>
          <GoBack onPress={()=>navigation.goBack()}>생성완료</GoBack>
          </FormContainer>
    
            <Footer>
                <GoBack onPress={()=>navigation.goBack()}>돌아가기</GoBack>
            </Footer>
        
      </Container> 
       
    );
};

export default AddCircle;