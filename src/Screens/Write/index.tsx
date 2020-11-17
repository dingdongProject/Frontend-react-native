import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import Input from '~/Components/Input';
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
`;

const FuncBox = Styled.View`
    flex : 0.25;
    border : 0px;
    flex-direction : row-reverse;
    
`;
const FuncFlex = Styled.View`
    flex-direction : column;
`;
const FunctionBox = Styled.View`
    width : 150px;
    height : 60px;
    padding : 20px;
    border : 0px;
    
`;
const FuncText = Styled.Text`
    font-weight : bold;
    text-align : left;
    color : ${constants.TEXT1}
`;

const BodyContainer = Styled.View`
    flex : 0.75;
    align-items : center;
`

const TitleInputBox = Styled.View`
    margin-top : 20px;
    width : 350px;
    height : 50px;
    border : 0px;
`;
const BodyInputScroll = Styled.ScrollView`
`;
const BodyInputBox = Styled.View`
    margin-top : 20px;
    width : 350px;
    height : 350px;
    border : 0px;
`;

const FooterTouch = Styled.TouchableOpacity`

`;
const Footer = Styled.View`
    border : 0px;
    height : 30px;
    align-items : center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : right;
    color : ${constants.PRIMARY}
`; 

const Write =  ({navigation } : Props) => {
  

    


    return (
      <Container>
          <SubContainer>
              <FuncBox>
                  <FuncFlex>
                <FunctionBox>
                    <FuncText>
                        확인했어요~
                    </FuncText>
                </FunctionBox>
                <FunctionBox>
                <FuncText>
                        투표
                    </FuncText>
                </FunctionBox>
                <FunctionBox>
                <FuncText>
                        사다리
                    </FuncText>
                </FunctionBox>
                </FuncFlex>
              </FuncBox>
              <BodyContainer>
              <TitleInputBox>
              <TextInput
                    style={{
                        borderWidth : 1,
                        height : 50,
                        width : 350,
                        padding : 20,
                        paddingTop : 15,
                    }}
                    multiline = {true}
                    numberOfLines={4}
                    placeholder={'제목'}
                    placeholderTextColor={constants.TEXT2}

                    // onChangeText={text=>onChangeText(text)}
                />
              </TitleInputBox>
              <BodyInputScroll>
              <BodyInputBox>
                <TextInput
                    style={{
                        borderWidth : 1,
                        height : 350,
                        width : 350,
                        paddingTop : 20,
                        padding : 20,
                    }}
                    multiline = {true}
                    numberOfLines={4}
                    placeholder={'약관'}
                    placeholderTextColor={constants.TEXT2}

                    // onChangeText={text=>onChangeText(text)}
                />
              </BodyInputBox>
              </BodyInputScroll>
              </BodyContainer>
              <FooterTouch>
                  <Footer>
                      <FooterText>
                          저장
                      </FooterText>
                  </Footer>
              </FooterTouch>

          </SubContainer>
          
      </Container> 
       
    );
};

export default Write;