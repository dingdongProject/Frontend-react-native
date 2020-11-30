import React, {useState,useContext} from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import {UserContext} from '~/Context/User';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import { onChange } from 'react-native-reanimated';
import Colors from '~/Constants/constants';

import api from '~/Api/api'
import constants from '~/Constants/constants';

const Container = Styled.SafeAreaView`
    flex : 1;
    background-color : #ffffff;
    flex-direction: column;
`;
const RequestTable = Styled.View`
    margin: 10px 20px;
   
`;

const RequestItem = Styled.View`
    width: 100%;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 10px 0 10px 10px ;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`
const RequestItemText = Styled.View`
    justify-content: center;
`;
const RequestItemCircleImage = Styled.Image`    
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 15px;
`
const RequestItemCircle = Styled.Text`
    color: ${constants.TEXT1}
    font-weight: bold;
    font-size: 24px;
`
const RequestItemUser = Styled.Text`
    color: ${constants.TEXT1}

`
const RequestItemButtons = Styled.View`
flex-direction: row;
`;
const RequestAccept = Styled.TouchableOpacity`
    height: 100px;
    background-color: ${constants.PRIMARY}
    width: 60px;
`;
const RequestDecline = Styled.TouchableOpacity`
    height: 100px;
    background-color: #e88
    width: 60px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;
const RequestBtnText = Styled.Text`
    color: white;
    line-height: 100px;
    text-align: center;
    
`;
const RequestLeft = Styled.View`
    flex-direction: row;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Signup'>;
interface Props {
    navigation : NavigationProp;
    
}



const Requests = ({navigation}:Props) => {
    const {requests} = useContext<IUserContext>(UserContext);
    const [currentRequests, setCurrentRequests] = useState<Array<IRequest>>(requests);

    const acceptRequest = (item: IRequest, accept=false) =>{
        console.warn(item);
        api.postRespond({id: item.id, accept: accept})
        .then((response) => response.data)
        .then((data) => {
            if (data.success) {
                const new_list = currentRequests.filter((r) =>{return r.id !== item.id})
                setCurrentRequests(new_list);
            }
            else {
                console.warn(data.message);
            }
        })
    }

    return (
        <Container>
            <RequestTable>
            {
                currentRequests.length !== 0 && currentRequests.map((item,key) => (
                    <RequestItem>
                        <RequestLeft>
                            <RequestItemCircleImage source={{uri: item.circle.picture}}/>
                            <RequestItemText>
                                <RequestItemCircle>{item.circle.name}</RequestItemCircle>
                                <RequestItemUser>Request from: </RequestItemUser>
                                <RequestItemUser>{item.requester.username}</RequestItemUser>
                            </RequestItemText>
                        </RequestLeft>
                        <RequestItemButtons>
                            <RequestAccept onPress={() => {acceptRequest(item, true)}}>
                                <RequestBtnText>Accept</RequestBtnText>
                            </RequestAccept>
                            <RequestDecline onPress={() => {acceptRequest(item)}}>
                                <RequestBtnText>Decline</RequestBtnText>
                            </RequestDecline>
                        </RequestItemButtons>
                    </RequestItem>
                ))
                
            }
           </RequestTable>
        </Container>
        
    );
};

export default Requests;