import React , { useContext, useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { Alert, AppRegistry } from 'react-native';
import Colors from '~/Constants/constants';

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
    color : ${Colors.PRIMARY};
    font-size : 40px;
    font-weight : bold;
    text-align : center;
    margin-bottom : 40px;
`;

const PasswordReset = Styled.Text`
    width : 100%;
    color : ${Colors.PRIMARY};
    text-align : right;
    margin-bottom : 24px;
`;

const SignupText = Styled.Text`
    color : ${Colors.TEXT2};
    text-align : center;
`;

const SignupLink = Styled.Text`
    color : ${Colors.PRIMARY};
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
    const [email,onChangeEmail] = useState('');
    const [password,onChangePassword] =useState('');
    const {login} = useContext<IUserContext>(UserContext);

    const checkInputs= () => {
        let emailTest = true;
        let pwTest = true;
        return (emailTest && pwTest);
    
    }
    
    useEffect(()=> {
        SplashScreen.hide();

    },[]);

    return (
        <Container>
            <FormContainer>
                <Logo>dingdong</Logo>
                <Input style={{marginBottom:16}} placeholder="username" onChangeText={text => onChangeEmail(text)}/>
                <Input style={{marginBottom:16}} placeholder="password" onChangeText={text => onChangePassword(text)} secureTextEntry={true}/>
                <PasswordReset onPress={()=>navigation.navigate('PasswordReset')}>
                    Password Reset
                </PasswordReset>
                <Button
                    label ="Login"
                    style = {{
                        marginBottom : 24
                    }}
                    onPress={async ()=>{
                        if(checkInputs()){
                            await login(email,password);
                             //수정
                        }
                        else
                        {
                            Alert.alert('Login Failed')
                        }
                        
                    }}
                    />
                <SignupText>
                    Don't have an account?{'  '}
                    <SignupLink onPress={()=>navigation.navigate('Signup')}>
                        Sign up
                    </SignupLink>
                </SignupText>
            </FormContainer>
            <Footer>
                <Copyright>dingdong project. Team waffles</Copyright>
            </Footer>
        </Container>
    );
};

export default Login;