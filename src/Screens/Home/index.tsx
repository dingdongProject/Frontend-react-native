import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';

type NavigationProp = StackNavigationProp<HomeNaviParamList, 'DDHome'>;

interface Props {
  navigation: NavigationProp;
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #cceaff;
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
const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

const DDHome =  ({navigation } : Props) => {
  const {logout} = useContext<IUserContext>(UserContext);

    useEffect(() => {
        SplashScreen.hide();
      }, []);

      useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <StyleButton
              onPress={() => {
                logout();
              }}>
              <Icon source={require('~/Assets/Images/ic_logout.png')} />
            </StyleButton>
          ),
        });
      }, []);

    return (
      <Container>
          <HomeView>
            <HomeText>
              1. 햄버거 바
              2. 탭 바
              3. 게시판
            </HomeText>
        </HomeView>
      </Container> 
       
    );
};

export default DDHome;
