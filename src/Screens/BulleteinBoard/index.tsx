import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';
import constants from '~/Constants/constants';
import {RouteProp, NavigationProp, useFocusEffect} from '@react-navigation/native';
import api from '~/Api/api'

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  
`;

const SubContainer = Styled.View`
  flex : 1;
  width  : 410px;
  height : auto;
  border : 0px;
  padding : 10px;
`;
const ScrollContainer = Styled.ScrollView`
    flex :1;
`;
const ReadBox = Styled.TouchableOpacity`
`;
const BulleteinMainContainer = Styled.View`
    flex : 1;
    flex-direction : row;
    justify-content: space-between;
    border-bottom-width : 0.5px;
    margin: 0 5px;
`;
const BulleteinContainer = Styled.View`
    height : auto;
    border : 0px;
    max-width: 70%;
`;

const BulleteinTitleBox = Styled.View`
    height : auto;
    border : 0px;
    padding : 0px;
    padding-top : 10px;
`;
const BulleteinTitleText = Styled.Text`
    color : ${constants.PRIMARY};
    font-weight : bold;
    font-size : 20px;
`;
const BulleteinBodyBox =Styled.View`
    height : 40px;
    padding-top : 5px;
    border : 0px;
`;
const BulleteinBodyText = Styled.Text`
    color : ${constants.TEXT1};
    font-size : 12px;
    
`;
const BulleteinCommentBox = Styled.View`
    height : auto;
    padding-top : 5px;
    padding-bottom : 5px;
    border : 0px;
`;
const BulleteinCommentText = Styled.Text`
    color : ${constants.TEXT2};
    font-size : 10px;
`;
const BulleteinImageBox = Styled.View`
    width : 100px;
    height : 100px;
    border : 0px;
    margin: 5px 0;
`;

const BulleteinImage = Styled.Image`
    width : 100px;
    height : 100px;
    resize-mode:center;
    border-radius: 15px;
`;
const FooterTouch = Styled.TouchableOpacity`
    align-items : center;
`
const Footer = Styled.View`
    border-radius : 20px;
    background-color : ${constants.PRIMARY}
    width : 100px;
    height : 45px;
    bottom : 20;
    position : absolute;
    padding : 5px;
    display: flex;
    justify-content: center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : center;
    font-size : 15px;   
    color : white;
`; 


const BulleteinBoard =  ({route, navigation } : any) => {
  const [myuser, setMyuser] = useState<IUserInfo>();
  const [postList, setPostList] = useState<Array<IPostInfo>>([]);
  const {userInfo,tokenInfo} = useContext<IUserContext>(UserContext);

  const getBoardPosts = async (id: number) => {
    await api.getPosts({id: id})
    .then(response => response.data)
    .then((data) => {
        if (data.success) {
            setPostList(data.post);
        }
        
    })
}


  useEffect(() => {
    
    if (route.params.post) {
        setPostList([route.params.post, ...postList]);
    }
    else {
        getBoardPosts(route.params.id);
    }
    


  }, [route.params]);


    return (
      <Container>
          <ScrollContainer>
          <SubContainer>
            {postList !== [] && postList.map((item, key) => {
                if (item === undefined) return
                var date, time;
                if (item.created){
                    date = item.created.split('T')[0]
                    time = item.created.split('T')[1].slice(0, 8)
                }
                return  (
                    <ReadBox
                onPress={()=>{
                    navigation.navigate('Read', item)
                }}
                >
                <BulleteinMainContainer>
                    <BulleteinContainer>
                        <BulleteinTitleBox>
                            <BulleteinTitleText>
                                {item.title}
                            </BulleteinTitleText>
                        </BulleteinTitleBox>
                        <BulleteinBodyBox>
                            <BulleteinBodyText>
                            {item.content}
                            </BulleteinBodyText>
                        </BulleteinBodyBox>
                        <BulleteinCommentBox>
                            <BulleteinCommentText>
                                {item.owner.username} · {item.created ? date : ''} {time? time : ''}
                            </BulleteinCommentText>
                        </BulleteinCommentBox>
                    </BulleteinContainer>
                    { item.images.length !== 0 &&
                    <BulleteinImageBox>
                        <BulleteinImage
                        source={{uri : item.images[0].image}}
                        />
                    </BulleteinImageBox>
                    }
                </BulleteinMainContainer>
                </ReadBox>
                )
            })
        }


                </SubContainer>
            </ScrollContainer>
            <FooterTouch
                onPress={()=>{
                    navigation.navigate('Write', {id: route.params.id});
                }}
                >
            <Footer>
                <FooterText>
                    Write
                </FooterText>
            </Footer>
            </FooterTouch>
          
          
      </Container>
       
    );
};

export default BulleteinBoard;