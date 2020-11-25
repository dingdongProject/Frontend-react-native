import React , { createContext, useState, useEffect, useContext } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'
import {UserContext} from '~/Context/User';

const defaultContext: ICircleContext = {
    isLoading : false,
    isCircle: false,
    circleChosen: undefined,
    circleNotices: [],
    circleGallery: [],
    circleFeeds: [],
    circleBoards: [],
    circleMembers : [],
    circleSchedule : [],
    circleDate : [],
    changeToCircle: (newstate: boolean, key: number) => {},
    setMainPage: () => {},
    getCircleMembers : () => {},
    addBoard: (name: string) => {},
    

}

const CircleContext = createContext(defaultContext);

interface Props {
     children: JSX.Element | Array<JSX.Element>;
}

const CircleContextProvider = ({children}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [circleChosen, setCircleChosen] = useState<ICircleInfo | undefined>(undefined);
    const [isCircle, setIsCircle] = useState<boolean>(false);
    const [circleNotices, setCircleNotices] = useState<Array<IPostSimpleInfo>>([]);
    const [circleGallery, setCircleGallery] = useState<Array<string>>([]);
    const [circleFeeds, setCircleFeeds] = useState<Array<IPostSimpleInfo>>([]);
    const [circleBoards, setCircleBoards] = useState<Array<IBoardInfo>>([]);
    const [circleMembers, setCircleMembers] = useState<Array<IMembersInfo>>([]);
    const [circleSchedule,setCircleSchedule] = useState<Array<ISchedules>>([]);
    const [circleDate, setCircleDate] = useState<Array<String>>([]);
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const changeToCircle = async (newState: boolean, key: number = 0) => {
        setIsCircle(newState);
        setCircleChosen(circleInfo[key]);
        
    
    }


    const setMainPage = async() => {
        await api.getBoards({name: circleChosen?.name})
        .then( (response) => response.data)
        .then((data) => {
            console.warn(data)
            if (data.success){
                setCircleBoards(data.boards)
            }
            else {
                console.warn(data.message)
            }
        })
        await api.getNotices({name: circleChosen?.name})
        .then( (response) => response.data)
        .then((data) => {
            console.warn(data);
            if (data.success){
                setCircleNotices(data.posts)
            }
            else {
                console.warn(data.message)
            }
        })
        await api.getSchedule({name : circleChosen?.name})
        .then((response)=> response.data)
        .then((data)=>{
        setCircleSchedule(data.schedules)
        console.warn(circleSchedule);
        }).then(()=>{
            circleSchedule.map((datetime)=>{
                var date
                if (datetime.datetime){
                    date = datetime.datetime.split('T')[0];

                    setCircleDate([date,...circleDate]);
                    console.warn("circledate",circleDate);
                }
            })

        })
        
    }

    const getCircleMembers = async (name : string) => {
        await api.getMembers(name).then((response)=>{
            if(response.data){
                setCircleMembers(response.data.members);
            }
            
        }).catch(()=>{
            console.warn('no one!')
        })

        
    }
    const addBoard = (name: string) => {
        api.addBoard({circle: circleChosen?.name, board: name})
        .then((response) => response.data)
        .then((data)=> {
            console.warn(data)
            if (data.success) {
                setCircleBoards([...circleBoards, data.board])
                console.warn(data.board)
            }
        })
    }

   
    return (
        <CircleContext.Provider
            value = {{
                isLoading,
                isCircle,
                circleChosen,
                circleBoards,
                circleFeeds,
                circleGallery,
                circleNotices,
                circleMembers,
                circleSchedule,
                circleDate,
                changeToCircle,
                setMainPage,
                getCircleMembers,
                addBoard
            }}>
                {children}
        </CircleContext.Provider>
    );
    
}

export {CircleContextProvider, CircleContext};