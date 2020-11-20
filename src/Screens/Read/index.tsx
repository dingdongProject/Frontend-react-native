import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import Input from '~/Components/Input';
import constants from '~/Constants/constants';
import {RouteProp} from '@react-navigation/native';


type NavigationProp = StackNavigationProp<MyCircleNaviParamList>;
type ReadScreenRouteProp = RouteProp<ReadNaviParamList, "post">;

interface Props {
  navigation: NavigationProp;
  route: ReadScreenRouteProp;
}

const Container = Styled.SafeAreaView`
  flex : 1;
  background-color: #f4f4f4;
`;
const ScrollContainer = Styled.ScrollView`
    height: 95%;
`;

const SubContainer = Styled.View`
    flex : 1;
    align-items : center;
`;

const WriterContainer = Styled.View`
    margin-top : 20px;
    width : 400px;
    height : 70px;
    flex-direction : row;
    border : 0px;
`;
const WriterImageBox = Styled.View`
    width : 80px;
    height : 70px;
    align-items : center;
    justify-content : center;
    border : 0px;
`;
const WriterImage = Styled.Image`
    margin-right : 0px;
    width: 70px;
    height: 70px;
    border-radius: 20;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const WriterInfoBox = Styled.View`
    width : 150px;
    height : 70px;
    padding-left : 10px;
    margin-top : 5px;
    border : 0px;
`;
const WriterInfoNameBox = Styled.View`
    width : 150px;
    height : 35px;
    border : 0px;
`;
const WriterInfoName = Styled.Text`
    color : ${constants.TEXT1}
    font-weight : bold;
    font-size : 18px;

`;
const WriterInfoTimeBox = Styled.View`
    width : 100px;
    height : 35px;
    border : 0px;
`;
const WriterInfoTime = Styled.Text`
    color : ${constants.TEXT2}
    font-size : 14px;

`;
const BodyContainer = Styled.View`
    align-items : center;
    justify-content : center;   
    width : 400px;
    height : auto;
    min-height: 400px;
    flex : 1;
    border : 0px;  
    justify-content: flex-start;
`;
const BodyBox = Styled.View`
    width : 390px;
    margin-top : 10px;
    height : auto;
    padding 10px;
    border : 0px;
    flex-direction : column;
`;
const BodyTitleBox = Styled.View`
    width : 385px;
    height : auto;
    border : 0px;
`;
const BodyTitle = Styled.Text`
    color : ${constants.TEXT1}
    font-weight : bold;
    font-size : 20px;
`;
const BodyBodyBox = Styled.View`
    margin-top : 10px;
    width : 390px;
    height : auto;
    border 0px;
`;
const BodyBody = Styled.Text`
    color : ${constants.TEXT1}
    font-size : 15px;
`;

const CommentContainer = Styled.View`
    flex-direction : column;
    justifyContent : flex-start;
    border: 0px solid #aaa
    border-top-width : 1px;
`;
const Comment = Styled.View`
    border: 0px solid #dedede
    border-bottom-width: 1px;
`;
const CommentUserContainer = Styled.View`
    height : auto;
    padding : 10px;
    flex-direction : row;
`;
const CommentImageBox = Styled.View`
    width : auto;
    height : auto;
    align-items : center;
    justify-content : center;
    border : 0px;
`;
const CommentImage = Styled.Image`
    margin-right : 0px;
    width: 40px;
    height: 40px;
    border-radius: 20;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const CommentInfoBox = Styled.View`
    width : auto;
    height : auto;
    padding-left : 10px;
    margin-top : 5px;
    border : 0px;
`;
const CommentNameBox = Styled.View`
    margin-top : 5px;
    width : auto;
    height : auto;
    border : 0px;
`;
const CommentName = Styled.Text`
    color : ${constants.TEXT1}
    font-weight : bold;
    font-size : 12px;

`;
const CommentBox = Styled.View`
    margin-top : 0px;
    width : auto;
    height : auto;
    padding : 10px;
    padding-top : 0px;
    border : 0px;
`;
const CommentText = Styled.Text`
    font-size : 15px;
    text-align : left;
    color : ${constants.TEXT3}
    max-height: 80px;
`

const Footer = Styled.View`
    border : 0px;
    bottom: 0px;
    padding: 5px 0;
    flex-direction : row;
    height: 40px;
    width: 100%;
    background: ${constants.PRIMARY}
`;
const CommentInput = Styled.TextInput`
    border-radius : 20px;
    border : 1px solid ${constants.PRIMARY};
    height: 100%;
    width: 86%;
    padding: 0 20px;
    margin-left: 2%;
    background: white;
`;

