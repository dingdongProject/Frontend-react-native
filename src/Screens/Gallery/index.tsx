import React,{useState} from 'react';
import Styled from 'styled-components/native';
import constants from '~/Constants/constants';
import {StackNavigationProp} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';

import IconButton from '~/Components/IconButton';
import NewsBox from '~/Components/NewsBox';




const Container = Styled.SafeAreaView`
    flex : 1;
    background-color:#f4f4f4;
    justify-content : space-between;
    flex-direction: column;
    align-items : center;
    
`;


const SubContainer = Styled.ScrollView`
    flex : 1;
    border : 0px;
    
`;
const MainContainer = Styled.View`
    flex : 1;
    align-items : center;
`;

const Footer = Styled.View`
    width : auto;
    height : auto;
    border : 0px;
    position : absolute;
    top : 650;
`;

type NavigationProp = StackNavigationProp<GalleryNaviParamList, 'Gallery'>;

interface Props {
  navigation: NavigationProp;
}

const Gallery = ({navigation} : Props) => {
        const [Avatar,setAvatar] = useState('')

        const addImage = () => {
            ImagePicker.showImagePicker({
                takePhotoButtonTitle : '사진찍기',
                chooseFromLibraryButtonTitle : '앨범에서 고르기',
                cancelButtonTitle : '취소'
            },response=>{
                setAvatar(response.uri)
                console.log(response.uri)
            })
        }
        

        return(
            <Container>
                

                
                <SubContainer>
                <MainContainer>
                    <NewsBox
                    title={'Gallery'}
                    />
                    
                </MainContainer> 
                </SubContainer>
                
                <Footer>
                <IconButton iconName = 'upload'
                        onPress={()=>{addImage()}}
                        />
                </Footer>
                
                
                
            </Container>
        )


}

export default Gallery

