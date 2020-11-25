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
    
    const [data, setData] = useState<Array<ICircleInfo | undefined>>([]);
    const [selected,setSelected] = useState(['']);
    

    const {changeToCircle,circleSchedule,circleDate} =useContext<ICircleContext>(CircleContext);
    const {circleInfo} = useContext<IUserContext>(UserContext)
    const [circleSche,setCircleSche] = useState<Array<String>>([]);
    // const {showModal,hideModal} =useContext<ModalContextType>(ModalContext)
    

    useEffect(()=>{
      setData(circleInfo)
      // getall();
      
      
    },[])
      
        
  //  const getall = async ()=> {
  //    circleInfo.map(async (name)=>{
  //     await api.getSchedule({name : name.name})
  //     .then((response)=>response.data)
  //     .then((data)=>{
  //       setCircleSche(data.schedules)
  //     })
  //     console.warn(circleSche);
  //     // .then(()=>{
  //     //   circleSche.map((datetime)=>{
  //     //     var date
  //     //     // if (datetime.datetime){
  //     //     //   date = datetime.datetime.split('T')[0]
  //     //     }
  //     //   })
  //     // })
  //    })
    
  //  }


    const CheckMark = () => {
      var strdate = circleDate.toString();
      setSelected([strdate,...selected]);
      console.warn(selected);
      
    }

    const onDayPress = (day : any) => {
      var str1 = selected[0];
      var str2 = day.dateString;
      console.warn('s',selected)
      console.warn('t',selected[0])
      
      if(str1 === str2)
      { 
        return (
        true
        )
      }
    }


    const [showModal, hideModal] = useModal(() => (
      
      <Modal
        animationType="slide"
        transparent={true}
      >
        <MContainer>
          <ModalContainer>
            {
             circleSchedule.map((item, key)=>{
                 
                return(
                  <ModalText>
                {item.title}
                {item.content}
                  </ModalText>
                   
                )
               
              })
            }
            
            
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
            onPress={()=>{changeToCircle(true, index); CheckMark(); }}
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
                  onDayPress={(day) => {onDayPress(day)? showModal() : hideModal()}}

                  markedDates={{
                      
                      [selected[0]] : {
                        marked : true
                      }
                  }}
                  />
              

        </CalendarContainer>
        
              
            
      </Container> 
       
    );
};

export default Calendars;



