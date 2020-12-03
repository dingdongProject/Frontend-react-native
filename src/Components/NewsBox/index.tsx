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
    padding : 25px;
    align-items : flex-start;

`;
const NewsTitleBox = Styled.View`
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

margin:2px;
margin-bottom : 10px;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
padding: 15px 25px;
width : 350px;
min-height : 200px;
justify-content: space-between;
`;
const NewsContent = Styled.Text`
font-size:16px;
text-align:left;
color: ${constants.TEXT2};
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
const NewsTitleImage = Styled.Image`
    margin-right : 10px;
    width: 30px;
    height: 30px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;
const TitleBox = Styled.View`
flex-direction: row;
margin-bottom: 10px;
`;
const NewsFooter = Styled.View`
    bottom: 0px;
    width: 100%; 
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
`


const NewsFooterText = Styled.Text`
    margin-left: 10px;
    color: ${constants.TEXT3}
`;
const NewsFooterImage = Styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
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
                        <View>
                        <TitleBox>
                        <NewsTitleImage source={{uri: item.owner.picture}}></NewsTitleImage>
                        <NewsContentTitle>{item.title}</NewsContentTitle>
                        </TitleBox>
                        <NewsContent>{item.content}</NewsContent>
                        {
                            item.images && item.images.length !== 0  && item.images.map((image,key) => (
                                <PostImages source={{uri: image.image}}/>
                            ))

                        }
                        </View>
                        <NewsFooter>
                            <NewsFooterImage source={{ uri: circleInfo[0].picture }} />   
                            <NewsFooterText>{circleInfo[0].name}</NewsFooterText>
                        </NewsFooter>
                    </Newsbox>
                ))
            }
            
        </NewsContainer>
    )
}

export default NewsBox;