import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled, {ThemeProvider} from 'styled-components/native';
import {FlatList, TextInput, Text,  Platform,Alert, View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-crop-picker';

import Bubbles from '~/Components/Bubbles';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import constants from '~/Constants/constants';
import api from '~/Api/api';
import {RouteProp} from '@react-navigation/native';
import {UserContext} from '~/Context/User';
import { CircleContext } from '~/Context/Circle';


type NavigationProp = StackNavigationProp<CalendarNaviParamList>;
type CalendarScreenRouteProp = RouteProp<CalendarNaviParamList,"Calendar">;

interface Props {
    navigation: NavigationProp;
    route: CalendarScreenRouteProp;
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #f4f4f4;
`;

const SubContainer = Styled.View`
    flex :1;
    border : 0px;
    align-items : center;
    justify-content : center;
    padding : 32px;
    padding-top: 0px;
`;
const SelectCircleContainer = Styled.ScrollView`
    width : 400px;
    height : 100px;
    border : 0px;
`

const BodyContainer = Styled.View`

    align-items : center;
    margin-top: 10px;
    margin-bottom: 32px;
    width : 100%;
    height: auto;
    justify-content : center;   
    border : 0px;
`

const DateContainer = Styled.View`
width: 100%;
height: 50px;
padding : 10px;
padding-left: 16px;
padding-right: 16px;
border-radius: 4px;
background-color: #FAFAFA;
border-width: 1px;
border-color: #D3D3D3;
`

const DateText2 = Styled.Text`
font-size : 11px;
font-style = italic;
color: #C3C2C8;
`
const DateText1 = Styled.Text`
font-size : 11px;
font-style = italic;
color: #292929;
`

const ButtonContainer = Styled.View`
    width : 95%;
    border : 0px;
    height : 100px;

`
const BubbleContainer = Styled.View`
  width : 400px;
  height : auto;
  padding : 25px;
  padding-top : 10px;
  border : 0px;
  flex-direction : row;
`;
interface ICircleList {
  name: string;
  picture: string;
  chosen : boolean;
}

const AddSchedule =  ({route, navigation } : Props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [circlename,setCirclename] = useState<string>('');
    const [title,setTitle] = useState<string>('');
    const [content,setContent] = useState<string>('');
    const [datetime,setDatetime] = useState<string>('')
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const {setSchedule} = useContext<ICircleContext>(CircleContext);
    const [cirlceList, setCircleList] = useState<Array<ICircleList>>([]);

    useEffect( ()=> {
      var newCircles:Array<ICircleList> = []
      circleInfo.forEach((item) => {
        if (item.isAdmin) {
          var circle = {name:item.name, picture:item.picture, chosen: false}
          newCircles.push(circle);
        }
      })

      setCircleList(newCircles);
    }, [])
    

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: any) => {
      var copiedDate = new Date(date);
      copiedDate.setHours(copiedDate.getHours() + 9);
      let new_date = JSON.stringify(copiedDate);
      let day = new_date.split('T')[0];
      var new_day = day.replace(/\"/g,'');
      let prev_time = new_date.split('T')[1];
      let time = prev_time.split('.')[0];
      let daytime = new_day + " " +time;
      setDatetime(daytime);

      hideDatePicker();
        
      
    }


    const PostSchedule = async () => {
      if(circlename === '' || datetime === '' )
      {
          if(circlename === '')
          setTimeout(()=>{
              Alert.alert('please choose circle!');
              
            },100)
          else if(datetime === ''){
              setTimeout(()=>{
                  Alert.alert('please choose Date and Time!');
                  
                },100)
          }
          return;

      }
        
        await api.postSchedule({
          circle : circlename,
          title : title,
          content : content,
          datetime : datetime
        }).then((response)=>{
          return response.data
        }).then((data)=>{
          if (data.success) {
            setSchedule({circle: circlename, scheduleList:[data.schedules]})
        }
        else {
            console.warn(data.message);
        }
        navigation.pop()
        })
    }
    const selectItem= (name: string) =>{
      setCirclename(name);
      var new_circles = cirlceList;
      new_circles.forEach((item) => {
        if (item.name === name)
          item.chosen = true;
        else
          item.chosen = false
      })
    }

    return (
      <Container>
          <SubContainer>
              <SelectCircleContainer>
                <BubbleContainer>
                  <FlatList
                    horizontal={true}
                    pagingEnabled={true}
                    data={cirlceList}
                    keyExtractor={(item, index) => {
                      return `circle-${index}`;
                    }}
                    renderItem={({item, index}) => (
                      <Bubbles
                        image={(item as ICircleList).picture}
                        onPress={()=>{selectItem(item.name)}}
                        chosen = {item.chosen}
                      />
                    )}
                    />
                </BubbleContainer>
              </SelectCircleContainer>
              <BodyContainer>
              <Input
                style={{marginBottom:32, height: 40 }}
                    placeholder={'Title'}
                    onChangeText={text=>setTitle(text)}
                    />
                <Input
                    style={{marginBottom : 16, height: 300 }}
                    multi
                    placeholder={'Content'}
                    onChangeText={text=>setContent(text)}
                />
                <DateContainer>
                    {
                        datetime !== ''?
                        <DateText1>
                            Date : {" "} 
                            {datetime.split(' ')[0]}
                            {"\n"}
                            Time : {" "}
                            {datetime.split(' ')[1]}
                        </DateText1>
                       :
                       <DateText2>
                           Select Date and Time.
                       </DateText2>
                    }
                </DateContainer>
              </BodyContainer>
              <ButtonContainer>
                    <Button label = "Select Date and Time" style={{marginBottom : 16}} onPress={showDatePicker}/>
                    <Button label = "Add Schedule" onPress={()=>{PostSchedule(); }} />
              </ButtonContainer>
              <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              headerTextIOS="Pick a date and time"
            />
              
          </SubContainer>
          
      </Container> 
       
    );
};

export default AddSchedule;