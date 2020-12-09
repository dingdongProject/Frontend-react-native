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
import { CircleContext } from '~/Context/Circle';

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
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 200px;
`;

const GoBack = Styled.Text`
    color : #5F89FA;
`;

const AddBoard =  ({navigation } : Props) => {
  const {addBoard, circleChosen} = useContext<ICircleContext>(CircleContext)
  const [name,onChangeName] = useState('')

    


    return (
      <Container>
          <FormContainer> 
          <CircleImage source={{uri: circleChosen?.picture}}/>
          <Description>Board Name</Description>
          <Input style={{marginBottom:32, flex:0.2}} onChangeText={(text)=> onChangeName(text)} 
          placeholder="Board Name" max={20}/>
          
          
          <Button label="Add board" onPress={() => {
            if(name.length!==0){
            addBoard(name);
            navigation.pop();
            }
            else{
              Alert.alert('Please Input Board Name!')
            }
          }}/>
          </FormContainer>
      </Container> 
       
    );
};

export default AddBoard;