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
   
    border-color : #292929;
    
    margin-bottom : 24px;
`;

const LockImage = Styled.Image`
   
    margin: auto;
  
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 0px;
`;
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
                    <LockImage source={require('~/Assets/Images/dingdong_icon.png')} />
                </LockImageContainer>
            <Title>Forgot your password?</Title>
    
       
        <TextInput
                    style ={{marginBottom:16}}
                    placeholder={'Email' }
                    onChangeText={text => onChangename(text)}
                    value={username}
        />
       

            <Button label="next" style={{marginBottom : 24}} />
            <HelpLabel>help</HelpLabel>
            </FormContainer>
            <Footer>
                <GoBack onPress={()=>navigation.goBack()}>Back</GoBack>
            </Footer>
        </Container>
    );
};

export default PasswordReset;