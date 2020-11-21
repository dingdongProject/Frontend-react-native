import React, { useEffect, useState } from "react";

import {Modal} from "react-native";
import { Text } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.SafeAreaView`
  flex : 1;
  align-items : center;
`;
const SubContainer = Styled.View`
  flex : 1;
  align-items: center;
  border : 0px;
`;

const ModalContainer = Styled.View`
  width: 200px;
  height: 100px;
  background-color: #000000;
  border : 1px;
  border-radius: 1px;
`;


const StyledModalOpenButton = Styled.TouchableOpacity`
  
`;
const ModalCloseBox = Styled.View`
  flex : 1;
  border : 1px;
`;
const ModalCloeseButtonText = Styled.Text`
  color : white;
  font-size : 30;
`

const StyledModalOutputText = Styled.Text`
  color: black;
  font-size: 30px;
`;

interface Props{
  flag : boolean;
  date : string;
}

const Modals = ({date,flag}:Props) => { //선택한 날짜 프롭스 계승할 것
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  console.warn(modalVisible);
  const HandleModal = () => {
    setModalVisible(modalVisible ? false : true)
  }

  return (
    
      <Container>
        <SubContainer>
      <Modal
      animationType="slide"
        transparent={true}
        visible={!modalVisible}
      > 
      <ModalContainer>
      </ModalContainer>
      <StyledModalOpenButton
        onPress={() => {
          HandleModal;
          
        }}
      >
        <ModalCloeseButtonText>
          닫기
        </ModalCloeseButtonText>
        </StyledModalOpenButton>
      </Modal>
      </SubContainer>
      </Container>
    
  );
};
export default Modals;