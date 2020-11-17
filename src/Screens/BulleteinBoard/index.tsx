import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';


type NavigationProp = StackNavigationProp<BulleteinBoardNaviParamList, 'Read'>;


interface Props {
  navigation: NavigationProp;
  
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  
`;

const SubContainer = Styled.View`
  flex : 1;
  width  : 410px;
  height : 400px;
  border : 0px;
  padding : 10px;
`;
const ScrollContainer = Styled.ScrollView`
    flex :1;
`;
const BulleteinMainContainer = Styled.View`
    flex : 1;
    flex-direction : row;
    border-bottom-width : 0.5px;
`;
const BulleteinContainer = Styled.View`
    width : 300px;
    height : 110px;
    border : 0px;
    
`;

const BulleteinTitleBox = Styled.View`
    width : 300px;
    height : 40px;
    border : 0px;
    padding-top : 10px;
    padding-left : 13px;
`;
const BulleteinTitleText = Styled.Text`
    color : ${constants.PRIMARY};
    font-weight : bold;
    font-size : 20;
`;
const BulleteinBodyBox =Styled.View`
    width : 300px;
    height : 40px;
    padding-top : 10px;
    padding-left : 13px;
    border : 0px;
    
`;
const BulleteinBodyText = Styled.Text`
    color : ${constants.TEXT1};
    font-size : 13;
`;
const BulleteinCommentBox = Styled.View`
    width : 300px;
    height : 30px;
    padding-top : 10px;
    padding-left : 13px;
    border : 0px;
`;
const BulleteinCommentText = Styled.Text`
    color : ${constants.TEXT2};
    font-size : 10;
`;
const BulleteinImageBox = Styled.View`
    width : 110px;
    height : 110px;
    border : 0px;
`;

const BulleteinImage = Styled.Image`
    resize-mode:center;
`;
const FooterTouch = Styled.TouchableOpacity`
    align-items : center;
`
const Footer = Styled.View`
    border : 0px;
    height : 30px;
    align-items : center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : center;
    color : ${constants.PRIMARY}
`; 


const BulleteinBoard =  ({navigation } : Props) => {
  const [myuser, setMyuser] = useState<IUserInfo>();
  const {userInfo,tokenInfo} = useContext<IUserContext>(UserContext);
      
     
      

    return (
      <Container>
          <SubContainer>
            <ScrollContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>



                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer>
                <BulleteinMainContainer>
                <BulleteinContainer>
                    <BulleteinTitleBox>
                        <BulleteinTitleText>
                            안녕
                        </BulleteinTitleText>
                    </BulleteinTitleBox>
                    <BulleteinBodyBox>
                        <BulleteinBodyText>
                        - Sept. 11th (this week) class: You can watch the recording which will be available soon.
- Sept. 18th (next week) class: Online streaming class from 10:00 am~. Please join the live session and be on time.

We will NOT use Zoom for Sept. 18th class.
Please join our Blackboard Collaborate session (its menu is on the left). Zoom is just too slow for sharing screen.
Let's use Blackboard Collaborate. From the next week, we will do online streaming class for a while. I decide that recording is not very relevant for Software Engineering class.

I hope everything is clear. If you have any questions, please use our Kakao channel.
Thanks!

-young
                        </BulleteinBodyText>
                    </BulleteinBodyBox>
                    <BulleteinCommentBox>
                        <BulleteinCommentText>
                            따봉
                        </BulleteinCommentText>

                    </BulleteinCommentBox>
                     </BulleteinContainer>
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : constants.DEFAULT_CIRCLE_IMG}}
                        />
                    </BulleteinImageBox>
                </BulleteinMainContainer> 



            </ScrollContainer>
            <FooterTouch
                onPress={()=>{
                    navigation.navigate('Write');
                }}
                >
            <Footer>
                <FooterText>
                    글쓰기
                </FooterText>
            </Footer>
            </FooterTouch>
          </SubContainer>
          
      </Container>
       
    );
};

export default BulleteinBoard;