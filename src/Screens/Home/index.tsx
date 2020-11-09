import React, {useContext, useLayoutEffect, useEffect} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';



import {UserContext} from '~/Context/User';
import IconButton from '~/Components/IconButton';
import { DrawerActions } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<HomeNaviParamList, 'DDHome'>;

interface Props {
  navigation: NavigationProp;
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #5F89FA;
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

    useEffect(() => {
        SplashScreen.hide();
      }, []);

    //   useLayoutEffect(()=>{
    //     console.log("aa")
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <IconButton
    //                 iconName="menu"
    //                 onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}
    //             />
    //         ),
    //     });
    // },[]);
      

    return (
      <Container>
          <HomeView>
            <HomeText>
              탭, 슬라이드 시 드로어
            </HomeText>
        </HomeView>
      </Container> 
       
    );
};

export default DDHome;
