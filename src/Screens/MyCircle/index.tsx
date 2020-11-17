import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { FlatList } from 'react-native-gesture-handler';


import {UserContext} from '~/Context/User';
import {Dimensions} from 'react-native';
import Constants from '~/Constants/constants';
type NavigationProp = StackNavigationProp<GalleryNaviParamList, 'Gallery'>;

interface Props {
  navigation: NavigationProp;
}

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
    margin-bottom : 0px;
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
    width :  ${windowWidth *0.855}px;
    height : ${windowHeight * 0.3}px; 

`;
const NoticeBodyTitleBox = Styled.View`
    flex : 1;
    flex-direction: row;
    align-content : flex-start;
    border-bottom-width : 0px;
    margin-top : 0px;
    margin-bottom : 20px;
    margin-left : 10px;
    margin-right : 44px;
    border : 0px;
    
`;

const NoticeTitleImage = Styled.Image`
    margin-right : 10px;
    width: 30px;
    height: 30px;
    border-radius: 100;
    border: 0.5px;
    border-color : ${Constants.PRIMARY};
    resize-mode:center
`;

const NoticeBodyTitle=Styled.Text`
font-size:20px;
font-weight : bold;
text-align:left;
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


//게시판
const BulleteinboardContainer=Styled.ScrollView`
flex : 1;

border : 0px;

`;
const BulleteinboardSubConatiner = Styled.View`
flex :1;
padding : 25px;
align-items : flex-start;
`;
const BulleteinboardTitleContainer=Styled.View`
flex : 1;
align-items : flex-start;
border-bottom-width : 0px;
margin-bottom : 10px;
`;

const BulleteinboardTitleText = Styled.Text`
font-size:20px;
text-align:left;
color: ${Constants.PRIMARY};
font-weight : bold;
`;
const BulleteinboardBodyContainer=Styled.View`
  border:0px solid #ccc;
    border-radius:10px;
    border-bottom-width : 0px;
    box-shadow:0 0 0px #ccc;
    background-color:#f4f4f4;
    justify-content : space-between;
    flex-direction: column;
    align-items : flex-start;
    padding : 20px;
    margin-right : 0px;
    width :  ${windowWidth *0.855}px;
    height : ${windowHeight * 0.3}px; 
`;//터쳐블로 바꿔야함
const BulleteinboardBodyText=Styled.Text`
font-size:15px;
text-align:left;
color: ${Constants.TEXT2};
`;


//갤러리
const GalleryContainer = Styled.View`
flex : 1;
    padding : 25px;
    align-items : flex-start;

`;
const GalleryTitleBox = Styled.View`
    flex : 1;
    border-bottom-width : 0px;
    margin-bottom : 10px;
`;
const GalleryTitle=Styled.Text`
font-size:20px;
text-align:left;
color: ${Constants.PRIMARY};
font-weight : bold;

`;
const GalleryTouch = Styled.TouchableOpacity`
  flex :1;
`;


const Gallerybox = Styled.View`
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
const Galleryproto = Styled.Image`
resize-mode:center;
`;


interface Props {
  item : string;
  title : string;
}

const MyCirlce =  ({navigation,item,title } : Props) => {
  const {userInfo,circleInfo} = useContext<IUserContext>(UserContext);
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
                <BulleteinboardContainer>
                  <BulleteinboardSubConatiner>
                  <BulleteinboardTitleContainer>
                    <BulleteinboardTitleText>
                    Board
                    </BulleteinboardTitleText>
                  </BulleteinboardTitleContainer>
                  <BulleteinboardBodyContainer>
                    <BulleteinboardBodyText>
                    @애니동호회1
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회2
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회3
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회4
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회5
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회6
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회7
                    </BulleteinboardBodyText>
                    <BulleteinboardBodyText>
                    @애니동호회8
                    </BulleteinboardBodyText>
                  </BulleteinboardBodyContainer>
                  </BulleteinboardSubConatiner>
                </BulleteinboardContainer>
                <GalleryContainer>
                  <GalleryTitleBox>
                    <GalleryTitle>
                      Gallery
                    </GalleryTitle>
                  </GalleryTitleBox>
                  <GalleryTouch 
                  onPress={()=>{navigation.navigate('Gallery')}}
                  >

                  <Gallerybox>
                    <Galleryproto
                    source={{uri: 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/1593075284.jpg'}}
                    />
                    
                    
                  </Gallerybox>
                  </GalleryTouch>
                </GalleryContainer>

                </SubContainer>
                </Container>
    )

              }

export default MyCirlce;