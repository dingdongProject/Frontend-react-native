import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import ImagePicker from 'react-native-image-picker';

import { onChange } from 'react-native-reanimated';
import constants from '~/Constants/constants';

import api from '~/Api/api'
import {Platform, Image} from 'react-native';
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


const GoBack = Styled.Text`
    color : #5F89FA;
`;

const AddCircle =  ({navigation } : Props) => {
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circleTag, onChangeTag] = useState('')
  const [circlePicture,onChangecirclePicture] =useState({uri: '', name: '', type:''})
  const {addCircle, isLoading} = useContext<IUserContext>(UserContext)
  

    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : '사진찍기',
            chooseFromLibraryButtonTitle : '앨범에서 고르기',
            cancelButtonTitle : '취소'
        },response=>{
          if (response.didCancel) return;
          onChangecirclePicture({
            uri: response.uri,
            name: `${Math.floor(Math.random() * 100000000)}.png`,
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
          <ImageButton 
          onPress={()=>{addImage()}}
          source = {circlePicture.uri !== "" ? circlePicture.uri : undefined}
          />
          <Description>Name</Description>
          <Input style={{marginBottom:32, flex:1}} onChangeText={(text)=> onChangecircleName(text)} 
          placeholder="Circle Name" max={30}/>
          <Description>Tags</Description>
          <Input style={{marginBottom:32, flex:1}}  placeholder="tags" onChangeText={(text)=> onChangeTag(text)} />
          <Description>Introduction</Description>
          <Input style={{marginBottom:32, flex: 5 }} onChangeText={(text)=> onChangeExplaination(text)} 
          placeholder="Introduction" multi={true} max={300}/>
          <Button label="동아리 생성" onPress={async () => {

            var form = new FormData();
            let formCircleFile = circlePicture
            formCircleFile.uri = Platform.OS === "android" ? formCircleFile.uri : formCircleFile.uri.replace("file://", ""),
            form.append('name', circleName)
            form.append('explanation', circleExplaination)
            form.append('tags', circleTag)
            if (circlePicture.uri !== '')
              form.append('picture', formCircleFile)
            form.append('Content-Type', 'image/png');
            addCircle(form);
            navigation.pop();
          }}/>
          </FormContainer>
      </Container> 
       
    );
};

export default AddCircle;