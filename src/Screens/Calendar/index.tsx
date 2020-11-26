import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import {FlatList,Modal,View,Text,Button} from 'react-native';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import {CircleContext} from '~/Context/Circle';
// import CalendarPicker from 'react-native-calendar-picker';
import constants from '~/Constants/constants';
import { ModalContext, ModalContextType, useModal } from 'react-native-use-modal-hooks';
import Bubbles from '~/Components/Bubbles';
import Read from '../Read';
import BottomSheet from '~/Components/BottomSheet';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';

import api from '~/Api/api';

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







const Calendars =  ({navigation } : Props) => {
    const minDate =  new Date(2017,11,8);
    const maxDate = new Date(2022,11,8);
    
    const [marked,setMarked] = useState<any>('');
    const [datelist,setDatelist] = useState<Array<String>>([]);
    const [scheduleSelected,setScheduleSelected]  = useState<circleSchedules>();
    let  myschdule : Array<String> =  [];
    

    const {changeToCircle,circleSchedule,ISchedule} =useContext<ICircleContext>(CircleContext);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    

    useEffect(()=>{
        
        DatelistProvider();
    },[])
      
    
    const DatelistProvider = () => {
        ISchedule.forEach((item)=>{
          var schedulelist = item.scheduleList
          var split;
          
          for(let i=0; i<item.scheduleList.length; i++){
            split = schedulelist[i].datetime.split('T')[0]
            myschdule.push(split)
          }
        })
        setDatelist(myschdule);

        markedDateProvider();
        
    }
  
    const markedDateProvider = () => {
        var obj= datelist.reduce((c,v)=>Object.assign(c,{[v.toString()]: {marked : true}}),{});
        setMarked(obj);
    }



    const selectSchedule = (day : any) => {
      var daystring = JSON.stringify(day.dateString);
      var new_daystring = daystring.replace(/\"/g,'');
      ISchedule.map((item)=>{
        var todayschedule = item.scheduleList
        for(let i=0; i<todayschedule.length; i++){
          var todayDate = todayschedule[i].datetime.split('T')[0];
           if(todayDate === new_daystring){
              setScheduleSelected(todayschedule[i])
              console.warn(todayschedule[i])
           }
          }
        });
        setTimeout(()=>{showModal()},1000);
        
        
       
      
    }
    
    
    const [showModal , hideModal] = useModal(() => (
      
      <Modal
        animationType="slide"
        transparent={true}
      >
        <MContainer>
          <ModalContainer> 
              <ModalText>
                {scheduleSelected?.title}
              </ModalText>
              <ModalText>
                {scheduleSelected?.content}
              </ModalText>
              <ModalText>
                {scheduleSelected?.datetime}
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
        data={circleInfo}
        keyExtractor={(item, index) => {
          return `circle-${index}`;
        }}
        renderItem={({item, index}) => (
          <Bubbles
            image={(item as ICircleInfo).picture}
            onPress={()=>{changeToCircle(true, index);  }}
          />
        )}
      />
      </BubbleContainer>


        
        <CalendarContainer>
          {/* <CalendarText>
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
              </CalendarText> */}
            {/* {
              myShedule !== undefined && myShedule.map((datetime)=>{
                if(datetime === undefined) return
                var date, time;
                if (datetime.created){
                    date = datetime.created.split('T')[0]
                    time = datetime.created.split('T')[1].slice(0, 8)
                }
                return(
                  console.warn(date)
                )

              })
            } */}
            <Calendar
                  onDayPress={(day) => {selectSchedule(day);}}
                  markedDates={marked}
                  />
              

        </CalendarContainer>
        
              
            
      </Container> 
       
    );
};

export default Calendars;



