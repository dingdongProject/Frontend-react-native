import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

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

const LockImageContainer = Styled.View`
    padding : 24px;
    border-width : 2px;
    border-color : #292929;
    border-radius : 80px;
    margin-bottom : 24px;
`;

const LockImage = Styled.Image``;
const Title = Styled.Text`
    font-size : 16px;
    margin-bottom: 16px;
`;

const Description = Styled.Text`
    text-align : center;
    margin-bottom : 16px;
    color : #292929;
`;

const TabContainer = Styled.View`
    flex-direction : row;
    margin-bottom : 16px;
`;

const HelpLabel = Styled.Text`
    color : #3796EF;
`;

const Footer = Styled.View`
    width : 100%;
    border-top-width : 1px;
    border-color : #D3D3D3;
    padding : 8px;
`;

const GoBack = Styled.Text`
    color : #3796EF;
    text-align : center;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'PasswordReset'>;

interface Props {
    navigation: NavigationProp;
}

const PasswordReset = ({navigation}:Props) => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const tabs = ['사용자 이름', '전화번호'];
    const tabDescriptions = [
        '이메일 입력',
        '전화번호 입력'
    ];
    const placeholders = ['사용자 이름 또는 이메일','전화번호']

    return (
        <Container>
            <FormContainer>
                <LockImageContainer>
                    <LockImage source={require('~/Assets/Images/ic_all.png')} />
                </LockImageContainer>
            <Title>비밀번호를 잊어버리셨나요?</Title>
    <Description>{tabDescriptions[tabIndex]}</Description>
        <TabContainer>
            {tabs.map((label : string, index: number)=> (
                <Tab
                    key ={'tab-${index}'}
                    selected={tabIndex === index}
                    label ={label}
                    onPress={()=>setTabIndex(index)}
                />
            ))}
        </TabContainer>
            <Input
                style ={{marginBottom : 16}}
                placeholder={placeholders[tabIndex]}
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