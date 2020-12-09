import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import ImagePicker from 'react-native-image-picker';
import {Platform, Alert} from 'react-native';
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
  const {userInfo, modifyUserInfo} = useContext<IUserContext>(UserContext)
  const [name,onChangeName] = useState(userInfo?.username)
  const [email,onChangeEmail] = useState(userInfo?.email)
  const [userPicture,onChangeuserPicture] =useState({uri: '', name: '', type:''})
  const {addCircle} = useContext<IUserContext>(UserContext)
  const {isCircle,circleChosen} = useContext<ICircleContext>(CircleContext)
  var pictureChanged = false;
  const placeholderName = name;
  const placeholderEmail = email;


    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : 'take a photo',
            chooseFromLibraryButtonTitle : 'choose from album',
            cancelButtonTitle : 'cancel'
        },response=>{
          if (response.didCancel) return;
          pictureChanged = true;
          onChangeuserPicture({
            uri: response.uri,
            name: `${Math.floor(Math.random() * 100000000)}.png`,
            type: 'image/png'
          });
        })
    }

    const checkInputs= () => {
      let re = /\S+@\S+\.\S+/;
      let emailTest = re.test(email!);
      let usernameTest= name!.length >= 4 && name!.length <= 20
      return (emailTest && usernameTest);

  }
  const changeUser = () => {
    if (!checkInputs()){
      Alert.alert('Failed', 'Either Email does not match the format, or the username is not between 4 to 20 letters')
      return;
    }
    
    var form = new FormData();
    let formUserFile = userPicture
    formUserFile.uri = Platform.OS === "android" ? formUserFile.uri : formUserFile.uri.replace("file://", "")
    form.append('name', name)
    form.append('email', email)
    if (userPicture.uri !== '')
      form.append('picture', formUserFile)
    form.append('Content-Type', 'image/png');
    modifyUserInfo(form);
    navigation.pop();
  }
  

    

//userInfo nickname introduction 필요
    return (
      <Container>
          <FormContainer> 
            <ImageButtonContainer>
          <ImageButton 
          onPress={()=>{addImage()}}
          source = {userPicture.uri !== "" ? userPicture.uri : userInfo?.picture}
          />
          </ImageButtonContainer>
          <ContentContainer>
          <Description>Name</Description>
          <Input style={{marginBottom:20}} placeholder={placeholderName} onChangeText={(text) =>onChangeName(text)}/>
          <Description>Email</Description>
          <Input style={{marginBottom:48,}} placeholder={placeholderEmail} onChangeText={(text) =>onChangeEmail(text)}/>
          </ContentContainer>
          <ButtonContainer>
          <Button label="Change My Info" onPress={() => {
            changeUser();
          }}/>
          </ButtonContainer>
          </FormContainer>
      </Container> 
       
    );
  }

export default MyPageEdit;