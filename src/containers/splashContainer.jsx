import React, {useState, useEffect} from 'react';
import {Splash} from '../components';
import LogoSplash from '../assets/logo_splash_2.svg';
import {ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['ImmutableStateInvariantMiddleware']);

export const SplashContainer = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.multiGet(['userEmai', 'userName', 'userId']).then(
        response => {
          // console.log(response[0][0]); // Key1
          // console.log(response[0][1]); // Value1
          // console.log(response[1][0]); // Key2
          // console.log(response[1][1]); // Value2
          // console.log(response[2][0]); // Key2
          // console.log(response[2][1]); // Value2

          setUserEmail(response[0][1]);
          setUserName(response[1][1]);
          setUserId(response[2][1]);

          if (response[1][1] === null || response[1][1]?.length <= 0) {
            if (response[2][1] === null || response[2][1]?.length <= 0) {
              navigation.replace('HomeScreen');
            } else {
              navigation.replace('Login');
            }
          } else {
            navigation.replace('Drawer');
          }
        },
      );
    }, 5000);

    return () => console.log('Unmounted from splash contaier');
  }, []);

  return (
    <Splash>
      <Splash.Container>
        <Splash.LogoBox>
          <LogoSplash />
        </Splash.LogoBox>
        <ActivityIndicator
          animating={animating}
          color="#fff"
          size="large"
          style={styles.activityIndicator}
        />
      </Splash.Container>
    </Splash>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
