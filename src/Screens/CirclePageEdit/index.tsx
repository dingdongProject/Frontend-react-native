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
import IconButton from '~/Components/IconButton';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import ImageButton from '~/Components/ImageButton'

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

const CirclePageEdit =  ({navigation } : Props) => {
  const {userInfo} = useContext<IUserContext>(UserContext)
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circlePicture,onChangecirclePicture] =useState('')
  const {addCircle} = useContext<IUserContext>(UserContext)
  const {isCircle,circleChosen} = useContext<ICircleContext>(CircleContext)
  
  
  const [Avatar,setAvatar] = useState('')

    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : '사진찍기',
            chooseFromLibraryButtonTitle : '앨범에서 고르기',
            cancelButtonTitle : '취소'
        },response=>{
            setAvatar(response.uri)
            console.log(response.uri)
        })
    }

  const checkInputs= () => {
    
    return true;
}
  

    


    return (
      <Container>
          <FormContainer> 
              <MyImageTouch
              onPress={()=>{addImage()}}
              >
          <MyImage
          source = {{uri : isCircle && circleChosen ?  circleChosen.picture : constants.DEFAULT_CIRCLE_IMG}}/>
          
          </MyImageTouch>
          
          <Description>Name</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="별명"/>
          <Description>Tags</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="태그"/>
          <Description>Explanation</Description>
          <Input style={{marginBottom:32, flex: 5 }} placeholder="동아리소개"/>
          <Button label="개인정보 수정" onPress={() => {
            navigation.goBack()
          }}/>
          </FormContainer>
      </Container> 
       
    );
};

export default CirclePageEdit;