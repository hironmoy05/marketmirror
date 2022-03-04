import React, {useState, useEffect} from 'react';
import {Splash} from '../components';
import LogoSplash from '../assets/logo_splash_2.svg';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
          console.log(response[0][0]); // Key1
          console.log(response[0][1]); // Value1
          console.log(response[1][0]); // Key2
          console.log(response[1][1]); // Value2
          console.log(response[2][0]); // Key2
          console.log(response[2][1]); // Value2

          setUserEmail(response[0][1]);
          setUserName(response[1][1]);
          setUserId(response[2][1]);

          console.log('login after asyncstorage');

          // if (userName === null || typeof userName === 'undefined') {
          //     console.log('inside if');
          //     if (userId === null || typeof userId === 'undefined') {
          //       navigation.navigate('HomeScreen');
          //     } else {
          //       navigation.navigate('Login');
          //     }
          //   } else {
          //     console.log('inside else');
          //     navigation.navigate('Drawer');
          //   }

          console.log('username is', response[1][1]);

          if (response[1][1] === null || response[1][1].length <= 0) {
            if (response[2][1] === null || response[2][1].length <= 0) {
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
