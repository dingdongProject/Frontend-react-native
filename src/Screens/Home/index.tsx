import React,{useContext, useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';

import NoticeBox from '~/Components/NoticeBox';
import { UserContext } from '~/Context/User';
import constants from '~/Constants/constants';
import NewsBox from '~/Components/NewsBox';

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
    height : ${windowHeight * 0.3}; 

`;
const NoticeBodyTitleBox = Styled.View`
    flex : 1;
    flex-direction: row;
    align-content : flex-start;
    border-bottom-width : 0px;
    margin-top : 0px;
    margin-bottom : 20px;
    margin-left : 5px;
    margin-right : 50px;
    border : 0px;
    
`;

const NoticeTitleImage = Styled.Image`
    margin-right : 10px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 0.5px;
    border-color : ${constants.PRIMARY};
    resize-mode:center
`;

const NoticeBodyTitle=Styled.Text`
font-size:20px;
font-weight : bold;
text-align:center;
color:${Constants.TEXT1};
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
type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation: NavigationProp;
}


const DDHome = ({item,title}:Props) => {
    const {circleInfo} = useContext<IUserContext>(UserContext);
                    
    return(
                <Container>
                <SubContainer>
                <NoticeBox/>
                <NewsBox
                title={'News'}
                />
            </SubContainer>
        </Container>
        
    )

}
export default DDHome;


