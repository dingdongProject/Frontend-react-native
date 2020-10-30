import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding : 8px;
`;

const Icon = Styled.Image`

`;

interface Props {
    iconName : 
        | 'camera'
        | 'live'
        | 'send'
        | 'dotMenu'
        | 'favorite'
        | 'comment'
        | 'bookmark'
        | 'menu';
    style? : object;
    onPress ?: ()=> void
}

const IconButton = ({iconName,style,onPress}:Props)=>{

    const imageSource = {
        camera : require('~/Assets/Image/ic_all.png'),
        live : require('~/Assets/Image/ic_all.png'),
        send : require('~/Assets/Image/ic_all.png'),
        dotMenu : require('~/Assets/Image/ic_all.png'),
        favorite : require('~/Assets/Image/ic_all.png'),
        comment : require('~/Assets/Image/ic_all.png'),
        bookmark : require('~/Assets/Image/ic_all.png'),
        menu : require('~/Assets/Image/ic_all.png'),
    };

    return (
        <Container
            style={style}
            onPress={()=>{
                if(onPress && typeof onPress === 'function') {
                    onPress();
                }
            }}>
                <Icon source={imageSource[iconName]}/>
            </Container>
    );
};

export default IconButton;