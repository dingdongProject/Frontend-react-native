import React,{useContext, useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'
import { UserContext } from '~/Context/User';
import constants from '~/Constants/constants';
import { CircleContext } from '~/Context/Circle';

const NewsContainer = Styled.View`
    flex : 1;
    padding : 25px;
    align-items : flex-start;

`;
const NewsTitleBox = Styled.View`
    flex : 1;
    border-bottom-width : 0px;
    margin-bottom : 10px;
`;
const NewsTitle=Styled.Text`
font-size:20px;
text-align:left;
color: ${Constants.PRIMARY};
font-weight : bold;

`;

const Newsbox = Styled.View`
flex:9;
border:1px solid #ccc;
margin:2px;
margin-bottom : 10px;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
padding:10px;
width : 350px;
height : 250px;
`;
const NewsContent = Styled.Text`
font-size:16px;
text-align:left;
color: ${constants.TEXT1};
margin-bottom : 0px;
`;
const NewsContentTitle = Styled.Text`
font-size:20px;
text-align:left;
color: ${constants.TEXT1};
margin-bottom : 0px;
font-weight : bold;
`;

const PostImages = Styled.Image`
max-width : 350px;
height : 200px;
resize-mode:center;
`;

interface Props{
    title : string
}

const NewsBox = ({title}:Props) => {
    const {circleInfo, newsMain} = useContext<IUserContext>(UserContext);
    return(
        <NewsContainer>
            <NewsTitleBox>
                <NewsTitle>{title}</NewsTitle>
            </NewsTitleBox>
            {
                newsMain.map((item,key)=> (
                    <Newsbox>
                        <NewsContentTitle>{item.title}</NewsContentTitle>
                        <NewsContent>{item.content}</NewsContent>
                        {
                            item.images && item.images.length !== 0  && item.images.map((image,key) => (
                                <PostImages source={{uri: image.image}}/>
                            ))

                        }
                    </Newsbox>
                ))
            }
        </NewsContainer>
    )
}

export default NewsBox;