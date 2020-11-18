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
  flex : 1;
  background-color: #f4f4f4;
`;
const ScrollContainer = Styled.ScrollView`
    flex : 1;
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
    flex : 1;
    border : 0px;  
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
    color : ${constants.PRIMARY}
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
    font-weight : bold;
    font-size : 15px;
`;

const CommentConatainer = Styled.View`
    flex-direction : column;
    justifyContent : flex-start;
`;
const CommentUserContainer = Styled.View`
    margin-top : 20px;
    width : 410px;
    height : auto;
    padding : 10px;
    flex-direction : row;
    border-top-width : 1px;
    border-color : ${constants.TEXT2}
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
const Comment = Styled.Text`
    font-size : 15;
    text-align : left;
    color : ${constants.TEXT2}
`

const Footer = Styled.View`
    border : 0px;
    height : 35px;
    flex-direction : row;
`;
const FooterBox =Styled.View`
    height : 35px;
    width : 50px;
    padding : 10px;
`
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : right;
    color : ${constants.PRIMARY}
`; 





const Read =  ({navigation } : Props) => {
    const {userInfo} = useContext<IUserContext>(UserContext)

    


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
                                Layout Direction#

Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge start and end refer to. By default, React Native lays out with LTR layout direction. In this mode start refers to left and end refers to right.

LTR (default value) Text and children are laid out from left to right. Margin and padding applied to the start of an element are applied on the left side.

RTL Text and children are laid out from right to left. Margin and padding applied to the start of an element are applied on the right side
                                </BodyTitle>
                            </BodyTitleBox>
                            <BodyBodyBox>
                                <BodyBody>
                                justifyContent describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.

flex-start(default value) Align children of a container to the start of the container's main axis.

flex-end Align children of a container to the end of the container's main axis.

center Align children of a container in the center of the container's main axis.

space-between Evenly space off children across the container's main axis, distributing the remaining space between the children.

space-around Evenly space off children across the container's main axis, distributing the remaining space around the children. Compared to space-between, using space-around will result in space being distributed to the beginning of the first child and end of the last child.

space-evenly Evenly distribute children within the alignment container along the main axis. The spacing between each pair of adjacent items, the main-start edge and the first item, and the main-end edge and the last item, are all exactly the same.
Flex Direction#

flexDirection controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

row Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.

column (default value) Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container.

row-reverse Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.

column-reverse Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.
Flex Direction#

flexDirection controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.

row Align children from left to right. If wrapping is enabled, then the next line will start under the first item on the left of the container.

column (default value) Align children from top to bottom. If wrapping is enabled, then the next line will start to the right of the first item on the top of the container.

row-reverse Align children from right to left. If wrapping is enabled, then the next line will start under the first item on the right of the container.

column-reverse Align children from bottom to top. If wrapping is enabled, then the next line will start to the right of the first item on the bottom of the container.
                                </BodyBody>

                            </BodyBodyBox>

                        </BodyBox>

                    </BodyContainer>
                    <CommentConatainer>
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
                            <Comment>
                            아이돌의 연습생 과정 중에 혹시 인터뷰하는 방법을 훈련하는 과정도 있나요? 아니요. 예전엔 인터뷰를 하면 질문을 먼저 보고 그 밑에다 답을 다 적었어요. 까먹을까 봐. 그런데 지금은, 평소에 생각을 해서 그런지 그런 과정 없이 제 생각이 잘 나오는 것 같아요. 활동 초기에는 아, 이건 논란이 될 수 있으니까 전형적인 말만 하자, 했었는데 지금은 저도 인터뷰하면서 아, 내가 평소에 이렇게 생각했었지, 할 때도 있어요. 순간순간의 기록 같아서 이런 인터뷰를 되게 좋아해요. 옛날엔 저도 많이 감췄죠, 나는 이 모습이 예쁠 것 같은데. 웃는 모습은 별로고. 아직도 조금 있어요, 내가 아직 다 공개하지 못한 모습들이 있긴 한데 애쓰고 가리지 않으려고요. 자연스럽게 보여주는 법을 배우고 있어요.
                            </Comment>
                        </CommentBox>
                    </CommentConatainer>

                    <CommentConatainer>
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
                            <Comment>
                            스케줄이 많아 ‘멘붕’이 왔다고 말한 적이 있는데, 해야 할 일이 몰아칠 땐 어떻게 버텨요? 늘 머릿속에 있는 생각인데, 이건 내 직업이니까요. 팬이나 스태프 같은 주변 사람들을 위해서라도 이걸 놓을 수가 없다는 생각을 하면서 버텨요. 그리고 제가 노력한 걸 알아봐주실 때, 그게 되게 기분이 좋아요. 그걸 위해서, 그것 때문에라도, 그걸 즐겨 하니까 대중 앞에 서는 가수가 됐겠죠?
                            </Comment>
                        </CommentBox>
                    </CommentConatainer>
                

            </SubContainer>
            </ScrollContainer>
            <Footer>
                <FooterBox>
                    <FooterText>
                        댓글
                    </FooterText>
                </FooterBox>
                <TextInput
                    style={{
                        width : 350,
                        height : 40,
                        borderColor : constants.PRIMARY,
                        borderWidth : 1.5,
                        borderRadius : 20,
                        textAlign : "left",
                        
                    }}
                    multiline
                    numberOfLines={4}
                />
            </Footer>

        </Container>
       
    );
};

export default Read;