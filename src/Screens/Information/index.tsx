import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';

type NavigationProp = StackNavigationProp<TotalNaviParamList>;


interface Props {
  navigation: NavigationProp;
  
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;
const DingdongImage = Styled.Image`
  width : 420;
  height : 800;
  
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
  margin-bottom : 1px;
  padding : 10px;
  width : 400px;
  height : 40px;
  margin-left : 0px;
`;
const EtcText = Styled.Text`
font-size:20px;
text-align:left;
color:${constants.TEXT1};
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


const Information =  ({navigation } : Props) => {
  const [myuser, setMyuser] = useState<IUserInfo>();
  const {userInfo,circleInfo} = useContext<IUserContext>(UserContext);
  const {isCircle,circleChosen} = useContext<ICircleContext>(CircleContext)
      
     
      

    return (
      isCircle && circleChosen ?
        <Container>
          <SubContainer>
          <MyContainer>
            <MyTouchContainer
            onPress={()=>{navigation.navigate("CirclePageEdit")}}
            >
              
              {
                <MyImage source={{uri : isCircle && circleChosen ?  circleChosen.picture : constants.DEFAULT_CIRCLE_IMG}}/>
              }
             
             <MyScript>
              <MyScriptText>
                {circleChosen?.name}
              </MyScriptText>
             </MyScript>
             <MyScript>
             <MyScriptText>
                {circleChosen?.explaination}
              </MyScriptText>
             </MyScript>
            </MyTouchContainer>
          </MyContainer>
           </SubContainer>
            
        
      </Container> 

       : 
       <Container>
       <DingdongImage source = {require('~/Assets/Images/dingdong_splash.png')}/>
       </Container>

      
       
    );
};

export default Information;