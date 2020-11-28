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
import BottomSheet from '~/Components/BottomSheet';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
border-radius: 100px;
border: 2px;
border-color : ${constants.PRIMARY};
resize-mode:center
`;
const BubbleTouch = Styled.TouchableOpacity`
`;

const CalendarContainer = Styled.View`
  width : 400px;
  height : auto;
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
  border-radius : 20px;
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
  margin-bottom : 15px;
  text-align : center;
`;







const Calendars =  ({navigation } : Props) => {
    
    const [marked,setMarked] = useState<any>('');
    const [datelist,setDatelist] = useState<Array<String>>([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [title,setTitle] = useState<String>('');
    const [content,setContent] = useState<String>('');
    const [circlename,setCirclename] = useState<String>('');
    


    const [scheduleSelected,setScheduleSelected]  = useState<circleSchedules>();
    let  myschdule : Array<String> =  [];
    

    const {changeToCircle,isCircle,circleChosen,ISchedule} =useContext<ICircleContext>(CircleContext);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    

    useEffect(()=>{
        DatelistProvider();
    },[])
      
    
    const DatelistProvider = (name = '') => {
      console.warn(name);
      setCirclename(name);
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
              console.warn(todayschedule[i])
           }
          }
        });
        showModal();
    }
    
    const [showModal , hideModal] = useModal(() => {

      return (
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
                {scheduleSelected?.datetime.split('T')[0]}
                
              </ModalText>
              <ModalText>
              {scheduleSelected?.datetime.split('T')[1]}
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
    )
    }, [scheduleSelected])






      const showDatePicker = () => {
          setDatePickerVisibility(true);
        
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = async (date : any) => {
        let new_date = JSON.stringify(date);
        let day = new_date.split('T')[0];
        var new_day = day.replace(/\"/g,'');
        let prev_time = new_date.split('T')[1];
        let time = prev_time.split('.')[0];
        let daytime = new_day + " " +time;
        if(circlename !== '')
        {
          await api.postSchedule({
            circle : circlename,
            title : title,
            content : content,
            datetime : daytime
          }).then((response)=>{
            console.warn(response.data)
            return response.data
          }).then((data)=>{
            if (data.success) {
              console.warn('Post successful')
          }
          else {
              console.warn('Post failed')
          }
          })
          hideDatePicker();
        }
        else {
          setTimeout(()=>{
            Alert.alert('please choose circle!');
            
          },1000)
          
          hideDatePicker();
        }
        
      }
    


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
            onPress={()=>{DatelistProvider(item.name);}}
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

       

      
      
      <Input style={{marginBottom:16}} placeholder="title" onChangeText={text => setTitle(text)} clearMode/>
        <Input style={{marginBottom:16}} placeholder="content" onChangeText={text => setContent(text)} clearMode/>  
        <ButtonContainer>
        <Button label="Add Schedule"  onPress={showDatePicker} />
        </ButtonContainer>   
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              locale="en"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              headerTextIOS="Pick a date and time"
            />
            
      </Container> 
       
    );
};

export default Calendars;


