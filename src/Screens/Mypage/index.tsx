import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import { Linking } from 'react-native'
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';




const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
`;

const SubContainer = Styled.View`
  flex : 1;
  width  : 100%;
  height : auto;
  border : 0px;
`;
const MyContainer = Styled.View`
  border : 0px;
  width : 100%;
  height : 220px;
  padding-top : 30px;
 
  align-items : flex-start;
  flex-direction : row;
`;

const MyTouchContainer = Styled.TouchableOpacity`
flex : 1;
`;
const MyImage = Styled.Image`
  margin: auto;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
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
color:${constants.TEXT1};
margin-bottom : 0px;
`;

const EtcContainer = Styled.View`
  border : 1.5px solid ${constants.TEXT2};
  border-radius: 20px;
  width : 400px;
  height : 210px;
  margin: auto;
  margin-top: 20px;
`;
const EtcSubContainer = Styled.View`
  padding-left: 10px;
  width : 370px;
  height : 70px;
  margin: auto;
  flex-direction : row;
  align-items: center;
  border : 0px solid ${constants.TEXT2};
  border-bottom-width: 0.5px;

`;
const EtcImageBox = Styled.View`
margin-right : 8px;
width : auto;
`;

const EtcImage = Styled.Image`
 width : 24px;
 height : 24px;

`;
const EtcText = Styled.Text`
font-size:20px;
text-align:left;
color:${constants.TEXT1};
`;

const EtcText2 = Styled.Text`
font-size:20px;
text-align:left;
color: #f66;
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
            onPress={()=>navigation.navigate('MyPageEdit')}
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
            <MyTouchContainer
            onPress={()=>Linking.openSettings()}
            >
            <EtcSubContainer>
              <EtcImageBox>
              <EtcImage
              source={require('~/Assets/Images/setting.png')}
              />
              </EtcImageBox>
              <EtcText>
                setting
              </EtcText>
            </EtcSubContainer>
            </MyTouchContainer>
            <MyTouchContainer
            onPress={()=>{navigation.navigate("Inquire")}}
            >
            <EtcSubContainer>
              <EtcImageBox>
            <EtcImage
              source={require('~/Assets/Images/help.png')}
              />
              </EtcImageBox>
            <EtcText>
                Inquire
              </EtcText>
            </EtcSubContainer>
            </MyTouchContainer>
            <MyTouchContainer>
            <EtcSubContainer>
              <EtcImageBox>
            <EtcImage
              source={require('~/Assets/Images/withdraw.png')}
              />
              </EtcImageBox>
            <EtcText2>
                withdraw
              </EtcText2>
            </EtcSubContainer>
            </MyTouchContainer>
          </EtcContainer>
          </SubContainer>
      </Container> 
       
    );
};

export default Mypage;