import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex : 1;
    align-items : center;
    background-color : #FEFFFF;
    justify-content : center;
`;

const Loading = () => {
    return (
        <Container>
            <ActivityIndicator color = "#D3D3D3" size="large"/>
        </Container>
    );
};

export default Loading;