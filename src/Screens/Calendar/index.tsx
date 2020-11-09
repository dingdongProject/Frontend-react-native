import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';

import CalendarPicker from 'react-native-calendar-picker';
import Modals from '~/Components/Modal';

type NavigationProp = StackNavigationProp<CalendarNaviParamList, 'Calendar'>;

interface Props {
  navigation?: NavigationProp;
  date?:string;
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



const Calendar =  ({navigation } : Props) => {
    const minDate =  new Date();
    const maxDate = new Date(2022,11,8);
    
    
    useEffect(() => {
        SplashScreen.hide();
      }, []);
    


    return (
      <Container>
          <HomeView>
            <Modals/>
            <HomeText>
              <CalendarPicker
              minDate={minDate}
              maxDate={maxDate}
              
              weekdays={['일','월','화','수','목','금','토']}
              months={['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']}
              textStyle={{
                color : '#000000',
              }}
              selectedDayColor="#7300e6"
              
              
              
              />
              
              select : {}
            </HomeText>
        </HomeView>
      </Container> 
       
    );
};

export default Calendar;