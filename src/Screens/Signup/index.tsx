import React, {useState,useContext} from 'react';
import {TextInput, CheckBox} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { onChange } from 'react-native-reanimated';
import Colors from '~/Constants/constants';

import api from '~/Api/api'

const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #ffffff;
`;
const Logo = Styled.Text`
    color : ${Colors.PRIMARY};
    font-size : 40px;
    font-weight : bold;
    text-align : center;
    margin-bottom : 40px;
`;
const FormContainer = Styled.View`
    flex : 1;
    width : 100%;
    align-items : center;
    justify-content : center;
    padding : 32px;
`;

const Description = Styled.Text`
    width: 100%;
    text-align : left;
    font-size : 12px;
    color : #929292;
    margin-left: 20px;
    margin-bottom: 5px;
`;

const Footer = Styled.View`
    width : 100%;
    padding : 8px;
`;

const FooterDescription = Styled.Text`
    color : #000000;
    text-align : center;
`;

const GoBack = Styled.Text`
    color : #5F89FA;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Signup'>;
interface Props {
    navigation : NavigationProp;
    
}



const Signup = ({navigation}:Props) => {
    const [email,onChangeEmail] = useState('')
    const [username,onChangeName] = useState('')
    const [password,onChangePassword] =useState('')
    const [rePassword,onChangeRepassword] =useState('')
    
    const checkInputs= () => {
        let re = /\S+@\S+\.\S+/;
        let emailTest = re.test(email);
        let usernameTest= username.length >= 4 && username.length <= 20
        let pwTest = password.length >= 8 && password.length <= 50 && password === rePassword
        return (emailTest && usernameTest && pwTest);

    }


    return (
        <Container>
            <FormContainer>
            <Logo>dingdong</Logo>
            <Description>Email</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'Email should be valid' }
                onChangeText={text => onChangeEmail(text)}
            />
            <Description>Username</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'Username must be at least 4 characters long' }
                onChangeText={text => onChangeName(text)}
            />
            <Description>Password</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'Password must be at least 8 characters long' }
                onChangeText={text => onChangePassword(text)}
                secureTextEntry={true}
            />
            <Description>Re-enter Password</Description>
            <Input
                style ={{marginBottom:16}}
                placeholder={'Password' }
                onChangeText={text => onChangeRepassword(text)}
                secureTextEntry={true}
            />
            
                <Button 
                onPress={()=>
                 {
                     {
                        if (checkInputs()) {
                            api.signUp({
                                username: username,
                                email: email, 
                                password: password
                            }).then((response) => {
                                return response.data
                            }).then((data) => {
                                if (data.success) {
                                    navigation.navigate('Login')
                                    console.warn('sign up successful')
                                }
                                else {
                                    console.warn('sign up failed')
                                }
                            })
                        }
                        else {
                            console.warn('wrong email or pw');
                        }
                     }
                 }
                
                }
                label="sign up" 
                style={{marginBottom : 24,
                    
                        }}/>
            </FormContainer>
           <Footer>
            <FooterDescription>
                Already have an account?{' '}
                <GoBack onPress={()=>navigation.goBack()}>Login</GoBack>
            </FooterDescription>
            </Footer>
        </Container>
        
    );
};

export default Signup;