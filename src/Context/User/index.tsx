import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'


const defaultContext : IUserContext = {
    isLoading : false,
    userInfo : undefined,
    tokenInfo : null,
    login : (username: string, password: string) => {},
    signup : (username: string, password: string, email : string) => {},
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
    const [tokenInfo,setTokenInfo] = useState<string | null>(null);

    const showError = (message: string) : void => {
        setTimeout(()=> {
            console.warn(message);
    
        },200);
    };

    

    useEffect(() => {
        SplashScreen.hide();
        userset().then(() => 
        {
            setIsLoading(true)
        });
        
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
        }).then(() => {
            api.user().then((response)=>{
                console.log('usercontext, after login get',response.data)
                if(response.data){
                    setUSerInfo(response.data);
                }
                setIsLoading(true);
            })
         }).catch(error =>{
                
                setIsLoading(true);
                showError('잘못된 정보 입력입니다!');
            // });  
        })
    
    };

    const userset = async () => {
           await AsyncStorage.getItem('token').then((data) => {
                if(data !==null)
                setTokenInfo(data);
                
            });
        await api.user().then((response)=>{
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
    
    const signup = (email: string, username : string, password : string) : void =>{
        api.signUp({
            username: username,
            email: email, 
            password: password
        }).then((response) => {
            return response.data
        }).then((data) => {
                
                console.warn() //boolean 성공 실패 성공 시 로그인창
        }).then(()=>{
            setTokenInfo(null);
        })
            
            
        
    };


    const logout = ():void => {
        AsyncStorage.removeItem('token');
        setTokenInfo(null);
        setUSerInfo(undefined);
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
                login,
                signup,
                logout,
                userset,
                withdraw,
            }}>
                {children}
            </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};