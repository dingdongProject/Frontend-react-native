import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding : 16px;
`;

const Icon = Styled.Image`

`;

interface Props {
    iconName : 
        // | 'camera'
        // | 'live'
         | 'add'
         | 'dotMenu'
        | 'info'
         | 'upload'
         | 'drawericon'
        | 'menu'
        | 'search'
    style? : object;
    onPress ?: ()=> void
}

const IconButton = ({iconName,style,onPress}:Props)=>{

    const imageSource = {
        // camera : require('~/Assets/Image/ic_all.png'),
        // live : require('~/Assets/Image/ic_all.png'),
        add : require('~/Assets/Images/add_circle_w.png'),
         dotMenu : require('~/Assets/Images/baseline.png'),
        info : require('~/Assets/Images/info.png'),
        upload : require('~/Assets/Images/upload.png'),
        drawericon : require('~/Assets/Images/ic_all.png'),
        menu : require('~/Assets/Images/menu.png'),
        search : require('~/Assets/Images/search.png'),
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