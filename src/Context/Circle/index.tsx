import React , { createContext, useState, useEffect, useContext } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'
import {UserContext} from '~/Context/User';

const defaultContext: ICircleContext = {
    isCircle: false,
    circleChosen: undefined,
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
    const [circleChosen, setCircleChosen] = useState<ICircleInfo | undefined>(undefined);
    const [isCircle, setIsCircle] = useState<boolean>(false);
    const [circleNotices, setCircleNotices] = useState<Array<IPostSimpleInfo>>([]);
    const [circleGallery, setCircleGallery] = useState<Array<string>>([]);
    const [circleFeeds, setCircleFeeds] = useState<Array<IPostSimpleInfo>>([]);
    const [circleBoards, setCircleBoards] = useState<Array<IBoardInfo>>([]);
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const changeToCircle = (newState: boolean, key: number = 0) => {
        setIsCircle(newState);
        setCircleChosen(circleInfo[key]);
    }
    return (
        <CircleContext.Provider
            value = {{
                isCircle,
                circleChosen,
                circleBoards,
                circleFeeds,
                circleGallery,
                circleNotices,
                changeToCircle,
            }}>
                {children}
        </CircleContext.Provider>
    );
    
}

export {CircleContextProvider, CircleContext};