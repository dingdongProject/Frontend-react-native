import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/Api/api'


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
    
    const signup = (email: string, username : string, password : string) : void =>{
        api.signUp({
            username: username,
            email: email, 
            password: password
        }).then((response) => {
            return response.data
        }).then((data) => {
            console.warn("token: ", data.token)
        })
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

    // useEffect(() => {
    //     let mounted = true
    //     fetch('http://junslim11.pythonanywhere.com/signup').then(() => {
    //         if (mounted) {
    //             setIsLoading(false)
    //         }
    //     })

    //     return function cleanup() {
    //         mounted = false
    //     }
    // }, [])



    
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