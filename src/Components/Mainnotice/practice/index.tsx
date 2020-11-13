import React,{useEffect, useState} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { exp } from 'react-native-reanimated';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
 flex : 1;
`;
const FormContainer = Styled.ScrollView`
 flex : 1;
`;
const NoticeTitle = Styled.View`
 flex : 1;
 background-color : blue;
`;
const NoticeTitletext = Styled.Text`
    
`;
const NoticeBody = Styled.View`
 background-color : red;
flex : 1;
`;
const NoticeBodytext = Styled.Text`
    
`;





const Prac = () => {
    return(
    <Container>
        <FormContainer>
            <NoticeTitle>
                <NoticeTitletext>hi</NoticeTitletext>
            </NoticeTitle>
            <NoticeBody>
                <NoticeBodytext>hello</NoticeBodytext>
            </NoticeBody>
        </FormContainer>
    </Container>
    );
}
export default Prac;