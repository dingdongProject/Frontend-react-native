import React,{useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'

import NoticeList from '~/Components/NoticeList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = Styled.SafeAreaView`
    flex : 1
    background-color:#f4f4f4;
    justify-content : space-between;
    flex-direction: column;
    
`;

const SubContainer = Styled.ScrollView`
    flex : 1;
    
`;

const NoticeContainer = Styled.View`
    flex : 1;
    align-items : flex-start;
    padding: 25px;

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
    border-radius:15px;
    box-shadow:0 0 10px #ccc;
    background-color:#fff;
    justify-content : space-between;
    flex-direction: column;
    align-items : flex-start
    width :  ${windowWidth -50};
    height : ${windowHeight * 0.2}; 

`;
const NoticeBodyTitleBox = Styled.View`
    flex : 1;
    border-bottom-width : 1px;
    margin-bottom : 5px;
    margin-left : 10px;
    
`;
const NoticeBodyTitle=Styled.Text`
font-size:20px;
font-weight : bold;
text-align:left;
color:#212529;
margin-bottom : 0px;
`;
const NoticeBodyBodyBox = Styled.View`
    flex : 9
    margin-left : 10px;
`;
const NoticeBodyBody=Styled.Text`
font-size:20px;
text-align:left;
color:#212529;
margin-bottom : 0px;
`;

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

interface Props {
    item : string;
    title : string;
}


const Mainnotice = ({item,title}:Props) => {
    const data = [
        {
            title : '디자인 연습입니다',
            body : 'b1'
        },
        {
            title : '디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.디자인 언습입니다.',
            body : 'b2'
        },
        {
            title : 'a3',
            body : 'b3'
        },
        {
            title : 'a4',
            body : 'b4'
        }
    ]

    const Item = ({title}:any) => (
       
            <NoticeBodyBox>
                <NoticeBodyTitleBox>
                     <NoticeBodyTitle>{title}</NoticeBodyTitle>
                </NoticeBodyTitleBox>
                <NoticeBodyBodyBox>
                        <NoticeBodyBody>오우 정말 신기하군요?</NoticeBodyBody>
                </NoticeBodyBodyBox>
            </NoticeBodyBox>
                    
                
       
    )

    const renderItem = ({item}:any)=> (
        <Item title={item.title} />
    )

    

    return(
        <Container>
            <SubContainer>
                <NoticeContainer>
                <NoticeTitleBox>
                    <NoticeTitle>Notice</NoticeTitle>    
                </NoticeTitleBox>            
                <FlatList
                horizontal={true}
                pagingEnabled={true}
                data={data}
                
                renderItem={renderItem}
                keyExtractor={item => item.body
                    
                }
                />

                </NoticeContainer>
                <NewsContainer>
                    <NewsTitleBox>
                        <NewsTitle>News</NewsTitle>
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
            </SubContainer>
        </Container>
        
    )

}
export default Mainnotice;
