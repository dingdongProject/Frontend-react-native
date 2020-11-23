import React from 'react';
import Styled from 'styled-components/native'
import { View, Text, StyleSheet, Modal, TouchableHighlight, Button } from 'react-native'
import { useModal } from 'react-native-use-modal-hooks';

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// })

const Container = Styled.View`
  flex : 1;
  justify-content : center;
  align-items : center;
  margin-top : 22;
`;
const ModalContainer = Styled.View`
  margin : 20px;
  background-color : white;
  border-radius : 20;
  padding : 35px;
  align-items : center;
  shadow-color : #000;

`;

const ButtonContainer = Styled.TouchableOpacity`
  background-color : #F194FF;
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



export const Modals = (date : string) => {
  console.warn(date);
  let datestring = date.toString();
  const [showModal, hideModal] = useModal(() => (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    // >
    //   <View style={styles.centeredView}>
    //     <View style={styles.modalView}>
    //       <Text style={styles.modalText}>{date}</Text>

    //       <TouchableHighlight
    //         style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
    //         onPress={hideModal}
    //       >
    //         <Text style={styles.textStyle}>Hide Modal</Text>
    //       </TouchableHighlight>
    //     </View>
    //   </View>
    // </Modal>
    <Modal
      animationType="slide"
      transparent={true}
    >
      <Container>
        <ModalContainer>
          <ModalText>
              {datestring}
          </ModalText>
          <ButtonContainer
            onPress={hideModal}
          >
            <MainText>
            hi~
            </MainText>
          </ButtonContainer>
        </ModalContainer>
      </Container>
    </Modal>
  ))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Open Modal"
        onPress={showModal}
      />
    </View>
  )
}