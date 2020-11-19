import React from 'react';
import Styled from 'styled-components/native';
import constants from '~/Constants/constants';

const Container = Styled.TouchableOpacity`
`;

const Image = Styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100; 
    border: 1px solid ${constants.PRIMARY};
`;

interface Props {
    source ?: string;
    style? : object;
    onPress ?: ()=> void
}

const IconButton = ({source,style,onPress}:Props)=>{


    return (
        <Container
            style={style}
            onPress={()=>{
                if(onPress && typeof onPress === 'function') {
                    onPress();
                }
            }}>
                <Image source={ source ? {uri: source} : require('~/Assets/Images/imageChange.png')}/>
            </Container>
    );
};

export default IconButton;