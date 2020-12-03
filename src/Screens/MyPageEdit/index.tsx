import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import ImagePicker from 'react-native-image-picker';

import { onChange } from 'react-native-reanimated';
import constants from '~/Constants/constants';

import api from '~/Api/api'
import {Text, TouchableOpacity} from 'react-native';
import ImageButton from '~/Components/ImageButton';
import Button from '~/Components/Button';
import Input from '~/Components/Input';


type NavigationProp = StackNavigationProp<TotalNaviParamList>;

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

const ContentContainer = Styled.View`
  flex : 1;
  border : 0px;
  width : 100%;
`;
const NameContainer = Styled.View`

`;

const Description = Styled.Text`
  width: 100%;
  text-align : left;
  font-size : 12px;
  color : #929292;
  margin-left: 20px;
  margin-bottom: 5px;
`;
const MyImageTouch = Styled.TouchableOpacity``;
const MyImage = Styled.Image`
margin: auto;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100;
  border: 1px;
  border-color : ${constants.PRIMARY};
`;


const GoBack = Styled.Text`
    color : #5F89FA;
`;

const MyPageEdit =  ({navigation } : Props) => {
  const {userInfo} = useContext<IUserContext>(UserContext)
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circlePicture,onChangecirclePicture] =useState('')
  const {addCircle} = useContext<IUserContext>(UserContext)
  const {isCircle,circleChosen} = useContext<ICircleContext>(CircleContext)
  
  
  const [Avatar,setAvatar] = useState('')

    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : 'take a photo',
            chooseFromLibraryButtonTitle : 'choose from album',
            cancelButtonTitle : 'cancel'
        },response=>{
            setAvatar(response.uri)
            console.log(response.uri)
        })
    }

  const checkInputs= () => {
    
    return true;
}
  

    

//userInfo nickname introduction 필요
    return (
      <Container>
          <FormContainer> 
          <ImageButton 
          onPress={()=>{addImage()}}
          source = {userInfo?.picture ? userInfo.picture : undefined}
          />
          <ContentContainer>
          <Description>Name</Description>
          <Input style={{marginBottom:32,}} placeholder="name"/>
          <Description>Introduction</Description>
          <Input style={{marginBottom:32, flex : 0.6}} placeholder="introduction"/>
          </ContentContainer>
          <Button label="My Information Edit!" onPress={() => {
            navigation.goBack()
          }}/>
          </FormContainer>
      </Container> 
       
    );
};

export default MyPageEdit;