import React,{useContext, useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';

import NoticeList from '~/Components/NoticeList';
import { UserContext } from '~/Context/User';
import constants from '~/Constants/constants';
import { CircleContext } from '~/Context/Circle';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const NoticeContainer = Styled.View`
    flex : 1;
    align-items : flex-start;
    margin : 25px;
    border-bottom-width : 0px;
    border-bottom-color : ${Constants.TEXT2};
    padding-bottom : 40px;
`;
const NoticeTitleBox = Styled.View`
    flex : 1;
    border-bottom-width : 0px;
    margin-bottom : 10px;
`;


const NoticeTitle=Styled.Text`
font-size:20px;
text-align:left;
color: ${Constants.PRIMARY};
font-weight : bold;

`;
const NoticeBodyBox = Styled.TouchableOpacity`
    border:1px solid #ccc;
    border-radius:10px;
    border-bottom-width : 2px;
    box-shadow:0 0 0px #ccc;
    background-color:#fff;
    justify-content : space-between;
    flex-direction: column;
    align-items : flex-start;
    padding : 20px;
    margin-right : 10px;
    width :  ${windowWidth *0.855};
    height : ${windowHeight * 0.25}; 

`;
const NoticeBodyTitleBox = Styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom : 20px;
    margin-left : 5px;
    margin-right : 50px;
    height: 18px;
    
`;

const NoticeTitleImage = Styled.Image`
    margin-right : 10px;
    width: 30px;
    height: 30px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;

const NoticeBodyTitle=Styled.Text`
font-size:18px;
font-weight : bold;
color:${Constants.TEXT1};
line-height: 18px;
`;
const NoticeBodyBodyBox = Styled.View`
    flex : 9
    margin-left : 10px;
`;
const NoticeBodyBody=Styled.Text`
font-size:15px;
text-align:left;
color:${Constants.TEXT2};
margin-bottom : 0px;
`;

const NoticeFooter = Styled.View`
    width: 100%; 
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
`


const NoticeFooterText = Styled.Text`
    margin-left: 10px;
    color: ${constants.TEXT3}
`;
const NoticeFooterImage = Styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const NoPostsBox = Styled.View`
    margin: 20px 0;
    margin-left: 10px;
    width: 350px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;
const NoPostText =  Styled.Text`
    text-align: center;
    width: 350px;
    height: 100px;
    line-height: 100px;
    justify-content: center;
    font-weight: bold;
    color: ${constants.TEXT2}
    border: 1px solid #ccc;
    border-radius: 20px;
`



const NoticeBox = () => {
    const {circleInfo, noticeMain} = useContext<IUserContext>(UserContext);
    const {isCircle, circleNotices} = useContext<ICircleContext>(CircleContext);
    const navigation = useNavigation();

    const Item = ({notice}:any) => (
            
            <NoticeBodyBox onPress={()=> {
                console.warn(notice)
                navigation.navigate('Read', notice);
                
            }}>
                <NoticeBodyTitleBox>
                        <NoticeTitleImage source={{ uri: notice.owner.picture }} />   
                     <NoticeBodyTitle>{notice.title}</NoticeBodyTitle>
                </NoticeBodyTitleBox>
                <NoticeBodyBodyBox>
                        <NoticeBodyBody>{notice.content}</NoticeBodyBody>
                </NoticeBodyBodyBox>
                {
                    <NoticeFooter>
                        <NoticeFooterImage source={{ uri: notice.circle.picture }} />   
                        <NoticeFooterText>{notice.circle.name}</NoticeFooterText>
                    </NoticeFooter>
                }
            </NoticeBodyBox>
                    
                
       
    )

    const renderItem = ({item,index}:any)=> (
        <Item notice={item}/>
    )

    

    return(
        
                <NoticeContainer>
                <NoticeTitleBox>
                    <NoticeTitle>Notice</NoticeTitle>    
                </NoticeTitleBox>         
                {
                    isCircle && circleNotices.length === 0 && (
                    <NoPostsBox>
                        <NoPostText>No Posts Yet!</NoPostText>
                    </NoPostsBox>
                )   
                }
                {
                    !isCircle && noticeMain.length === 0 && (
                    <NoPostsBox>
                        <NoPostText>No Posts Yet!</NoPostText>
                    </NoPostsBox>
                )   
                }
                <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={isCircle? circleNotices: noticeMain}
                
                renderItem={renderItem}
                keyExtractor={item => item.content
                }
                />

                </NoticeContainer>
               
    )
}

export default NoticeBox;

            