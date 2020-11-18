import React,{useContext, useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'

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
const Newsproto = Styled.Text`
font-size:20px;
text-align:left;
color:#212529;
margin-bottom : 0px;
`;

interface Props{
    title : string
}

const NewsBox = ({title}:Props) => {
    return(
        <NewsContainer>
                    <NewsTitleBox>
    <NewsTitle>{title}</NewsTitle>
                    </NewsTitleBox>

                <Newsbox>
                    <Newsproto></Newsproto>
                </Newsbox>

                <Newsbox>
                <Newsproto></Newsproto>
                </Newsbox>

                <Newsbox>
                <Newsproto></Newsproto>
                </Newsbox>
                </NewsContainer>
    )
}

export default NewsBox;