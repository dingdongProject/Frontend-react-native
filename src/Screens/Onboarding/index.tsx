import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Alert, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

type NavigationProp = StackNavigationProp<LoginNaviParamList,'onboard'>;
interface Props {
    navigation : NavigationProp;
}




const onboard = ({navigation} : Props) =>{

useEffect(() => {
    SplashScreen.hide();
}, []);

return(
<Onboarding
    nextLabel = '다음'
    skipLabel = '로그인 화면으로'
    onDone={()=>navigation.navigate('Login')}
    onSkip={()=>navigation.navigate('Login')}
    transitionAnimationDuration = {2500}
    pages={[
        {
            backgroundColor : '#fff',
            image : <Image source={require('~/Assets/Images/OT.png')}/>,
            title : '임',
            subtitle : 'swiper',
            
        },
        {
            backgroundColor : '#cecece',
            image : <Image source={require('~/Assets/Images/OT.png')}/>,
            title : '준',
            subtitle : 'swiper'
        },
        {
            backgroundColor : '#000',
            image : <Image source={require('~/Assets/Images/OT.png')}/>,
            title : '섭',
            subtitle : 'swiper',
            
        },
    ]}/>
)
}

export default onboard;