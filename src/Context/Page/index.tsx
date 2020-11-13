import React , { createContext, useState, useEffect } from 'react';
import Alert from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/Api/api'

//유저들의 동아리를 개별로 관리하기 위한 context


const defaultContext : IPageContext = {
    isLoading : false,
    PageInfo : undefined,
    // PageList : undefined,
    pagetracer : (Circlename : string) => {},
    protopage : () => {},
    
};


const PageContext = createContext(defaultContext);

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

const PageContextProvider = ({children}:Props) => {
    const [PageInfo, setPageInfo]= useState<IPageInfo | 
        undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [PageList, setPageList] = useState<Array<IPageInfo>>([]);

    const pagetracer = (Circlename : string) : void => {
    setPageInfo({
        Circlename : Circlename,
    });
    setIsLoading(true);
    
    }

    const protopage = ()  => {
        
        setPageInfo({
            Circlename : 'DDHome',
        })
        
    };



    return (
    <PageContext.Provider
        value = {{
            isLoading,
            PageInfo,
            // PageList,
            pagetracer,
            protopage,
        }}>
            {children}
        </PageContext.Provider>
        );
};

export {PageContextProvider, PageContext};


