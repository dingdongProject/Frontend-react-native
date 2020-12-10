import React from 'react';
import {Dimensions} from 'react-native';
import Styled from 'styled-components/native';
import constants from '~/Constants/constants'

const Container = Styled.TouchableOpacity``;
const BubbleImage = Styled.Image`
margin-right : 8px;
width: 100px;
height: 100px;  
border-radius: 50px;
border: 2px;
border-color : #000000;
resize-mode:center
`;

const BubbleselectedImage = Styled.Image`
margin-right : 8px;
width: 100px;
height: 100px;   
border-radius: 100px;
border: 2px;
border-color : ${constants.PRIMARY};
resize-mode:center
`;


interface Props {
  image: string;
  onPress?: () => void;
  chosen?: boolean;
  indexs?: number;
}



const Bubbles = ({image, onPress, chosen ,indexs} : Props) => {
  

  return (
    <Container
    onPress={onPress}
    >
      {
        
        chosen ?
        <BubbleselectedImage
        source={{uri: image}}
      />
      :
      <BubbleImage
        source={{uri: image}}
      />
      }
      
    </Container>
  );
};

export default Bubbles;