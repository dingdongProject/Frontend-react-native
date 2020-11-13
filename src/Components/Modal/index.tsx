import React, { useState } from "react";

import Modal from "react-native-modal";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: 320px;
  height: 220px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const StyledModalButton = styled.TouchableOpacity`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const StyledModalGradeWrapper = styled.View`
  flex: 1;
  width: 320px;
  justify-content: center;
`;

const StyledModalGradeText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const StyledModalText = styled.Text`
  align-self: center;
  color: blue;
  font-size: 15px;
`;

const HorizentalLine = styled.View`
  background-color: black;
  height: 1px;
  align-self: stretch;
`;

const StyledModalOpenButton = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
`;

const StyledModalOutputText = styled.Text`
  color: black;
  font-size: 30px;
`;

interface Props{
  date : string;
}

const Modals = () => { //선택한 날짜 프롭스 계승할 것
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalOutput, setModalOutput] = useState<string>("Open Modal");
  return (
    <StyledSafeAreaView>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StyledModalContainer>
          <StyledModalGradeWrapper>
            <StyledModalGradeText>일단</StyledModalGradeText>
          </StyledModalGradeWrapper>

          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={{ alignSelf: "center" }}>보류</Text>
          </StyledModalButton>
        </StyledModalContainer>
      </Modal>

      <StyledModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
      </StyledModalOpenButton>
    </StyledSafeAreaView>
  );
};
export default Modals;