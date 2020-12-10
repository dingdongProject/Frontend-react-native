import React, {useContext, useLayoutEffect, useEffect, useState, useRef} from 'react';
import Styled from 'styled-components/native';
import {TextInput, View, Text, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import Input from '~/Components/Input';
import constants from '~/Constants/constants';
import {RouteProp} from '@react-navigation/native';
import api from '~/Api/api';
import ReadList from '../ReadList';


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
    justify-content: space-between;
    align-items: center;
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
    border-radius: 20px;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const WriterInfoBox = Styled.View`
    width : 150px;
    height : 70px;
    padding-left : 10px;
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
    width: 100%;
`;
const Comment = Styled.View`
    border: 0px solid #dedede
    border-bottom-width: 1px;
    width: 100%;
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
    border-radius: 20px;
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
    width : 100%;
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
const BodyImageContainer = Styled.View`
    margin: 10px auto;
    width: 100%;
    height: auto;

`
const BodyImage = Styled.Image`
    width: 90%;
    min-height: 200px;
    max-height: auto;
    border-radius: 10px;
    margin: 5px auto;
    resize-mode:center;
`

const ReadCheckBox = Styled.TouchableOpacity`
    width: 60px;
    height: 40px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${constants.PRIMARY};

`;
const ReadCheckText = Styled.Text`
    text-align: center;
    color: white;
`;



const Read =  ({route, navigation } : Props) => {
    const {userInfo} = useContext<IUserContext>(UserContext)
    const [comment, setComment] = useState('')
    const [post, setPost] = useState<IPostInfo>(route.params);
    const [read, setRead] = useState({text: post.hasRead? 'Checked':'Check Read', hasRead: post.hasRead});

    var date = post.created.split('T')[0]
    var time = post.created.split('T')[1].slice(0, 8)
    const scrollViewRef = useRef();
    const sendComment = async () => {
        api.postComment({
            id: post.id,
            content: comment
        }).then(response => response.data)
        .then(data => {
            if (data.success){
                var newComments = post.comments;
                newComments = [...post.comments, data.comment]
                post.comments = newComments
                setPost(post)
                setComment('')
                setTimeout(() => {
                    scrollViewRef.current.scrollToEnd({animated: true})
                }, 100)
                
            }
                
            }
        )
    }
    const CheckRead = () => {
        api.postRead({id: post.id})
        .then(response => response.data)
        .then(data => {
            if (data.success) {
                Alert.alert("Checked!!!")
                setRead({text: 'Checked', hasRead: true})
            }
            else {
                
            }
        })
    }
    const ReadList =() => {
        navigation.navigate('ReadList', post);
    }

    return (
        <Container>
            <ScrollContainer ref={scrollViewRef}>
                <SubContainer>
                    <WriterContainer>
                        <View style={{flexDirection: "row"}}>
                            <WriterImageBox>
                                <WriterImage
                                source={{uri : post?.owner.picture}}
                                />
                            </WriterImageBox>
                            <WriterInfoBox>
                                <WriterInfoNameBox>
                                    <WriterInfoName>
                                        {post.owner.username}
                                    </WriterInfoName>

                                </WriterInfoNameBox>
                                <WriterInfoTimeBox>
                                    <WriterInfoTime>
                                        {date}
                                    </WriterInfoTime>
                                    <WriterInfoTime>
                                    {time}
                                    </WriterInfoTime>
                                </WriterInfoTimeBox>
                            </WriterInfoBox>
                        </View>
                        { 
                            post.check_read && post.owner.username !=  userInfo?.username &&
                            <ReadCheckBox onPress={() => CheckRead()} >
                                <ReadCheckText>{read.text}</ReadCheckText>
                            </ReadCheckBox>
                        }
                        {
                            post.owner.username ==  userInfo?.username &&
                            <ReadCheckBox onPress={() => ReadList()}>
                                <ReadCheckText>Check List</ReadCheckText>
                            </ReadCheckBox>
                        }
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
                        { post.images.length !== 0 &&
                        <BodyImageContainer>
                            {post.images.map((item, key) => {
                                return (
                                    <BodyImage source ={{uri: item.image}}/>
                                )
                            })
                        }
                        </BodyImageContainer>
                        }
                    </BodyContainer>
                    <CommentContainer>
                        {post.comments && post.comments.map((item,key) => {
                            return (
                                <Comment>
                                    <CommentUserContainer>
                                        <CommentImageBox>
                                            <CommentImage
                                            source={{uri : item.owner.picture}}
                                            />
                                        </CommentImageBox>
                                        <CommentInfoBox>
                                            <CommentNameBox>
                                                <CommentName>
                                                    {item.owner.username}
                                                </CommentName>
                                            </CommentNameBox>
                                        </CommentInfoBox>
                                    </CommentUserContainer>
                                    <CommentBox>
                                        <CommentText>
                                        {item.content}
                                        </CommentText>
                                    </CommentBox>
                                    </Comment>
                            )
                        })}
                    </CommentContainer>
                </SubContainer>
            </ScrollContainer>
            <Footer>
                <CommentInput onChangeText = {(text) => setComment(text)} value={comment}/>
                <SendImageContainer onPress={() => {
                    if(comment.length!==0){
                    sendComment()
                    }
                    else{
                        Alert.alert('No Text!')
                    }
                    }}>
                <SendImage source={require('~/Assets/Images/send.png')}/>
                </SendImageContainer>
            </Footer>

        </Container>
       
    );
};

export default Read;