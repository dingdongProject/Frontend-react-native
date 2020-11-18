import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import constants from '~/Constants/constants';
import IconButton from '~/Components/IconButton';

type NavigationProp = StackNavigationProp<CirclesNaviParamList, 'Circles'>;

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
  border : 0px;
  width : 350px;
  height : 50px;
  background-color : ${constants.PRIMARY}
  border-radius : 10;
  flex-direction : row;
  
`;
const SearchImageBox = Styled.View`
  width : auto;
  height : 50px;
  border : 0px;
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

`;

const CirclesContainer = Styled.View`
border : 0px;
width : 350px;
  height : 500px;
  border-top-width : 0.5px;
`;
const CirclesBox = Styled.View`
  border-bottom-width : 0.5px;
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
  
  margin-bottom: 0px;
  width: 50px;
  height: 50px;
  border-radius: 10;
  border: 0.5px;
  border-color : ${constants.PRIMARY};

`;

const CircleInfoBox = Styled.View`
border : 0px;
width : 300px;
height : 50px;
flex-direction : column;
`;
const CircleNameBox = Styled.View`
  border : 0px;
  width : 300px;
  height : 30px;
  padding : 4px;
`;
const CircleName = Styled.Text`
  font-weight : bold;
  font-size : 20;
  color : ${constants.TEXT1}
`;

const CircleTagBox = Styled.View`
border : 0px;
width : 300px;
height : 20px;
padding : 3px;
margin-left : 3px;
`;

const CircleTag = Styled.Text`

font-size : 10;
color : ${constants.PRIMARY}
`;

const PageNumContainer = Styled.View`
border : 0px;
width : 350px;
  height : 50px;
`;




const Circles =  ({navigation } : Props) => {
  const {circleInfo} = useContext<IUserContext>(UserContext);



    return (
      <Container>
        <SubConatiner>
        <SearchConatainer>
          
          <SearchBox
            style={{
              borderWidth : 0,
              height : 50,
              width : 300,
              padding : 20,
              paddingTop : 15,
          }}
          multiline = {true}
          numberOfLines={4}
          placeholder={'검색'}
          placeholderTextColor={constants.TEXT1}
          />
          <SearchImageBox>
            <IconButton
            iconName='search'
            />
          </SearchImageBox>

        </SearchConatainer>

        <TagContainer>
          <TagText>
            #안녕
          </TagText>
          <TagText>
            #안졍
          </TagText>

        </TagContainer>
        <CirclesContainer>
          <CirclesBox>
            <CircleImageBox>
              <CircleImage
              source={{uri:constants.DEFAULT_USER_IMG}}
              />

            </CircleImageBox>
            <CircleInfoBox>
              <CircleNameBox>
                <CircleName>
                  안녕안졍
                </CircleName>

              </CircleNameBox>
              <CircleTagBox>
                <CircleTag>
                  #볼빨기 #사촌간
                </CircleTag>

              </CircleTagBox>

            </CircleInfoBox>
            

          </CirclesBox>
          <CirclesBox>
            <CircleImageBox>
              <CircleImage
              source={{uri:constants.DEFAULT_USER_IMG}}
              />

            </CircleImageBox>
            <CircleInfoBox>
              <CircleNameBox>
                <CircleName>
                  안녕안졍
                </CircleName>

              </CircleNameBox>
              <CircleTagBox>
                <CircleTag>
                  #볼빨기 #사촌간
                </CircleTag>

              </CircleTagBox>

            </CircleInfoBox>
            

          </CirclesBox>
          <CirclesBox>
            <CircleImageBox>
              <CircleImage
              source={{uri:constants.DEFAULT_USER_IMG}}
              />

            </CircleImageBox>
            <CircleInfoBox>
              <CircleNameBox>
                <CircleName>
                  안녕안졍
                </CircleName>

              </CircleNameBox>
              <CircleTagBox>
                <CircleTag>
                  #볼빨기 #사촌간
                </CircleTag>

              </CircleTagBox>

            </CircleInfoBox>
            

          </CirclesBox>

        </CirclesContainer>
        <PageNumContainer>

        </PageNumContainer>
        </SubConatiner>
          
      </Container> 
       
    );
};

export default Circles;