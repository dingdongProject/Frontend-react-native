import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';

import api from '~/Api/api';
import Loading from '~/Components/Loading';

type NavigationProp = StackNavigationProp<TotalNaviParamList>;


interface Props {
  navigation: NavigationProp;
  
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
`;
const ScrollConatainer = Styled.ScrollView`
  flex: 1;
`;
const DingdongImage = Styled.Image`
  width : 420px;
  height : 800px;
  
`;

const SubContainer = Styled.View`
  
  flex : 1;
  border : 0px;
`;
const MyContainer = Styled.View`
  margin-top : 20px;
  border : 0px;
  width : 400px;
  height : 140px;
  align-items : flex-start;
  flex-direction : row;
  border-bottom-width : 0px;
  border-bottom-color : ${constants.TEXT2}
`;

const MyTouchContainer = Styled.TouchableOpacity`
flex : 1;
`;
const MyImage = Styled.Image`
  margin: auto;
  margin-bottom: 0px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px;
  border-color : ${constants.PRIMARY};

`;
const MyScript = Styled.View`
  flex :1 ;
  margin-top : 0px;
  padding-bottom : 50px;
  border : 0px;
  border-bottom-width : 1px;
  border-bottom-color : ${constants.TEXT2}
`;
const MyScriptText =Styled.Text`
font-size:20px;
text-align:center;
color:${constants.TEXT1};
margin-bottom : 0px;
`;

const MyExp = Styled.View`
flex :1 ;
margin-top : 0px;
padding-bottom : 50px;
border : 0px;
border-bottom-width : 1px;
border-bottom-color : ${constants.TEXT2}
`;
const MyExpText =Styled.Text`
font-size:20px;
text-align:center;
color:${constants.TEXT1};
margin-bottom : 0px;
`;
const MemberCenter = Styled.View`
  flex :1;
  align-items : center;
  flex-direction : row;
`;
const MembersContainer = Styled.View`
  flex : 1;
  border :0px;
  align-items : center;
  width : 100%;
  height : 40px;
  padding : 10px;
  
`;
const MembersText =Styled.Text`
font-size:15px;
text-align:center;
color:${constants.TEXT2};
margin-bottom : 0px;
`;
const MembersAdmin = Styled.Image`

`;



const Information =  ({navigation } : Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {userInfo,circleInfo} = useContext<IUserContext>(UserContext);
  const {isCircle,circleChosen,circleMembers} = useContext<ICircleContext>(CircleContext)

   
    return (
      isCircle && circleChosen ?
        <Container>
          <ScrollConatainer>
          <SubContainer>
          <MyContainer>
            
              
              {
                <MyImage source={{uri : isCircle && circleChosen ?  circleChosen.picture : constants.DEFAULT_CIRCLE_IMG}}/>
              }
             
             </MyContainer>
             <MyScript>
              <MyScriptText>
                {circleChosen?.name}
              </MyScriptText>
             </MyScript>
             <MyExp>
             <MyExpText>
                {circleChosen?.explanation}
              </MyExpText>
             </MyExp>
             
             {
               
               circleMembers.map((name,isAdmin)=>{
                 return(
                   
                  <MembersContainer>
                    <MemberCenter>
                    <MembersText>
                    {name.name}
                    </MembersText>
                    {name.isAdmin?
                    <MembersAdmin
                        source={require('~/Assets/Images/star.png')}
                    /> : console.warn(isAdmin)
                  }
                  </MemberCenter>
                  </MembersContainer>
                  

                 )
               }) 
             }
            
            
           </SubContainer>
           </ScrollConatainer>
      </Container> 

       : 
       <Container>
       <DingdongImage source = {require('~/Assets/Images/dingdong_splas.png')}/>
       </Container>

      
       
    );
};

export default Information;