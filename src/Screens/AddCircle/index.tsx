import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import ImagePicker from 'react-native-image-picker';

import { onChange } from 'react-native-reanimated';
import constants from '~/Constants/constants';

import api from '~/Api/api'
import {Platform} from 'react-native';
import IconButton from '~/Components/IconButton';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
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
  const [circlePicture,onChangecirclePicture] =useState({uri: '', name: '', type: ''})
  const {addCircle, isLoading} = useContext<IUserContext>(UserContext)
  

    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : '사진찍기',
            chooseFromLibraryButtonTitle : '앨범에서 고르기',
            cancelButtonTitle : '취소'
        },response=>{
          onChangecirclePicture({
            uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
            name: `${circleName}.png`,
            type: 'image/png'
          });

        })
    }

  const checkInputs= () => {
    
    return true;
}
  

    


    return (
      <Container>
          <FormContainer> 
          <IconButton 
          iconName = 'upload'
          onPress={()=>{addImage()}}
          />
          <Description>Name</Description>
          <Input style={{marginBottom:32, flex:1}} onChangeText={(text)=> onChangecircleName(text)} placeholder="동아리명"/>
          <Description>Tags</Description>
          <Input style={{marginBottom:32, flex:1}}  placeholder="태그"/>
          <Description>Explanation</Description>
          <Input style={{marginBottom:32, flex: 5 }} onChangeText={(text)=> onChangeExplaination(text)} placeholder="동아리소개"/>
          <Button label="동아리 생성" onPress={async () => {

            var form = new FormData();
            form.append('name', circleName)
            form.append('explanation', circleExplaination)
            form.append('picture', circlePicture)
            form.append('Content-Type', 'image/png');
            addCircle(form);
            navigation.pop();
          }}/>
          </FormContainer>
      </Container> 
       
    );
};

export default AddCircle;