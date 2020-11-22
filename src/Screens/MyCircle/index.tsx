import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import { FlatList } from 'react-native-gesture-handler';
import {CircleContext} from '~/Context/Circle';

import {UserContext} from '~/Context/User';
import {Dimensions} from 'react-native';
import NoticeBox from '~/Components/NoticeBox';
import Constants from '~/Constants/constants';
import IconIcon from '~/Components/IconButton'
import IconButton from '~/Components/IconButton';
import AddBoard from '../AddBoard';
import api from '~/Api/api';
import Loading from '~/Components/Loading';

//notice 수평 플랫리스트
//board 는 플랫리스트 넘버링 & map
//gallery는 음..


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

//게시판
const BulleteinboardContainer=Styled.ScrollView`
flex : 1;

border : 0px;

`;
const BulleteinboardSubConatiner = Styled.View`
flex :1;
padding :25px;
align-items : flex-start;
`;

const BulleteinboardTitleContainer=Styled.View`
flex : 1;
align-items : flex-start;
width : 100%;
flex-direction: row;
border : 0px;
margin-bottom : 10px;
`;

const AddBoardContainer = Styled.View`
  height : auto;
  align-items : flex-start;
  padding : 0;
  border : 0px;
  margin-top : 2px;
  margin-left : 270px;
`;
const AddBoardTouch = Styled.TouchableOpacity``;
const AddBoardButton = Styled.Image`
`;

const BulleteinboardTitleText = Styled.Text`
font-size:20px;
text-align:left;
color: ${Constants.PRIMARY};
font-weight : bold;
`;
const BulleteinboardBodyContainer=Styled.View`
  border:1px solid #ccc;
    border-radius:10px;
    box-shadow:0 0 0px #ccc;
    background-color:#f4f4f4;
    justify-content : space-between;
    flex-direction: column;
    align-items : flex-start;
    padding : 20px;
    margin-right : 0px;
    width :  ${windowWidth *0.855}px;
`;//터쳐블로 바꿔야함

const BulletinboardItemContainer=Styled.TouchableOpacity`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const BulletinboardItemIcon=Styled.Image`
  width: 15px;
  height: 15px;
`

const BulleteinboardBodyText=Styled.Text`
font-size:15px;
text-align:left;
color: ${Constants.TEXT1};
margin: 5px;
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

type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation: NavigationProp;
}


const MyCirlce =  ({navigation} : Props) => {
  const {userInfo,circleInfo} = useContext<IUserContext>(UserContext);
  const {circleChosen, setMainPage, circleBoards} = useContext<ICircleContext>(CircleContext);

  useEffect(() => {
    setMainPage();
  }, []);

    

    return(
        <Container>
            <SubContainer>
                <NoticeBox
                item={'a'}
                title={'b'}
                />
                <BulleteinboardContainer>
                  <BulleteinboardSubConatiner>
                  <BulleteinboardTitleContainer>
                    <BulleteinboardTitleText>
                    Board
                    </BulleteinboardTitleText>
                    <AddBoardContainer>
                      <AddBoardTouch
                      onPress={()=>navigation.navigate("AddBoard")}
                      >
                        <AddBoardButton
                        source={require('~/Assets/Images/add_circle.png')}
                        />
                      </AddBoardTouch>
                    

                    </AddBoardContainer>
                    
                    
                  </BulleteinboardTitleContainer>
                  
                  <BulleteinboardBodyContainer>  
                  {
                    circleBoards? circleBoards.map((board, key) => {
                      return (
                        <BulletinboardItemContainer onPress={() => {
                          if(board!==undefined)
                          navigation.navigate('BulleteinBoard', board);
                        }}>
                          <BulletinboardItemIcon source={require('~/Assets/Images/blur_circle.png')}></BulletinboardItemIcon>
                          <BulleteinboardBodyText>
                            {board.name}
                          </BulleteinboardBodyText>
                        </BulletinboardItemContainer>
                      )
                    })
                    : ''
                  } 
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