const SendImageContainer = Styled.TouchableOpacity`
    width: 10%;
    height: auto;
    margin-right: 2%;
`

const SendImage = Styled.Image`
    width: 80%;
    height: 80%;
    margin: auto;
`




const Read =  ({route, navigation } : Props) => {
    const {userInfo} = useContext<IUserContext>(UserContext)
    const post = route.params;
    


    return (
        <Container>
            <ScrollContainer>
                <SubContainer>
                    <WriterContainer>
                        <WriterImageBox>
                            <WriterImage
                            source={{uri : userInfo?.picture}}
                            />
                        </WriterImageBox>
                        <WriterInfoBox>
                            <WriterInfoNameBox>
                                <WriterInfoName>
                                    {userInfo?.username}
                                </WriterInfoName>

                            </WriterInfoNameBox>
                            <WriterInfoTimeBox>
                                <WriterInfoTime>
                                    방금
                                </WriterInfoTime>

                            </WriterInfoTimeBox>

                        </WriterInfoBox>

                    </WriterContainer>
                    <BodyContainer>
                        <BodyBox>
                            <BodyTitleBox>
                                <BodyTitle>
                               {post.title}
                                </BodyTitle>
                            </BodyTitleBox>
                            <BodyBodyBox>
                                <BodyBody>
                                {post.content}
                                </BodyBody>

                            </BodyBodyBox>

                        </BodyBox>

                    </BodyContainer>
                    <CommentContainer>
                        <Comment>
                    <CommentUserContainer>
                        <CommentImageBox>
                            <CommentImage
                            source={{uri : userInfo?.picture}}
                            />
                        </CommentImageBox>
                        <CommentInfoBox>
                            <CommentNameBox>
                                <CommentName>
                                    {userInfo?.username}
                                </CommentName>

                            </CommentNameBox>
                        </CommentInfoBox>
                    </CommentUserContainer>
                        <CommentBox>
                            <CommentText>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </CommentText>
                        </CommentBox>
                        </Comment>
                        <Comment>
                    <CommentUserContainer>
                        <CommentImageBox>
                            <CommentImage
                            source={{uri : userInfo?.picture}}
                            />
                        </CommentImageBox>
                        <CommentInfoBox>
                            <CommentNameBox>
                                <CommentName>
                                    {userInfo?.username}
                                </CommentName>

                            </CommentNameBox>
                        </CommentInfoBox>
                    </CommentUserContainer>
                        <CommentBox>
                            <CommentText>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </CommentText>
                        </CommentBox>
                        </Comment>
                        <Comment>
                    <CommentUserContainer>
                        <CommentImageBox>
                            <CommentImage
                            source={{uri : userInfo?.picture}}
                            />
                        </CommentImageBox>
                        <CommentInfoBox>
                            <CommentNameBox>
                                <CommentName>
                                    {userInfo?.username}
                                </CommentName>

                            </CommentNameBox>
                        </CommentInfoBox>
                    </CommentUserContainer>
                        <CommentBox>
                            <CommentText>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </CommentText>
                        </CommentBox>
                        </Comment>
                        <Comment>
                    <CommentUserContainer>
                        <CommentImageBox>
                            <CommentImage
                            source={{uri : userInfo?.picture}}
                            />
                        </CommentImageBox>
                        <CommentInfoBox>
                            <CommentNameBox>
                                <CommentName>
                                    {userInfo?.username}
                                </CommentName>

                            </CommentNameBox>
                        </CommentInfoBox>
                    </CommentUserContainer>
                        <CommentBox>
                            <CommentText>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </CommentText>
                        </CommentBox>
                        </Comment>
                        <Comment>
                    <CommentUserContainer>
                        <CommentImageBox>
                            <CommentImage
                            source={{uri : userInfo?.picture}}
                            />
                        </CommentImageBox>
                        <CommentInfoBox>
                            <CommentNameBox>
                                <CommentName>
                                    {userInfo?.username}
                                </CommentName>

                            </CommentNameBox>
                        </CommentInfoBox>
                    </CommentUserContainer>
                        <CommentBox>
                            <CommentText>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </CommentText>
                        </CommentBox>
                        </Comment>
                        
                    </CommentContainer>
                </SubContainer>
            </ScrollContainer>
            <Footer>
                <CommentInput/>
                <SendImageContainer>
                <SendImage source={require('~/Assets/Images/send.png')}/>
                </SendImageContainer>
            </Footer>

        </Container>
       
    );
};

export default Read;