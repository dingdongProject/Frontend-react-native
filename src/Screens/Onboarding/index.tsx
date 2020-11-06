import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

type NavigationProp = StackNavigationProp<LoginNaviParamList,'onboard'>;
interface Props {
    navigation : NavigationProp;
}

const Image = Styled.Image`
    height: 500px
`;


const onboard = ({navigation} : Props) =>{

useEffect(() => {
    SplashScreen.hide();
}, []);

return(
<Onboarding
    nextLabel = '다음'
    skipLabel = '건너뛰기'
    onDone={()=>navigation.navigate('Login')}
    onSkip={()=>navigation.navigate('Login')}
    bottomBarHighlight={false}
    transitionAnimationDuration = {2500}
    pages={[
        {
            backgroundColor : '#fff',
            image : <Image source={require('~/Assets/Images/OT.png')} />,
            title : '임',
            subtitle: 'Done with React Native Onboarding Swiper',
            
        },
        {
            backgroundColor : '#cecece',
            image : <Image source={require('~/Assets/Images/OT.png')}/>,
            title : '준',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor : '#000',
            image : <Image source={require('~/Assets/Images/OT.png')}/>,
            title : '섭',
            subtitle: 'Done with React Native Onboarding Swiper',
            
        },
    ]}/>
)
}

export default onboard;