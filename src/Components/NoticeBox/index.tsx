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
const NoticeBodyBox = Styled.View`
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
    flex : 1;
    flex-direction: row;
    align-items: center;
    margin-bottom : 20px;
    margin-left : 5px;
    margin-right : 50px;
    
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

interface Props {
    item : string;
    title : string;
}


const NoticeBox = ({item,title}:Props) => {
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const {isCircle, circleNotices} = useContext<ICircleContext>(CircleContext);
    // const data = [
    //     {
    //         title : '테크노경영학',
    //         content : 'b1'
    //     },
    //     {
    //         title : 'sadads',
    //         content : 'b2'
    //     },
    //     {
    //         title : '테크노경영학',
    //         content : 'b3'
    //     },
    //     {
    //         title : '테크노경영학',
    //         content : 'b4'
    //     }
    // ]
    const data = circleNotices;

    const Item = ({notice}:any) => (
       
            <NoticeBodyBox>
                <NoticeBodyTitleBox>
                        <NoticeTitleImage source={{ uri: 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg' }} />   
                    {/* <NoticeTitleImage source={{uri: circle.picture ? circle.picture : 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg'}}/>
                     <NoticeBodyTitle>{title}</NoticeBodyTitle> */}
                     <NoticeBodyTitle>{notice.title}</NoticeBodyTitle>
                </NoticeBodyTitleBox>
                <NoticeBodyBodyBox>
                        <NoticeBodyBody>{notice.content}</NoticeBodyBody>
                </NoticeBodyBodyBox>
            </NoticeBodyBox>
                    
                
       
    )

    const renderItem = ({item,index}:any)=> (
        <Item notice={item} />
    )

    

    return(
        
                <NoticeContainer>
                <NoticeTitleBox>
                    <NoticeTitle>Notice</NoticeTitle>    
                </NoticeTitleBox>            
                <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={isCircle? circleNotices: data}
                
                renderItem={renderItem}
                keyExtractor={item => item.content
                }
                />

                </NoticeContainer>
               
    )
}

export default NoticeBox;

            