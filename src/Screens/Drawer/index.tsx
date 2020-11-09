import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerContentOptions

} from '@react-navigation/drawer';
import {createStackNavigator,HeaderBackButton} from '@react-navigation/stack';


import {UserContext} from '~/Context/User';

import IconButton from '~/Components/IconButton';
import MyCircle from '~/Screens/MyCircle';
import { Alert } from 'react-native';

const Header = Styled.View`
    border-bottom-width : 1px;
    border-color : #D3D3D3;
    padding : 8px 16px;
`;

const Title = Styled.Text``;

const Button = Styled.TouchableHighlight`
    padding : 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction : row;
    align-items : center;
    `;

const Icon = Styled.Image`
    margin-right : 8px;
`;

const Label = Styled.Text`
    font-size : 16px;
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #D3D3D3;
`;

interface Props {
    props : DrawerContentComponentProps<DrawerContentOptions>;
}

// const Stack = createStackNavigator();

// const MycircleStackNavigator = () => {
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name = "MyCircle" component={MyCircle}/>
//         </Stack.Navigator>
//     )
// }

const Drawer = ({props}:Props) => {
    const {logout} = useContext<IUserContext>(UserContext);

    return (
        <DrawerContentScrollView {...props}>
            <Button
            onPress={()=>{props.navigation.navigate('MyPageEdit',{screen : 'MyPageEdit'})}}
            >
            <Header>
                <Title>Jun Slim</Title>
            </Header>
            </Button>
            <Button
                onPress={()=>{props.navigation.navigate('MyCircle',{screen : 'MyCircle'})}}
            >
                
                <ButtonContainer
                >
                    <Icon source={require('~/Assets/Images/ic_all.png')}/>
                    <Label>동아리1</Label>
                </ButtonContainer>
            </Button>
            <Button>
                <ButtonContainer>
                    <Icon source={require('~/Assets/Images/ic_all.png')}/>
                    <Label>동아리2</Label>
                </ButtonContainer>
            </Button>
            <Button
                onPress={()=>{props.navigation.navigate('AddCircle',{screen : 'AddCircle'})}}
            >
                <ButtonContainer>
                    <Icon source={require('~/Assets/Images/ic_all.png')}/>
                    <Label>새로만들기</Label>
                </ButtonContainer>
            </Button>
            <Footer>
                <Button
                    onPress={()=>{
                        logout();
                    }}>
                    <ButtonContainer>
                        <Icon
                            source = {require('~/Assets/Images/ic_all.png')}
                        />
                        <Title>로그아웃</Title>
                        </ButtonContainer>
                    </Button>
            </Footer>
        </DrawerContentScrollView>
    );
};

export default Drawer;
