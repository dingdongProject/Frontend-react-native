import React, { useRef } from "react";
import Styled from 'styled-components/native';
import { Text, View } from "react-native";
import TooltipAlert from "react-native-tooltip-alert";
 
const Container = Styled.View`
    flex : 1;
    position : absolute;
    bottom : 10;
`;


interface Props {
    
    date : string;
}

const BottomSheet= ({date}:Props) => {
    // const refTooltipAlert = useRef();
    return (
        <Container>
        <TooltipAlert
        customStyles={{
            wrapper:{},
            container:{backgroundColor : "red",},
            draggableIcon:{},
            
        }}
        closeOnPressBack={true}
        
        >
          <View>
              <Text>일정 확인하기</Text>
          </View>
          
        </TooltipAlert>
        </Container>
      
    )
}
export default BottomSheet;