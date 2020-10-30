import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const defaultContext : IUserContext = {
    isLoading : false,
    userInfo : undefined,
    login : (username: string, password: string) => {},
    signup : (username: string, password: string) => {},
    getUserInfo: () => {},
    logout: () =>{},
};


const UserContext = createContext(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}:Props) => {
    const [userInfo, setUSerInfo]= useState<IUserInfo | 
        undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const showError = (message: string) : void => {
        setTimeout(()=> {
            Alert;
    
        },200);
    };

    const login = (username: string, password : string) : void => {
        fetch ('http://junslim11.pythonanywhere.com/signup')
        .then(response => response.json())
        .then(json => {
        setUSerInfo({
            username : username[1],
            password : password[1]
        });
    })
    .catch(error => {
        setIsLoading(true);
        showError('fail');
    })
        AsyncStorage.setItem('token','save your token').then(()=>{
            setUSerInfo({
                username : username,
                password : password
            });
            setIsLoading(true);
        });
    };


    const signup = (username : string, password : string) : void =>{
        fetch('http://junslim11.pythonanywhere.com/signup',{
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then( response => response.json()).then( data => {
            console.log(data)

        });
        console.warn(username)
    }

    const getUserInfo = () : void => {
        AsyncStorage.getItem('token')
        .then(value => {
            if(value){
                setUSerInfo({
                    username : 'aa',
                    password : 'bb',
                });
            }
            setIsLoading(true);
        })
        .catch(()=>{
            setUSerInfo(undefined);
            setIsLoading(true);
        });
    };


    const logout = ():void => {
        AsyncStorage.removeItem('token');
        setUSerInfo(undefined);
    };

    useEffect(()=>{
        getUserInfo();
    },[]);

    
    return (
        <UserContext.Provider
            value = {{
                isLoading,
                userInfo,
                login,
                signup,
                getUserInfo,
                logout,
            }}>
                {children}
            </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};