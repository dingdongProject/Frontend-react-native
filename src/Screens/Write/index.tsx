import React, {useContext, useLayoutEffect, useEffect,useState} from 'react';
import Styled, {ThemeProvider} from 'styled-components/native';
import {TextInput, Text,  Platform, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import {UserContext} from '~/Context/User';
import { onChange } from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';


import Input from '~/Components/Input';
import Button from '~/Components/Button';
import constants from '~/Constants/constants';
import api from '~/Api/api';
import {RouteProp} from '@react-navigation/native';


type NavigationProp = StackNavigationProp<MyCircleNaviParamList>;
type BoardScreenRouteProp = RouteProp<BoardNaviParamList, "board">;

interface Props {
    navigation: NavigationProp;
    route: BoardScreenRouteProp;
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

const FuncBox = Styled.View`
    margin-left: 30%;
    width: 70%;
`;
const FuncFlex = Styled.View`
    flex-direction : row;
    justify-content: flex-end;
`;
const FunctionBox = Styled.TouchableOpacity`
    margin: 6px;
    padding : 3px;
    border : 1px solid ${constants.PRIMARY};
    border-radius: 12px;  
    flex:1;
    justify-content: center;   
    background: ${props => (props.selected ?  `${constants.PRIMARY}`: 'white')};
`;
const FuncText = Styled.Text`
    font-weight : bold;
    text-align: center;
    font-size: 11px;    
    color: ${props => (props.selected ? 'white': `${constants.PRIMARY}` )};
`;

const BodyContainer = Styled.View`
    align-items : center;
    margin-top: 10px;
    margin-bottom: 32px;
    width : 100%;
    height: auto;
    justify-content : center;   
`

const FooterTouch = Styled.TouchableOpacity`

`;
const Footer = Styled.View`

    border : 0px;
    margin-top : 20px;
    width : auto;
    height : 30px;
    align-items : center;
`;
const FooterText = Styled.Text`
    font-weight : bold;
    text-align : right;
    color : ${constants.PRIMARY}
`; 

const ImageList = Styled.View`
margin-top: 10px;
width: 100%;
flex-direction: row;
justify-content: flex-end;
height: 70px;
background: white;
align-items: center;
border-width: 1px;
border-color: #D3D3D3;
border-radius: 4px;
`;
const ImageView = Styled.Image`
width: 20%;
height: 69px;
`;


interface Image {
    uri: string | undefined;
    name: string | undefined;
    type: string;
}

const Write =  ({route, navigation } : Props) => {
    const [Images,onChangeImages] =useState<Array<Image>>([])
    const [title, onChangeTitle] = useState('')
    const [content, onChangeContent] = useState('')

    const [functions, setFunctions] = useState([
        {name: "Check Read", chosen: false},
        {name: "Vote", chosen: false},
        {name: "Ladder Game", chosen: false},
        {name: "Add Images", chosen: false}
    ])

    const getImages = async () => { 
        ImagePicker.openPicker({
            multiple: true,
            cropping: false,
          }).then(images => {
            const new_images : Array<Image> = []
            images.map((item,key) => {
                new_images.push({uri: item.sourceURL, name: item.filename, type: 'image/png'})
            })
            onChangeImages(new_images);
            let newFunc = [...functions];
            newFunc[3].chosen = true;
            setFunctions(newFunc)
        }).catch( () => {
            let newFunc = [...functions];
            newFunc[3].chosen = false;
            setFunctions(newFunc)
            onChangeImages([]);
        })
    }

    const toggleChosen = (key: number) => {
        if (key == 3) {
            getImages();
        }
        else {
            let newFunc = [...functions];
            newFunc[key].chosen = !newFunc[key].chosen
            setFunctions(newFunc)
        }
        
    }

    const setForm = () => {
        var form = new FormData();
        let formImageFiles = Images
        formImageFiles.map((item, key) => {
            item.uri = Platform.OS === "android" ? item.uri : item.uri!.replace("file://", "")
        })
        
        form.append('title', title)
        form.append('content', content)
        form.append('check_read', functions[0].chosen)
        formImageFiles.forEach((item, i) => {
            form.append('images[]', item)
        });
        form.append('Content-Type', 'image/png');
        return form;
    }

    const sendPost = () => {
        api.postPost({
            id: route.params.id,
            form: setForm()
        }).then(response => response.data)
        .then(data => {
            console.warn(data)
            navigation.navigate('BulleteinBoard', {post: data.post})
        })
    }



    return (    
      <Container>
          <SubContainer>
              <FuncBox>
                  <FuncFlex>
              {functions.map((item,key) => {
                  return (
                    <FunctionBox
                    onPress={() => {toggleChosen(key)}}
                    selected={item.chosen}
                    >
                        <FuncText selected={item.chosen}>
                            {item.name}
                        </FuncText>
                    </FunctionBox>
                  )
              })
              }
              </FuncFlex>
              </FuncBox>
              
              <BodyContainer>
                
              <Input
                style={{marginBottom:32, height: 40 }}
                    placeholder={'Title'}
                    onChangeText={text=>onChangeTitle(text)}
                    />
                <Input
                    style={{height: 400 }}
                    multi
                    placeholder={'Content'}
                    onChangeText={text=>onChangeContent(text)}
                />
                {Images.length !== 0 &&
                    <ImageList>
                        {Images.map((item) => {
                            return (
                            <ImageView source={{uri: item.uri}}></ImageView>
                            )
                        })
                    }
                    </ImageList>
                }
              </BodyContainer>
              
              <Button
              label="post" 
              onPress ={ ()=> {
                  if(title.length !==0 && content.length !==0){
                  sendPost();
                  navigation.pop();
                  }
                  else if(title.length ===0){
                      Alert.alert('Please Input Title!')
                  }
                  else if(content.length ===0){
                    Alert.alert('Please Input Content!')
                }
              }}
              />
          </SubContainer>
          
      </Container> 
       
    );
};

export default Write;