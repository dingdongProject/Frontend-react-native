import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'

const defaultContext: ICircleContext = {
    isCircle: false,
    circleInfo: undefined,
    circleNotices: [],
    circleGallery: [],
    circleFeeds: [],
    circleBoards: [],
    changeIsCircle: (newstate: boolean) => {}
}

const CircleContext = createContext(defaultContext);

interface Props {
     children: JSX.Element | Array<JSX.Element>;
}

const CircleContextProvider = ({children}: Props) => {
    const [circleInfo, setCircleInfo] = useState<ICircleInfo | undefined>(undefined);
    const [isCircle, setIsCircle] = useState<boolean>(false);
    const [circleNotices, setCircleNotices] = useState<Array<IPostSimpleInfo>>([]);
    const [circleGallery, setCircleGallery] = useState<Array<string>>([]);
    const [circleFeeds, setCircleFeeds] = useState<Array<IPostSimpleInfo>>([]);
    const [circleBoards, setCircleBoards] = useState<Array<IBoardInfo>>([]);
    
    const changeIsCircle = (newState: boolean) => {
        setIsCircle(newState); 
        console.warn(isCircle);
    }
    return (
        <CircleContext.Provider
            value = {{
                isCircle,
                circleInfo,
                circleBoards,
                circleFeeds,
                circleGallery,
                circleNotices,
                changeIsCircle,
            }}>
                {children}
        </CircleContext.Provider>
    );
    
}

export {CircleContextProvider, CircleContext};