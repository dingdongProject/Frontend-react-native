import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import MyPageEdit from '~/Screens/MyPageEdit';

type NavigationProp = StackNavigationProp<MyPageEditNaviParamList, 'MyPageEdit'>;


interface Props {
  navigation: NavigationProp;
  
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const HomeView = Styled.View`
    align-items : center;
`;

const HomeText = Styled.Text`
    align-items : center;
    color : black;
`;

const Button = Styled.TouchableHighlight`
    padding : 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction : row;
    align-items : center;
    `;

const Icon = Styled.Image`
    margin-right : 8px;
`;


const Mypage =  ({navigation } : Props) => {
  const [myuser, setMyuser] = useState<IUserInfo>();
  



  
    
    useEffect(() => {
      SplashScreen.hide();
    }, []);
      
     
      

    return (
      <Container>
          <HomeView>
            <HomeText>
              mypage
              
              
            </HomeText>
            
              <ButtonContainer>
                <IconButton iconName = 'menu'
                onPress={()=>{navigation.navigate("MyPageEdit")}}
                />
              </ButtonContainer>
            
        </HomeView>
      </Container> 
       
    );
};

export default Mypage;