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
    background-color : #f4f4f4;
`;
const FormContainer = Styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
    padding : 32px;
`;  
const ImageButtonContainer = Styled.View`
  border : 0px;
  margin-bottom : 36px;
`;

const ContentContainer = Styled.View`
  flex : 1;
  border : 0px;
  width : 100%;
  height : auto;
  
`;
const ButtonContainer = Styled.View`
  margin-top : 54px;
  width : 300px;
  border : 0px;
`

const Description = Styled.Text`
  width: 100%;
  text-align : left;
  font-size : 12px;
  color : #929292;
  margin-left: 20px;
  margin-bottom: 5px;
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
            <ImageButtonContainer>
          <ImageButton 
          onPress={()=>{addImage()}}
          source = {userInfo?.picture ? userInfo.picture : undefined}
          />
          </ImageButtonContainer>
          <ContentContainer>
          <Description>Name</Description>
          <Input style={{marginBottom:48,}} placeholder="name"/>
          <Description>Introduction</Description>
          <Input style={{marginBottom:32, height :200}} placeholder="introduction"/>
          </ContentContainer>
          <ButtonContainer>
          <Button label="My Information Edit!" onPress={() => {
            navigation.navigate('Mypage')
            
          }}/>
          </ButtonContainer>
          </FormContainer>
      </Container> 
       
    );
};

export default MyPageEdit;