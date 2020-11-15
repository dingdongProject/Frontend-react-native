import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'


const defaultContext : IUserContext = {
    isLoading : false,
    userInfo : undefined,
    tokenInfo : undefined,
    circleInfo: [],
    login : (username: string, password: string) => {},
    logout: () =>{},
    userset : () => {},
    withdraw : (username : string, password : string) => {},
};


const UserContext = createContext(defaultContext);


interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}:Props) => {
    const [userInfo, setUSerInfo]= useState<IUserInfo | 
        undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [tokenInfo,setTokenInfo] = useState<ITokenInfo | undefined | null>(undefined);
    const [circleInfo, setCircleInfo] = useState<Array<ICircleInfo>>([]);

    const showError = (message: string) : void => {
        setTimeout(()=> {
            console.warn(message);
    
        },200);
    };

    

    useEffect(() => {
        SplashScreen.hide();
        setIsLoading(true)
        userset();
        console.log('check usercontext useEffect')
      }, []);
    

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
            setUSerInfo(data.user);
            setCircleInfo(data.circles);
        }).then(() => {
            setIsLoading(true);
         }).catch(error =>{
                setIsLoading(true);
                showError('잘못된 정보 입력입니다!');
            // });  
        })
    
    };

    const userset = () => {
            // AsyncStorage.getItem('token').then((data) => {
            //     if(data ===null){
            //     setTokenInfo(data);
            //     }
            // });
        api.user().then((response)=>{
            if(response.data){
                setUSerInfo(response.data);
            }
            setIsLoading(true);
        })
        .catch(()=>{
            setUSerInfo(undefined);
            setIsLoading(true);
        });
    }
    


    const logout = ():void => {
        AsyncStorage.removeItem('token');
        setTokenInfo(undefined);
        setUSerInfo(undefined);
        setCircleInfo([]);
    };

    const withdraw = (username : string, password : string):void => {
        api.withDraw({
            username : username,
            password : password
        })
        AsyncStorage.removeItem('token');
        setUSerInfo(undefined);
    }

    

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
                circleInfo,
                login,
                logout,
                userset,
                withdraw,
            }}>
                {children}
            </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};