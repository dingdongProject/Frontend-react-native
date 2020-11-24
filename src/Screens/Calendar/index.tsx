import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import {FlatList,Modal,View,Text,Button} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
import CalendarPicker from 'react-native-calendar-picker';
import constants from '~/Constants/constants';
import { ModalContext, ModalContextType, useModal } from 'react-native-use-modal-hooks';
import Bubbles from '~/Components/Bubbles';
import Read from '../Read';
import BottomSheet from '~/Components/BottomSheet';

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

const MContainer = Styled.View`
  flex : 1;
  justify-content : center;
  align-items : center;
  margin-top : 0;
`;
const ModalContainer = Styled.View`
  margin : 0px;
  background-color : white;
  border-radius : 20;
  padding : 35px;
  align-items : center;
  shadow-color : #000;

`;

const ButtonContainer = Styled.TouchableOpacity`
  background-color : ${constants.PRIMARY};
  border-radius : 20;
  padding : 10px;

`;

const MainText =Styled.Text`
  color : white;
  font-weight : bold;
  text-align : center;
`;
const ModalText = Styled.Text`
  margin-bottom : 15;
  text-align : center;
`;







const Calendar =  ({navigation } : Props) => {
    const minDate =  new Date(2017,11,8);
    const maxDate = new Date(2022,11,8);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    const [data, setData] = useState<Array<ICircleInfo | undefined>>([]);
    const [selectedDate,setSelectedDate] = useState<string>('');
    const {circleChosen,changeToCircle} =useContext<ICircleContext>(CircleContext);
    
    // const {showModal,hideModal} =useContext<ModalContextType>(ModalContext)
    

    useEffect(()=>{
      setData(circleInfo)
    },[])
      
    const  onDateChange = async (date : any) =>{
      let datestring = date.toString();
      setSelectedDate(datestring)
      showModal()
    }

    const [showModal, hideModal] = useModal(() => (
      <Modal
        animationType="slide"
        transparent={true}
      >
        <MContainer>
          <ModalContainer>
            <ModalText>
                동아리 스케쥴
            </ModalText>
            <ButtonContainer
              onPress={hideModal}
            >
              <MainText>
              cancel
              </MainText>
            </ButtonContainer>
          </ModalContainer>
        </MContainer>
      </Modal>
    ))

    


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



