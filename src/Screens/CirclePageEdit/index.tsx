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
import {Alert, Text, TouchableOpacity} from 'react-native';
import IconButton from '~/Components/IconButton';
import Button from '~/Components/Button';
import Input from '~/Components/Input';
import ImageButton from '~/Components/ImageButton'
import styled from 'styled-components';

type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation: NavigationProp;
}


const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #f4f4f4;
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
    border :0px;
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
  
  align-items : center
  width : auto;
  height : auto;
  padding : 0px;
  padding-bottom : 10px;
  
`;
const MembersBox = Styled.View`
  width: 100%;
  height: auto;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #FAFAFA;
  border-width: 1px;
  border-color: #D3D3D3;
`;
const MembersSubBox = Styled.View`
  border-bottom-width :0.3px;
  border-top-width :0.3px;
  border-color: #D3D3D3;
  margin-bottom : 2px;
  width : 100%;
  height : auto;
  
`;
const MemTouch = Styled.TouchableOpacity`
  flex-direction : row;
`;
const MembersText =Styled.Text`
font-size:15px;
text-align:center;
color:${constants.TEXT2};
margin-bottom : 10px;
`;
const MembersAdmin = Styled.Image`

`;
const ButtonContainer = Styled.View`
  align-items : center;
`


const CirclePageEdit =  ({navigation } : Props) => {
  const {userInfo} = useContext<IUserContext>(UserContext)
  const [circleName,onChangecircleName] = useState('')
  const [circleExplaination,onChangeExplaination] = useState('')
  const [circlePicture,onChangecirclePicture] =useState('')
  const {circleInfo} = useContext<IUserContext>(UserContext)
  const {isCircle,circleChosen,circleMembers,getCircleMembers} = useContext<ICircleContext>(CircleContext)
  
  
  const [Avatar,setAvatar] = useState('')


    const addImage = () => {
        ImagePicker.showImagePicker({
            takePhotoButtonTitle : 'take a photo',
            chooseFromLibraryButtonTitle : 'select from album',
            cancelButtonTitle : 'cancel'
        },response=>{
            setAvatar(response.uri)
            console.log(response.uri)
        })
    }

  const checkInputs= () => {
    
    return true;
}


const addAdmin = async (name : string, circlename : string) => {
  let useradmin
  circleMembers.forEach(async (item)=>{
    if(item.name===name)
    {
      useradmin = item.isAdmin
      }
    })
      if(useradmin){
        await api.putMemberAdmin({
          circlename: circlename,
          name : name,
          isAdmin : "False"
        }).then((response)=>{
          return response.data;
        })
        .then((data)=>{
          if(data)
          {
            console.warn('changed!')
            getCircleMembers(circlename)
          }
          else
          {
            console.warn('faild!')
          }
        })
      }
      else{
        await api.putMemberAdmin({
          circlename: circlename,
          name : name,
          isAdmin : "True"
        }).then((response)=>{
          return response.data
        }).then((data)=>{
          if(data)
          {
            console.warn('changed!')
            getCircleMembers(circlename)
          }
          else
          {
            console.warn('faild!')
          }
        })
      }

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
          
            
            <Description>Name</Description>
              <MembersBox>
                <MembersSubBox>
              <MembersText>
                Admin
              </MembersText>
              </MembersSubBox>
          {
               
               circleMembers.map((name)=>{
                 if(name.isAdmin){
                   return(
                    <MembersContainer>
                    <MemTouch
                    onPress={()=>{addAdmin(name.name,circleChosen?.name!==undefined?circleChosen.name : '')}}
                    >
                    <MembersAdmin
                        source={require('~/Assets/Images/remove.png')}
                    />
                    <MembersText>
                    {name.name}
                    </MembersText>
                    
                    
                    </MemTouch>
                    </MembersContainer>
                    )
                    }
                  
                 
                  }
                 ) 
             }
             <MembersSubBox>
             <MembersText>
                Members
              </MembersText>
              </MembersSubBox>
             {
               
               circleMembers.map((name)=>{
                 if(!name.isAdmin){
                   return(
                    <MembersContainer>
                    <MemTouch
                    onPress={()=>{addAdmin(name.name,circleChosen?.name!==undefined?circleChosen.name : '')}}
                    >
                    <MembersAdmin
                        source={require('~/Assets/Images/add.png')}
                    />
                    <MembersText>
                    {name.name}
                    </MembersText>
                    
                    
                    </MemTouch>
                    </MembersContainer>
                    )
                    }
                  
                 
                  }
                 ) 
             }
             </MembersBox>
             
          
             </FormContainer>
             <ButtonContainer>
          <Button label="Circle Information Edit"
          style={{
            width : 300,
            

          }}
          onPress={() => {
            
            navigation.goBack()
          }}/>
          </ButtonContainer>
          </ScrollContainer>
      </Container> 
       
    );
};

export default CirclePageEdit;