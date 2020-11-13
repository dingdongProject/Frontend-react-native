import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Styled from 'styled-components/native';

const Container=Styled.View`
    flex:1;
    padding:50px 0;
    align-items : center;
    background-color:#f4f4f4;
    width : 100%
`;
const Title=Styled.Text`
font-size:20px;
text-align:center;
 color:black;
`;
const Item=Styled.View`
flex:1;
border:1px solid #ccc;
margin:2px;
border-radius:10px;
box-shadow:0 0 10px #ccc;
background-color:#fff;
padding:10px;
 
`;


const Mainnotice = () => {
    return(
        <Container>
            <Item>
                <Title>notice</Title>
            </Item>
            <Item>
                <Title>board</Title>
            </Item>
        </Container>
    )

}
export default Mainnotice;
