import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'


const defaultContext : IUserContext = {
    isLoading : false,
    userInfo : undefined,
    circleInfo: [],
    tokenInfo : null,
    noticeMain: [],
    newsMain: [],
    requests: [],
    addCircle : (data : FormData) => {},
    login : (username: string, password: string) => {},
    logout: () =>{},
    userset : () => {},
    mainPageSet: () => {},
    setNewRequests: (newRequests: Array<IRequest>) => {},
};


const UserContext = createContext(defaultContext);


interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}:Props) => {
    const [userInfo, setUSerInfo]= useState<IUserInfo | 
        undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [circleInfo, setCircleInfo] = useState<Array<ICircleInfo>>([]);
    const [tokenInfo,setTokenInfo] = useState<string | null>(null);
    const [noticeMain, setNoticeMain] = useState<Array<IPostInfo>>([]);
    const [newsMain, setNewsMain] = useState<Array<IPostInfo>>([]);
    const [requests, setRequests] = useState<Array<IRequest>>([]);

    const showError = (message: string) : void => {
        setTimeout(()=> {
            console.warn(message);
    
        },200);
        };

    

        useEffect(() => {
        SplashScreen.hide();
        userset().then(() => 
        {
            mainPageSet().then(() => {
                setIsLoading(true)
            })
            
        });
        
        }, []);
    
    const mainPageSet = async () => {
        api.getMain().then((response)=> response.data).then((data) => {
            if (data.success) {
                setNoticeMain(data.notices);
                setNewsMain(data.news);
                setRequests(data.requests);
            }
        })
    }
        

    const login = (username: string, password : string) : void => {
    
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
            mainPageSet().then(() => {
                setIsLoading(true)
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
                setUSerInfo(response.data.user);
                setCircleInfo(response.data.circles)
            }
            setIsLoading(true);
        })
        .catch(()=>{
            setUSerInfo(undefined);
            setIsLoading(true);
        });
    }

    const addCircle = (form: FormData) : void=> {
        api.addCircle(form).then( (response) => {
            return response.data
          }).then( (data) => {
            if (data.success) {
                let circle = data.circle
                var newList = circleInfo;
                newList.push(circle);
                setCircleInfo(newList);
            }
        })
    }

    const logout = ():void => {
        AsyncStorage.removeItem('token');
        setTokenInfo(null);
        setUSerInfo(undefined);
        setCircleInfo([]);
    };


    const setNewRequests = (newRequests: Array<IRequest>) => {
        setRequests(newRequests);
    }

    
    return (
        <UserContext.Provider
            value = {{
                isLoading,
                userInfo,
                tokenInfo,
                noticeMain, 
                newsMain,
                circleInfo,
                requests,
                addCircle,
                login,
                logout,
                userset,
                mainPageSet,
                setNewRequests
            }}>
                {children}
            </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};