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

const Modals = (Props: any): React.ReactElement => {
  //State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  //Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
  const [modalOutput, setModalOutput] = useState<string>("Open Modal");
  return (
    <StyledSafeAreaView>
      {/* Modal이 StyledModalOpenButto의 아래에 있더라도 무관함. Container안에 들어가만 있으면 됨 */}
      <Modal
        //isVisible Props에 State 값을 물려주어 On/off control
        isVisible={modalVisible}
        //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StyledModalContainer>
          <StyledModalGradeWrapper>
            <StyledModalGradeText>선택지</StyledModalGradeText>
          </StyledModalGradeWrapper>

          <StyledModalButton
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={{ alignSelf: "center" }}>취소</Text>
          </StyledModalButton>
        </StyledModalContainer>
      </Modal>

      <StyledModalOpenButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        {/* 모달에서 선택 결과 값을 State로 받아서 화면에 표시 */}
        <StyledModalOutputText> {modalOutput}</StyledModalOutputText>
      </StyledModalOpenButton>
    </StyledSafeAreaView>
  );
};
export default Modals;