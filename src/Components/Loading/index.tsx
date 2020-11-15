import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';
import Constants from '~/Constants/constants'
const Container = Styled.View`
    flex : 1;
    align-items : center;
    background-color : #FEFFFF;
    justify-content : center;
`;

const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size='large' color={Constants.PRIMARY}/>
        </Container>
    );
};

export default Loading;