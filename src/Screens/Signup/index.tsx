import React, {useState,useContext} from 'react';
import {TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { onChange } from 'react-native-reanimated';


const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #FEFFFF;
`;

const FormContainer = Styled.View`
    flex : 1;
    width : 100%;
    align-items : center;
    padding : 32px;
`;

const Description = Styled.Text`
    text-align : center;
    font-size : 12px;
    color : #929292;
    margin : 0px 8px;
`;

const TabContainer = Styled.View`
    flex-direction : row;
    margin-bottom : 16px;
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #D3D3D3;
    padding : 8px;
`;

const FooterDescription = Styled.Text`
    color : #929292;
    text-align : center;
`;

const GoBack = Styled.Text`
    color : #3796EF;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Signup'>;
interface Props {
    navigation : NavigationProp;
    
}



const Signup = ({navigation}:Props) => {
    const [username,onChangename] = useState('')
    const [password,onChangepassword] =useState('')
    const {signup} = useContext<IUserContext>(UserContext);
    

    return (
    
        <Container>
            <FormContainer>
                <TextInput
                    style ={{marginBottom:16}}
                    placeholder={'ID' }
                    onChangeText={text => onChangename(text)}
                    value={username}
                />
                <TextInput
                    style ={{marginBottom:16}}
                    placeholder={'Password' }
                    onChangeText={text => onChangepassword(text)}
                    value={password}
                />
                <Button 
                onPress={()=>
                 {
                     {
                        signup(username,password);
                        navigation.goBack()
                     }
                 }
                
                }
                label="가입완료" 
                style={{marginBottom : 24}}/>
            </FormContainer>
           <Footer>
            <FooterDescription>
                이미 계정이 있으신가요?{' '}
                <GoBack onPress={()=>navigation.goBack()}>로그인</GoBack>
            </FooterDescription>
            </Footer>
        </Container>
        
    );
};

export default Signup;