import React,{useContext, useEffect, useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants';
import {Dimensions} from 'react-native'

import NoticeList from '~/Components/NoticeList';
import { UserContext } from '~/Context/User';
import constants from '~/Constants/constants';

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
    margin-left : 10px;
    border : 0px;
    
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


const Mainnotice = ({item,title}:Props) => {
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const data = [
        {
            title : '테크노경영학',
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
                        <NoticeTitleImage source={{ uri: 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg' }} />   
                    {/* <NoticeTitleImage source={{uri: circle.picture ? circle.picture : 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg'}}/>
                     <NoticeBodyTitle>{title}</NoticeBodyTitle> */}
                     <NoticeBodyTitle>{title}</NoticeBodyTitle>
                </NoticeBodyTitleBox>
                <NoticeBodyBodyBox>
                        <NoticeBodyBody>지난학기 새로운 변화에 혼란과 배움의 시간이었습니다.
이번학기는 zoom을 통한 화상수업을 학교에서 제공하게 되어 좀더 원활한 수업이 될 것 같습니다. 첫 날 시행착오가 있겠지만 실시간수업을 시도해보고자 합니다.

zoom 앱을 다운로드 하시기 바랍니다.
앞으로 실시간 수업은 아래 공지된 zoom 회의실을 활용할 것입니다.
아래 주소를 클릭하거나 zoom에서 회의번호와 암호를 입력해서 참여하실 수 있습니다.

주제: 테경-월1시 수업

Zoom 회의 참가
https://zoom.us/j/97079917004?pwd=Nnpmck4xNktuMzJyNlRvVUNVaXRCZz09

회의 ID: 970 7991 7004
암호: 10871

미리 zoom 테스트를 해보시 바랍니다. 자세한 사용법은 학교에서 제공하는 가이드를 참고하시기 바랍니다.</NoticeBodyBody>
                </NoticeBodyBodyBox>
            </NoticeBodyBox>
                    
                
       
    )

    const renderItem = ({item,index}:any)=> (
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
