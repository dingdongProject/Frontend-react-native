import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';

import { onChange } from 'react-native-reanimated';
import constants from '~/Constants/constants';

import api from '~/Api/api'
import {Text, TouchableOpacity} from 'react-native';
import Button from '~/Components/Button';
import Input from '~/Components/Input';

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
       
    );
};

export default AddCircle;