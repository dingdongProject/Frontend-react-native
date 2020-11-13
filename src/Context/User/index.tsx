import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/Api/api'


const defaultContext : IUserContext = {
    isLoading : false,
    userInfo : undefined,
    tokenInfo : undefined,
    login : (username: string, password: string) => {},
    signup : (username: string, password: string, email : string) => {},
    getUserInfo: () => {},
    logout: () =>{},
    withdraw : (username : string, password : string) => {},
    user : () => {},
};


const UserContext = createContext(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}:Props) => {
    const [userInfo, setUSerInfo]= useState<IUserInfo | 
        undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tokenInfo,setTokenInfo] = useState<ITokenInfo |undefined>(undefined);

    const showError = (message: string) : void => {
        setTimeout(()=> {
            Alert;
    
        },200);
    };

    const login = (username: string, password : string) : void => {
    //     fetch ('http://junslim11.pythonanywhere.com/signup')
    //     .then((response) => 
    //     {
    //         console.warn(response.json)
    //         return response.json()

    //     }).then((response) => {
    //         console.warn(response)
    //     setUSerInfo({
    //         username : username,
    //         password : password
            
    //     });

    // })
    // .catch(error => {
    //     setIsLoading(true);
    //     showError('fail');
    // })
        api.logIn({
            username : username,
            password : password,
        }).then((response)=>{
            return response.data
        }).then((data)=>{
            AsyncStorage.setItem('token',data.token)
            setTokenInfo(data.token)
            console.warn(data.token);
        }).catch(error => {
                setIsLoading(true);
                showError('잘못된 정보 입력입니다!');
            })
    
    };
    
    const signup = (email: string, username : string, password : string) : void =>{
        api.signUp({
            username: username,
            email: email, 
            password: password
        }).then((response) => {
            return response.data
        }).then((data) => {
                AsyncStorage.setItem('token',data.token)
                setTokenInfo(data.token)
                console.warn('token',data.token)
        }).then(()=>{
            setUSerInfo(undefined);
        })
            
            
        
    };
    const user = () : void => {
        api.user().then((response)=>{
            return response.data

        }).then((data)=>{
            setUSerInfo({
                username : data.username,
                email : data.email,
                picture : data.picture,
            })
        })
    }



    const getUserInfo = () : void => {
        
        AsyncStorage.getItem('token')
        .then(value => {
            if(value){
                return (userInfo?.username);
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
        setTokenInfo(undefined);
    };

    const withdraw = (username : string, password : string):void => {
        api.withDraw({
            username : username,
            password : password
        })
        AsyncStorage.removeItem('token');
        setUSerInfo(undefined);
    }

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
                tokenInfo,
                login,
                signup,
                getUserInfo,
                logout,
                withdraw,
                user,
            }}>
                {children}
            </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};