import React from 'react';
import {Home} from '../components';
import FinpathLogo from '../assets/finpath_logo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContainer = ({navigation}) => {
  function handleSwiper() {
    AsyncStorage.getItem('userId').then(data => {
      return data
        ? navigation.navigate('Login')
        : navigation.navigate('Swiper');
    });
  }

  return (
    <Home>
      <Home.Container>
        <Home.LogoBox>
          <FinpathLogo />
        </Home.LogoBox>

        <Home.Frame>
          <Home.Title>Welcome</Home.Title>
          <Home.SubTitle>
            Global Social Payments Application for cryptocurrencies Payments
          </Home.SubTitle>
        </Home.Frame>
        <Home.RegularButton mode="contained" onPress={handleSwiper}>
          <Home.ButtonText>Login</Home.ButtonText>
        </Home.RegularButton>
      </Home.Container>
    </Home>
  );
};
