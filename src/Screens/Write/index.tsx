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
    margin-top : 20px;
    border : 0px;
    
    
`;
const FuncFlex = Styled.View`
flex-direction : row;
`;
const FunctionBox = Styled.View`
    width : 130px;
    height : auto;
    padding : 20px;
    border : 0px;
    
`;
const FuncText = Styled.Text`
    font-weight : bold;
    text-align : right;
    color : ${constants.TEXT1}
`;

const BodyContainer = Styled.View`
    
    align-items : center;
`

const TitleInputBox = Styled.View`
    margin-top : 20px;
    width : 350px;
    height : auto;
    border : 0px;
`;
const BodyInputScroll = Styled.ScrollView`
`;
const BodyInputBox = Styled.View`
    margin-top : 20px;
    width : 350px;
    height : 450px;
    border : 0px;
`;

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
  

    


    return (
      <Container>
          <SubContainer>
              <FuncBox>
                  <FuncFlex>
                <FunctionBox>
                    <FuncText>
                        확인했어요
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
                        height : 450,
                        width : 350,
                        paddingTop : 20,
                        padding : 20,
                    }}
                    multiline = {true}
                    numberOfLines={1}
                    placeholder={'데뷔 후 지금까지 철저하게 지켜온 게 있나요? 음…. 아! 나를 아는 사람은 나를 좋아하게 만들자! 성향이 그래요. 어릴 때도 친구들과 두루두루 친했고요. 모르는 사람은 날 싫어할 수 있죠. 그런데 나를 아는 사람에게는 좋은 인상으로 남자는 생각을 계속 해왔어요. 누군가와 틀어지는 거 별로 안 좋아해요. 저는 사람 자체를 별로 싫어하지 않아요. 나를 욕하는 사람이 있으면 그 사람 이야기도 한번 들어보고 싶고요. 왜 싫어해? 흐흐.      '}
                    placeholderTextColor={constants.TEXT2}

                    // onChangeText={text=>onChangeText(text)}
                />
              </BodyInputBox>
              </BodyInputScroll>
              </BodyContainer>
              <FooterTouch>
                  <Footer>
                      <FooterText>
                          카메라
                      </FooterText>
                  </Footer>
              </FooterTouch>
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