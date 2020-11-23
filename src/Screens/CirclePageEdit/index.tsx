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
const ScrollContainer = Styled.ScrollView`
  flex :1;
`;
const FormContainer = Styled.View`
    width : 100%;
    height : auto;
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


const MembersContainer = Styled.View`
  flex : 1;
  border :0px;
  
  flex-direction : row;
  width : 50%;
  height : auto;
  padding : 0px;
  padding-bottom : 10px;
  border-bottom-width : 0.3px;
`;
const MembersSubContainer = Styled.View`
  flex : 1;
  border :0px;
  width : 100%;
  height : auto;
  padding : 0px;
  padding-left : 0px;
`;
const MemTouch = Styled.TouchableOpacity`
  flex-direction : row;
`;
const MembersText =Styled.Text`
font-size:15px;
text-align:center;
color:${constants.TEXT2};
margin-bottom : 0px;
`;
const MembersAdmin = Styled.Image`

`;


const CirclePageEdit =  ({navigation } : Props) => {
  const {userInfo} = useContext<IUserContext>(UserContext)
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circlePicture,onChangecirclePicture] =useState('')
  const {addCircle} = useContext<IUserContext>(UserContext)
  const {isCircle,circleChosen,circleMembers} = useContext<ICircleContext>(CircleContext)
  
  
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
        <ScrollContainer>
          <FormContainer> 
              <MyImageTouch
              onPress={()=>{addImage()}}
              >
          <MyImage
          source = {{uri : isCircle && circleChosen ?  circleChosen.picture : constants.DEFAULT_CIRCLE_IMG}}/>
          
          </MyImageTouch>
          
          <Description>Name</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="name"/>
          <Description>Tags</Description>
          <Input style={{marginBottom:32, flex:1}} placeholder="tags"/>
          <Description>Explanation</Description>
          <Input style={{marginBottom:32, flex: 5 }} placeholder="explanation"/>
          
            <MembersSubContainer>
          {
               
               circleMembers.map((name,isAdmin)=>{
                 return(
                   
                  <MembersContainer>
                    <MemTouch>
                    <MembersText>
                    {name.name}
                    </MembersText>
                    {isAdmin?
                    <MembersAdmin
                        source={require('~/Assets/Images/star.png')}
                    /> : console.log('')
                  }
                  </MemTouch>
                  </MembersContainer>
                  
                  

                 )
               }) 
             }
             </MembersSubContainer>
          
             </FormContainer>
          <Button label="Circle Information Edit" onPress={() => {
            navigation.goBack()
          }}/>
          
          </ScrollContainer>
      </Container> 
       
    );
};

export default CirclePageEdit;