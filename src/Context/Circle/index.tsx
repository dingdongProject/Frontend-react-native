import React , { createContext, useState, useEffect, useContext } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';
import api from '~/Api/api'
import {UserContext} from '~/Context/User';

const defaultContext: ICircleContext = {
    isCircleLoading : false,
    isCircle: false,
    circleChosen: undefined,
    circleNotices: [],
    circleGallery: {image: ''},
    circleFeeds: [],
    circleBoards: [],
    circleMembers : [],
    circleSchedule : [],
    ISchedule : [],
    changeToCircle: (newstate: boolean, key: number) => {},
    setMainPage: () => {},
    getCircleMembers : () => {},
    addBoard: (name: string) => {},
    getSchedule : () => {},
    setSchedule: (schedules: ISchedules) => {},
    

}

const CircleContext = createContext(defaultContext);

interface Props {
     children: JSX.Element | Array<JSX.Element>;
}



const CircleContextProvider = ({children}: Props) => {
    const [isCircleLoading, setIsCircleLoading] = useState<boolean>(false);
    const [circleChosen, setCircleChosen] = useState<ICircleInfo | undefined>(undefined);
    const [isCircle, setIsCircle] = useState<boolean>(false);
    const [circleNotices, setCircleNotices] = useState<Array<IPostInfo>>([]);
    const [circleGallery, setCircleGallery] = useState<{image: string}>({image: ''});
    const [circleFeeds, setCircleFeeds] = useState<Array<IPostInfo>>([]);
    const [circleBoards, setCircleBoards] = useState<Array<IBoardInfo>>([]);
    const [circleMembers, setCircleMembers] = useState<Array<IMembersInfo>>([]);
    const [ISchedule,setISchedule] = useState<Array<ISchedules>>([]);
    const [circleSchedule, setCircleSchedule] = useState<Array<circleSchedules>>([]);
    const {circleInfo} = useContext<IUserContext>(UserContext);
    const changeToCircle = async (newState: boolean, key: number = 0) => {
        setIsCircle(newState);
        setCircleChosen(circleInfo[key]);
        
    
    }

    useEffect(()=>{
        getSchedule().then(()=>{
            setIsCircleLoading(true);
        })
            
    },[])


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
        await api.getGallery({name: circleChosen?.name})
        .then((response) => response.data)
        .then((data) => {
            console.warn(data);
            setCircleGallery(data.gallery)
        })
        
        
    }

    const setSchedule = (schedules: ISchedules) => {
        setISchedule([...ISchedule, schedules]);
    }
    
    const getSchedule = async () => {
        await api.getSchedule()
        .then((response)=> response.data)
        .then((data)=>{
        setISchedule(data.schedules)
        setIsCircleLoading(true)
        })
        // .then((data)=>{
        //      data.map((name: { scheduleList: string | any[]; })=>{
        //         for(let i=0; i<name.scheduleList.length; i++)
        //         {
        //             let sch = name.scheduleList[i]
        //             setCircleSchedule([sch, ...circleSchedule])
                    
        //         }
                 
               
        //     })        
        // })

        
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
                isCircleLoading,
                isCircle,
                circleChosen,
                circleBoards,
                circleFeeds,
                circleGallery,
                circleNotices,
                circleMembers,
                ISchedule,
                circleSchedule,
                changeToCircle,
                setMainPage,
                getCircleMembers,
                addBoard,
                getSchedule,
                setSchedule
            }}>
                {children}
        </CircleContext.Provider>
    );
    
}

export {CircleContextProvider, CircleContext};