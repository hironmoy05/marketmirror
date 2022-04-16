import React from 'react';
import {Home} from '../components';
import LogoSplash from '../assets/logo_splash_2.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContainer = ({navigation}) => {
  function handleSwiper() {
    AsyncStorage.getItem('userId').then(data => {
      return !!data
        ? navigation.replace('Login')
        : navigation.replace('Swiper');
    });
  }

  return (
    <Home>
      <Home.Container>
        <Home.LogoBox>
          <LogoSplash />
        </Home.LogoBox>

        <Home.Frame>
          <Home.Title>Welcome</Home.Title>
          <Home.SubTitle>
            {/* Global Social Payments Application for cryptocurrencies Payments */}
          </Home.SubTitle>
        </Home.Frame>
        <Home.RegularButton mode="contained" onPress={handleSwiper}>
          <Home.ButtonText>Login</Home.ButtonText>
        </Home.RegularButton>
      </Home.Container>
    </Home>
  );
};
