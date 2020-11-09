import React , { useContext, useEffect } from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { AppRegistry } from 'react-native';

const Container = Styled.SafeAreaView`
    flex :1;
    background-color : #ffffff;

`;

const FormContainer = Styled.View`
    flex : 1;
    width : 100%;
    align-items : center;
    justify-content : center;
    padding : 32px;
`;

const Logo = Styled.Text`
    color : #5F89FA;
    font-size : 40px;
    font-weight : bold;
    text-align : center;
    margin-bottom : 40px;
`;

const PasswordReset = Styled.Text`
    width : 100%;
    color : #5F89FA;
    text-align : right;
    margin-bottom : 24px;
`;

const SignupText = Styled.Text`
    color : #000000;
    text-align : center;
`;

const SignupLink = Styled.Text`
    color : #5F89FA;
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #000000;
    padding : 8px;
`;

const Copyright = Styled.Text`
    color : #000000;
    text-align : center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList,'Login'>;
interface Props {
    navigation : NavigationProp;
}

const Login = ({navigation} :Props) => {
    const {login} = useContext<IUserContext>(UserContext);
    
    useEffect(()=> {
        SplashScreen.hide();

    },[]);

    return (
        <Container>
            <FormContainer>
                <Logo>dingdong</Logo>
                <Input style={{marginBottom:16}} placeholder="이메일"/>
                <Input style={{marginBottom:16}} placeholder="비밀번호" secureTextEntry={true}/>
                <PasswordReset onPress={()=>navigation.navigate('PasswordReset')}>
                    비밀번호 재설정
                </PasswordReset>
                <Button
                    label ="로그인"
                    style = {{
                        marginBottom : 24
                    }}
                    onPress={()=>{
                        login('ding-dong@naver.com','password'); //수정
                    }}
                    />
                <SignupText>
                    계정이 없으신가요?{'  '}
                    <SignupLink onPress={()=>navigation.navigate('Signup')}>
                        회원가입
                    </SignupLink>
                </SignupText>
            </FormContainer>
            <Footer>
                <Copyright>SNS-Application from colorful_ahn</Copyright>
            </Footer>
        </Container>
    );
};

export default Login;