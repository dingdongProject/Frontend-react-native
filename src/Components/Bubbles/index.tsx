import React from 'react';
import {Dimensions} from 'react-native';
import Styled from 'styled-components/native';
import constants from '~/Constants/constants'

const Container = Styled.TouchableOpacity``;
const CatalogImage = Styled.Image`
margin-right : 8px;
width: 100px;
height: 100px;   
border-radius: 100;
border: 2px;
border-color : ${constants.PRIMARY};
resize-mode:center
`;
const InfoContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: flex-start;
`;
const LabelYear = Styled.Text`
  background-color: #E70915;
  color: #FFFFFF;
  padding: 4px 8px;
  margin-left: 4px;
  margin-bottom: 4px;
  font-weight: bold;
  border-radius: 4px;
`;
const SubInfoContainer = Styled.View`
`;
const Background = Styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #141414;
  opacity: 0.9;
`;
const LabelTitle = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 8px 16px 4px 16px;
`;
const LabelGenres = Styled.Text`
  font-size: 12px;
  color: #FFFFFF;
  padding: 4px 16px 8px 16px;
`;

interface Props {
  image: string;
  onPress?: () => void;
}

const Bubbles = ({image, onPress}: Props) => {
  return (
    <Container>
      <CatalogImage
        source={{uri: image}}
      />
    </Container>
  );
};

export default Bubbles;