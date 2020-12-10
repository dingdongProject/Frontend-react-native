import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import {FlatList,Modal,View,Text, Alert} from 'react-native';
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
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';


import api from '~/Api/api';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

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
  height : auto;
  padding : 25px;
  padding-top : 10px;
  border : 0px;
  flex-direction : row;
`;


const CalendarContainer = Styled.View`
  width : 400px;
  height : auto;
  border : 0px;
  padding : 25px;
`;


const MContainer = Styled.View`
  justify-content : center;
  align-items : center;
  flex: 1;
`;
const ModalContainer = Styled.View`
  margin : 0px;
  width: 60%;
  background-color : white;
  border-radius : 20px;
  padding : 35px;
  shadow-color : #000;
  border-width : 1px;
  border-color : ${constants.PRIMARY}

`;

const ButtonContainer = Styled.TouchableOpacity`
  background-color : ${constants.PRIMARY};
  border-radius : 15px;
  padding : 10px;

`;

const MainText =Styled.Text`
  color : white;
  font-weight : bold;
  text-align : center;
`;
const ModalText = Styled.Text`
  margin-bottom : 10px;
`;
const ModalTextTitle = Styled.Text`
  margin-bottom : 10px;
  color: ${constants.PRIMARY}
  font-weight: bold;
`;



const Calendars =  ({navigation } : Props) => {
    
    const [marked,setMarked] = useState<any>('');
    const [datelist,setDatelist] = useState<Array<String>>([]);
    
    


    const [scheduleSelected,setScheduleSelected]  = useState<circleSchedules>();
    let  myschdule : Array<String> =  [];
    
    

    const {changeToCircle,isCircle,circleChosen,ISchedule} =useContext<ICircleContext>(CircleContext);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    const [circleList, setCircleList] = useState([{name: '', picture: 'https://dingdong-bucket.s3.ap-northeast-2.amazonaws.com/all.png'}, ...circleInfo]);
    
    

    useEffect(()=>{
        DatelistProvider();
    },[ISchedule])
      
    
    const DatelistProvider = (name = '') => {
      ISchedule.forEach((item)=>{
        var schedulelist = item.scheduleList
        var split;
        if (name !== '') {
          if (item.circle === name) {
            for (let i=0; i< item.scheduleList.length; i++){
              split = schedulelist[i].datetime.split('T')[0]
              myschdule.push(split)
            }
            setDatelist(myschdule);
            var obj= myschdule.reduce((c,v)=>Object.assign(c,{[v.toString()]: {marked : true}}),{});
            setMarked(obj);
          }
          return;
        }
        for(let i=0; i<item.scheduleList.length; i++){
          split = schedulelist[i].datetime.split('T')[0]
          myschdule.push(split)
        }
      })
      setDatelist(myschdule);
      var obj= myschdule.reduce((c,v)=>Object.assign(c,{[v.toString()]: {marked : true}}),{});
      setMarked(obj);
    }

    const selectSchedule = (day : any) => {
      var daystring = JSON.stringify(day.dateString);
      var new_daystring = daystring.replace(/\"/g,'');
      ISchedule.forEach((item)=>{
        var todayschedule = item.scheduleList
        for(let i=0; i<todayschedule.length; i++){
          var todayDate = todayschedule[i].datetime.split('T')[0];
           if(todayDate === new_daystring){
              setScheduleSelected(todayschedule[i])
              showModal();
           }
          }
        });
        
    }
    
    const [showModal , hideModal] = useModal(() => {

      return (
      <Modal
        animationType="slide"
        transparent={true}
      >
        <MContainer>
          <ModalContainer> 
              <ModalTextTitle>
                {scheduleSelected?.title}
              </ModalTextTitle>
              <ModalText>
                {scheduleSelected?.content}
              </ModalText>
              <ModalText>
                {scheduleSelected?.datetime.split('T')[0]} {scheduleSelected?.datetime.split('T')[1]}
                
              </ModalText>
              <ButtonContainer
              onPress={hideModal}
              >
                <MainText>
                close
                </MainText>
              </ButtonContainer>
          </ModalContainer>
        </MContainer>
      </Modal>
    )
    }, [scheduleSelected])



      
    


    return (
      <Container>
        
        <BubbleContainer>
              <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={circleList}
        keyExtractor={(item, index) => {
          return `circle-${index}`;
        }}
        renderItem={({item, index}) => (
           
          <Bubbles
            image={(item as ICircleInfo).picture}
            onPress={()=>{DatelistProvider(item.name);}}
            chosen={true}
          />
          
        )}
      />
      </BubbleContainer>
      
        <CalendarContainer>
            <Calendar
                  onDayPress={(day) => {selectSchedule(day);}}
                  markedDates={marked}
                  style={{
                    backgroundColor : '#f4f4f4'
                    
                  }}
                  theme={{
                    backgroundColor : '#f4f4f4',
                    calendarBackground : '#f4f4f4'
                  }}
                  />
              

        </CalendarContainer>  
            
            
      </Container> 
       
    );
};

export default Calendars;


