import React,{useState} from 'react';
import Styled from 'styled-components/native';
import constants from '~/Constants/constants';
import {StackNavigationProp} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';

import IconButton from '~/Components/IconButton';



const Container = Styled.SafeAreaView`
    flex : 1
    background-color:#f4f4f4;
    justify-content : space-between;
    flex-direction: column;
    
`;

const SubContainer = Styled.ScrollView`
    flex : 1;
    
`;


const GalleryContainer = Styled.View`
flex : 1;
    padding : 25px;
    align-items : flex-start;

`;
const GalleryBox = Styled.View`
flex : 1;
flex-direction : row;
`;
const GalleryTitleBox = Styled.View`
    flex : 1;
    border-bottom-width : 0px;
    margin-bottom : 10px;
    
    border : 0px;
`;
const GalleryTitle=Styled.Text`
font-size:20px;
text-align:left;
color: ${constants.PRIMARY};
font-weight : bold;

`;

const Gallerybox = Styled.View`
flex:9;
border:1px solid #ccc;
margin:2px;
margin-bottom : 10px;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
padding:10px;
width : 350px;
height : 250px;
`;
const Galleryproto = Styled.Image`
width : 100%;
height : 100px;
resize-mode:center;
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
                    <GalleryContainer>
                        <GalleryBox>
                        <GalleryTitleBox>
                            <GalleryTitle>
                                Gallery
                            </GalleryTitle>
                           
                        </GalleryTitleBox>
                        <IconButton iconName = 'upload'
                        onPress={()=>{addImage()}}
                        />
                        </GalleryBox>
                        
                        
                        
                        <Gallerybox>
                            <Galleryproto source={{uri: Avatar}}/>

                        </Gallerybox>
                    </GalleryContainer>
                </SubContainer>
            </Container>
        )


}

export default Gallery

