import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';




const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const SubContainer = Styled.View`
  flex : 0.9;
  width  : 400px;
  height : 375px;
  border : 0px;
`;
const MyContainer = Styled.View`
  border : 0px;
  width : 400px;
  height : 180px;
  align-items : flex-start;
  flex-direction : row;
  border-bottom-width : 1px;
  border-bottom-color : ${constants.TEXT2}
`;

const MyTouchContainer = Styled.TouchableOpacity`
flex : 1;
`;
const MyImage = Styled.Image`
  margin: auto;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100;
  border: 1px;
  border-color : ${constants.PRIMARY};

`;
const MyScript = Styled.View`
  flex :1 ;
  border : 0px;
`;
const MyScriptText =Styled.Text`
font-size:20px;
text-align:center;
color:${constants.TEXT2};
margin-bottom : 0px;
`;

const EtcContainer = Styled.View`
  border : 0px;
  width : 375px;
  height : 250px;
  margin-top : 25px;
  margin-left : 0px;
`;
const EtcSubContainer = Styled.View`
  border-bottom-width : 1px;
  border-bottom-color : ${constants.TEXT2}
  margin-top : 30px;
  padding-bottom : 20px;
  margin-bottom : 0px;
  padding : 10px;
  width : 400px;
  height : 40px;
  margin-left : 0px;
`;
const EtcText = Styled.Text`
font-size:20px;
text-align:left;
color:${constants.TEXT1};
padding-bottom : 70px;
margin-bottom : 0px;
`;

const EtcText2 = Styled.Text`
font-size:20px;
text-align:left;
color:red;
margin-bottom : 0px;
`;

const Button = Styled.TouchableHighlight`
    padding : 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction : row;
    align-items : center;
    `;

const Icon = Styled.Image`
    margin-right : 8px;
`;

type NavigationProp = StackNavigationProp<TotalNaviParamList>;


interface Props {
  navigation: NavigationProp;
  
}


const Mypage =  ({navigation } : Props) => {
  const [myuser, setMyuser] = useState<IUserInfo>();
  const {userInfo,tokenInfo} = useContext<IUserContext>(UserContext);
      
     
      

    return (
      <Container>
          <SubContainer>
          <MyContainer>
            <MyTouchContainer
            onPress={()=>{navigation.navigate("MyPageEdit")}}
            >
             <MyImage source={{uri: userInfo?.picture ? userInfo.picture : 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg'}}/> 
             <MyScript>
              <MyScriptText>
                {userInfo?.username}
              </MyScriptText>
             </MyScript>
             <MyScript>
             <MyScriptText>
                {userInfo?.email}
              </MyScriptText>
             </MyScript>
            </MyTouchContainer>
          </MyContainer>
          <EtcContainer>
            <MyTouchContainer>
            <EtcSubContainer>
              <EtcText>
                setting
              </EtcText>
            </EtcSubContainer>
            </MyTouchContainer>
            <MyTouchContainer>
            <EtcSubContainer>
            <EtcText>
                Inquire
              </EtcText>
            </EtcSubContainer>
            </MyTouchContainer>
            <MyTouchContainer>
            <EtcSubContainer>
            <EtcText2>
                withdraw
              </EtcText2>
            </EtcSubContainer>
            </MyTouchContainer>
          </EtcContainer>
          </SubContainer>
            
              <ButtonContainer>
                <IconButton iconName = 'menu'
                onPress={()=>{navigation.navigate("MyPageEdit")}}
                />
              </ButtonContainer>
            
        
      </Container> 
       
    );
};

export default Mypage;