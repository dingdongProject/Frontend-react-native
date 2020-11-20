import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import ImagePicker from 'react-native-image-picker';


import Input from '~/Components/Input';
import Button from '~/Components/Button';
import constants from '~/Constants/constants';



type NavigationProp = StackNavigationProp<MyCircleNaviParamList>;

interface Props {
  navigation: NavigationProp;
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
`;

const SubContainer = Styled.View`
    flex :1;
    border : 0px;
    align-items : center;
    justify-content : center;
    padding : 32px;
    padding-top: 0px;
`;

const FuncBox = Styled.View`
    margin-left: 40%;
    width: 60%;
`;
const FuncFlex = Styled.View`
    flex-direction : row;
    justify-content: flex-end;
`;
const FunctionBox = Styled.TouchableOpacity`
    margin: 6px;
    margin-top: 20px;
    padding : 3px;
    border : 1px solid ${constants.PRIMARY};
    border-radius: 12px;  
    flex:1;
    justify-content: center;   
    
`;
const FuncText = Styled.Text`
    font-weight : bold;
    text-align: center;
    font-size: 11px;    
    color : ${constants.PRIMARY};
`;

const BodyContainer = Styled.View`
    align-items : center;
    margin-top: 10px;
    width : 100%;
    height: auto;
    justify-content : center;   
`

const FooterTouch = Styled.TouchableOpacity`

`;
const Footer = Styled.View`

    border : 0px;
    margin-top : 20px;
    width : auto;
    height : 30px;
    align-items : center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : right;
    color : ${constants.PRIMARY}
`; 

const Write =  ({navigation } : Props) => {
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
    const functions = [
        {name: "Check Read", chosen: false},
        {name: "Vote", chosen: false},
        {name: "Ladder Game",chosen: false}
    ]

    const clicked = (key: number) => {

    }


    


    return (
      <Container>
          <SubContainer>
              <FuncBox>
                  <FuncFlex>
              {functions.map((item,key) => {
                  return (
                    <FunctionBox
                    >
                        <FuncText>
                            {item.name}
                        </FuncText>
                    </FunctionBox>
                  )
              })
              }
              </FuncFlex>
              </FuncBox>
              <BodyContainer>
                  
              <Input
                style={{marginBottom:32, height: 40 }}
                    placeholder={'Title'}
                        // onChangeText={text=>onChangeText(text)}
                    />
                <Input
                    style={{marginBottom:32, height: 450 }}
                    multi
                    placeholder={'Content'}
                    // onChangeText={text=>onChangeText(text)}
                />
              </BodyContainer>
              <Button
              label="post" />
          </SubContainer>
          
      </Container> 
       
    );
};

export default Write;