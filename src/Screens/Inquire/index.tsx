import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';
import {RouteProp, NavigationProp, useFocusEffect} from '@react-navigation/native';
import api from '~/Api/api'

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  
`;

const SubContainer = Styled.View`
  flex : 1;
  width  : 410px;
  height : auto;
  border : 0px;
  padding : 10px;
`;
const ScrollContainer = Styled.ScrollView`
    flex :1;
`;
const ReadBox = Styled.TouchableOpacity`
`;
const BulleteinMainContainer = Styled.View`
    flex : 1;
    flex-direction : row;
    justify-content: space-between;
    border-bottom-width : 0.5px;
    margin: 0 5px;
`;
const BulleteinContainer = Styled.View`
    height : auto;
    border : 0px;
    max-width: 70%;
`;

const BulleteinTitleBox = Styled.View`
    height : auto;
    border : 0px;
    padding : 0px;
    padding-top : 10px;
`;
const BulleteinTitleText = Styled.Text`
    color : ${constants.PRIMARY};
    font-weight : bold;
    font-size : 20;
`;
const BulleteinBodyBox =Styled.View`
    height : 40px;
    padding-top : 5px;
    border : 0px;
`;
const BulleteinBodyText = Styled.Text`
    color : ${constants.TEXT1};
    font-size : 12;
    
`;
const BulleteinCommentBox = Styled.View`
    height : auto;
    padding-top : 5px;
    padding-bottom : 5px;
    border : 0px;
`;
const BulleteinCommentText = Styled.Text`
    color : ${constants.TEXT2};
    font-size : 10;
`;
const BulleteinImageBox = Styled.View`
    width : 100px;
    height : 100px;
    border : 0px;
    margin: 5px 0;
`;

const BulleteinImage = Styled.Image`
    width : 100px;
    height : 100px;
    resize-mode:center;
    border-radius: 15px;
`;
const FooterTouch = Styled.TouchableOpacity`
    align-items : center;
`
const Footer = Styled.View`
    border-radius : 20;
    background-color : ${constants.PRIMARY}
    width : 100px;
    height : 45px;
    bottom : 20;
    position : absolute;
    padding : 5px;
    display: flex;
    justify-content: center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : center;
    font-size : 15px;   
    color : white;
`; 


const Inquire =  ({navigation } : any) => {
  


    return (
      <Container>
          <ScrollContainer>
          <SubContainer>
            <ReadBox>
                <BulleteinMainContainer>
                    <BulleteinContainer>
                        <BulleteinTitleBox>
                            <BulleteinTitleText>
                                how are you?
                            </BulleteinTitleText>
                        </BulleteinTitleBox>
                        <BulleteinBodyBox>
                            <BulleteinBodyText>
                            i'm fine!
                            </BulleteinBodyText>
                        </BulleteinBodyBox>
                        <BulleteinCommentBox>
                            <BulleteinCommentText>
                            </BulleteinCommentText>
                        </BulleteinCommentBox>
                    </BulleteinContainer>
                    
                    <BulleteinImageBox>
                    </BulleteinImageBox>
                    
                </BulleteinMainContainer>
                </ReadBox>
                </SubContainer>
            </ScrollContainer>
            <FooterTouch
                onPress={()=>{
                    navigation.navigate('Write');
                }}
                >
            <Footer>
                <FooterText>
                    Write
                </FooterText>
            </Footer>
            </FooterTouch>
          
          
      </Container>
       
    );
};

export default Inquire;


