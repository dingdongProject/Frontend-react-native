import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import {FlatList,Modal,View,Text} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import CalendarPicker from 'react-native-calendar-picker';
import constants from '~/Constants/constants';
import Modals from '~/Components/Modal';
import Bubbles from '~/Components/Bubbles';
import Read from '../Read';

type NavigationProp = StackNavigationProp<TotalNaviParamList>;

interface Props {
  navigation?: NavigationProp;

}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  flex-direction : column;
`;


const BubbleContainer = Styled.View`
  width : 400px;
  height : 200px;
  padding : 25px;
  border : 0px;
  flex-direction : row;
`;
//추후 수평 플랫리스트로 구현.

const BubbleBox = Styled.View`
  width : 100px;
  height : 100px;
  margin-right : 20px;
  padding : 0px;
  border : 0px;
`;

const Bubble = Styled.Image`
margin-right : 8px;
width: 100px;
height: 100px;   
border-radius: 100;
border: 2px;
border-color : ${constants.PRIMARY};
resize-mode:center
`;
const BubbleTouch = Styled.TouchableOpacity`
`;

const CalendarContainer = Styled.View`
  width : 400px;
  height : 500px;
  border : 0px;
  padding : 25px;
`;
const CalendarText = Styled.Text`

`;





const Calendar =  ({navigation } : Props) => {
    const minDate =  new Date(2017,11,8);
    const maxDate = new Date(2022,11,8);
    // const [selectedStartDate,setSelectedStartDate] = useState<any>(null);
    // const startDate = selectedStartDate? selectedStartDate : null;
    const {circleInfo} = useContext<IUserContext>(UserContext)
    const [data, setData] = useState<Array<ICircleInfo | undefined>>([]);
    const [selectedDate,setSelectedDate] = useState('');
    const {circleChosen,changeToCircle} =useContext<ICircleContext>(CircleContext);
    const [flag,setFlag] = useState<boolean>(false);
    const [modal,setModal] = useState<boolean>(false)

    useEffect(()=>{
      setData(circleInfo)
    },[])
      
    const onDateChange = (date : any) =>{
      setFlag(true)
      let datestring = date.toString();
      setSelectedDate(datestring);
    }
    const handleModal = () => {
      setModal(modal? false : true);
    }

    


    return (
      <Container>
        <BubbleContainer>
              <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `circle-${index}`;
        }}
        renderItem={({item, index}) => (
          <Bubbles
            image={(item as ICircleInfo).picture}
          />
        )}
      />

        </BubbleContainer>
        <CalendarContainer>
          <CalendarText>
          <CalendarPicker
              minDate={minDate}
              maxDate={maxDate}
              
              
              
              weekdays={['일','월','화','수','목','금','토']}
              months={['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']}
              textStyle={{
                color : constants.TEXT1,
              }}
              selectedDayColor={constants.PRIMARY}
              onDateChange={onDateChange}
              
              
              
              
              />
              
              
              
              </CalendarText>
        </CalendarContainer>
          
              
            
      </Container> 
       
    );
};

export default Calendar;