import React, {useContext, useLayoutEffect, useEffect, useState, useRef} from 'react';
import Styled from 'styled-components/native';
import {TextInput, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import Input from '~/Components/Input';
import constants from '~/Constants/constants';
import {RouteProp} from '@react-navigation/native';
import api from '~/Api/api';


type NavigationProp = StackNavigationProp<MyCircleNaviParamList>;
type ReadScreenRouteProp = RouteProp<ReadNaviParamList, "post">;

interface Props {
  navigation: NavigationProp;
  route: ReadScreenRouteProp;
}

const Container = Styled.SafeAreaView`
  flex : 1;
  background-color: #f4f4f4;
`;
const ScrollContainer = Styled.ScrollView`
    height: 95%;
`;
const Item = Styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
`;
const Image = Styled.Image`
  margin-right : 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0.5px;
  border-color : ${constants.PRIMARY};
  resize-mode:center
  
`
const UserText = Styled.Text`

`;




const ReadList =  ({route, navigation } : Props) => {
    const {userInfo} = useContext<IUserContext>(UserContext)
    const [post, setPost] = useState<IPostInfo>(route.params);
    const [readList, setReadList] = useState([]);

    useEffect(() => {
      getList();
    }, [])

    const getList = () => {
      api.getReadList({id: post.id})
      .then(response => response.data)
      .then(data => {
        if (data.success) {
          setReadList(data.list);
        } 
        else {
         
        }
      })
    }
    return (
        <Container>
            <ScrollContainer>
              {
                readList.map((item, key) => (
                  <View>
                    <Item>
                      <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <Image source={{uri: item.user.picture}}></Image>
                        <UserText>{item.user.username}</UserText>
                      </View>
                      <UserText
                        style={item.hasRead ? {color: constants.PRIMARY} : {color: '#f66'}}
                      >{item.hasRead? 'Read': 'Not Yet'}</UserText>
                    </Item>
                  </View>
                ))
              }
            </ScrollContainer>
        </Container>
       
    );
};

export default ReadList;