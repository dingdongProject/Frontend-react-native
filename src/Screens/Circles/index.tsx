import React, {useState,useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import constants from '~/Constants/constants';
import IconButton from '~/Components/IconButton';
import { Image } from 'react-native';
import api from '~/Api/api';
import { useAsyncStorage } from '@react-native-community/async-storage';

type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation: NavigationProp;
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
`;
const SubConatiner = Styled.View`
  flex-direction : column;
  padding : 60px;
`;
const SearchConatainer = Styled.View`
  border : 1px;
  width : 340px;
  height : 50px;
  border:1px solid ${constants.PRIMARY}
  border-radius : 10px;
  flex-direction : row;
  background-color: white;
  
`;
const SearchImageBox = Styled.TouchableOpacity`
  width : auto;
  height : 50px;
  border : 0px;
  padding-right : 1px;
  justify-content: center;
`;

const SearchBox = Styled.TextInput`

`;

const TagContainer = Styled.View`
border : 0px;
width : 350px;
  height : 50px;
  padding : 10px;
  margin-bottom : 0px;
  flex-direction : row;
`;

const TagText = Styled.Text`
  color : ${constants.PRIMARY}
  margin-right: 10px;
`;

const CirclesContainer = Styled.ScrollView`
  border : 0px;
  width : 350px;
  height : 500px;

`;
const CirclesBox = Styled.TouchableOpacity`
  border: 0 solid ${constants.TEXT2};
  border-bottom-width: 0.5px;
  margin-top : 10px;
  width : 350px;
  height : 50px;
  flex-direction : row;
`;
const CircleImageBox = Styled.View`
   border : 0px;
   width : 50px;
   height : 50px;
   align-items : center;
   justify-content : center;
`;

const CircleImage = Styled.Image`
  
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10;
  border: 0.5px;
  border-color : ${constants.PRIMARY};
  

`;

const CircleInfoBox = Styled.View`
width : 300px;
flex-direction : column;
justify-content: center;
align-items: center;
margin-left: 5px;
`;
const CircleNameBox = Styled.View`
  border : 0px;
  width : 300px;
  padding : 4px;
`;
const CircleName = Styled.Text`
  font-weight : bold;
  font-size : 20;
  color : ${constants.PRIMARY}
`;

const CircleTagBox = Styled.View`
border : 0px;
width : 300px;
padding : 3px;
margin-left : 3px;
`;

const CircleTag = Styled.Text`

font-size : 10;
color : ${constants.TEXT2}
`;

const PageNumContainer = Styled.View`
border : 0px;
width : 350px;
  height : 50px;
`;

const ScrollContainer = Styled.ScrollView`
    flex :1;
`;


const Circles =  ({navigation } : Props) => {
  const {circleInfo} = useContext<IUserContext>(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const [circles, setCircles] = useState([])

  useEffect( () => {
    api.getCircleSearch({search: 'all'})
    .then((response) => response.data)
    .then((data) => {
      if (data.success) {
        setCircles(data.circles);
      }
      else {
        console.warn(data.message);
      }
    })
  }, [])

  const search= () => {
    api.getCircleSearch({search: searchInput})
    .then((response) => response.data)
    .then((data) => {
      if (data.success) {
        setCircles(data.circles);
        setSearchInput("all")
      }
      else {
        console.warn(data.message);
        setSearchInput("all")
      }
    })
  }


    return (
      <Container>
        <SubConatiner>
        <SearchConatainer>
          
          <SearchBox
            style={{
              borderWidth : 0,
              height : 50,
              width : 310,
              padding : 20,
              paddingTop : 15,
          }}
          multiline = {true}
          numberOfLines={4}
          placeholder={'Search'}
          placeholderTextColor={constants.TEXT1}
          onChangeText={(text) => setSearchInput(text)}
          clearButtonMode = 'while-editing'
          
          />
          <SearchImageBox
            onPress={() => {search()}}>
            <Image source={require('~/Assets/Images/search_black.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </SearchImageBox>
          <IconButton
          iconName ='cancel'
          onPress={()=>{
            search();
          }}
      
          />

        </SearchConatainer>

        <TagContainer>
          <TagText>
            #Sports
          </TagText>
          <TagText>
            #IT
          </TagText>

        </TagContainer>
        <CirclesContainer>
          {
            circles.length !== 0 && circles.map((item,key) => {
              return (
                <CirclesBox 
                onPress={() => {
                  navigation.navigate('CircleSearchInfo', item)
                }}>
                  <CircleImageBox>
                    <CircleImage
                    source={{uri:item.picture}}
                    />

                  </CircleImageBox>
                  <CircleInfoBox>
                    <CircleNameBox>
                      <CircleName>
                        {item.name}
                      </CircleName>

                    </CircleNameBox>
                    <CircleTagBox>
                      <CircleTag>
                        {item.tags}
                      </CircleTag>

                    </CircleTagBox>

                  </CircleInfoBox>
                  

                </CirclesBox>
              )
            })
          }
          
        </CirclesContainer>
        </SubConatiner>
          
      </Container> 
       
    );
};

export default Circles;