import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import {TextInput} from 'react-native';

const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #ffffff;

`;

const FormContainer = Styled.View`
    flex : 1;
    width : 100%;
    align-items : center;
    padding : 32px;
`;

const LockImageContainer = Styled.View`
    padding : 24px;
    border-width : 2px;
    border-color : #292929;
    border-radius : 80px;
    margin-bottom : 24px;
`;

const LockImage = Styled.Image``;
const Title = Styled.Text`
    color : #5F89FA;
    font-size : 16px;
    margin-bottom: 16px;
`;

const Description = Styled.Text`
    text-align : center;
    margin-bottom : 16px;
    color : #ffffff;
`;


const HelpLabel = Styled.Text`
    color : #ffffff;
`;

const Footer = Styled.View`
    width : 100%;
    padding : 8px;
`;

const GoBack = Styled.Text`
    color : #5F89FA;
    text-align : center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'PasswordReset'>;

interface Props {
    navigation: NavigationProp;
}

const PasswordReset = ({navigation}:Props) => {
    const [username,onChangename] = useState('')

    return (
        <Container>
            <FormContainer>
                <LockImageContainer>
                    <LockImage source={require('~/Assets/Images/ic_all.png')} />
                </LockImageContainer>
            <Title>비밀번호를 잊어버리셨나요?</Title>
    
       
        <TextInput
                    style ={{marginBottom:16}}
                    placeholder={'Email' }
                    onChangeText={text => onChangename(text)}
                    value={username}
        />
       

            <Button label="다음" style={{marginBottom : 24}} />
            <HelpLabel>도움</HelpLabel>
            </FormContainer>
            <Footer>
                <GoBack onPress={()=>navigation.goBack()}>돌아가기</GoBack>
            </Footer>
        </Container>
    );
};

export default PasswordReset;