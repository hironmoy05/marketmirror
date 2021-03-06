import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';

import Swiper from 'react-native-swiper';
import colors from '../config/colors';
import Business from '../assets/new/m_business.svg';
import Jobs from '../assets/new/m_jobs.svg';
import Community from '../assets/new/m_community.svg';
import RealEstate from '../assets/new/m_property.svg';

function SwiperContainer({navigation}) {
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      paginationStyle={{marginBottom: 75}}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={false}>
      <View style={styles.slide1}>
        <View style={styles.container}>
          <View style={styles.bottomViewBox}>
            <View style={styles.imageBox}>
              <Business width={200} height={200} />
            </View>
            <Text style={styles.title}>Business</Text>
            <Text style={styles.subTitle}>
              {/* Global Social Payments Application for cryptocurrencies Payments */}
              Find business in your city
            </Text>

            {/* <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Skip</Text>
            </Pressable> */}
          </View>
        </View>
      </View>
      <View style={styles.slide2}>
        <View style={styles.container}>
          <View style={styles.bottomViewBox}>
            <View style={styles.imageBox}>
              <Jobs width={200} height={200} />
            </View>
            <Text style={styles.title}>Jobs</Text>
            <Text style={styles.subTitle}>
              {/* Global Social Payments Application for cryptocurrencies Payments */}
              Find jobs in your city
            </Text>

            {/* <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Skip</Text>
            </Pressable> */}
          </View>
        </View>
      </View>
      <View style={styles.slide3}>
        <View style={styles.container}>
          <View style={styles.bottomViewBox}>
            <View style={styles.imageBox}>
              <Community width={200} height={200} />
            </View>
            <Text style={styles.title}>Community</Text>
            <Text style={styles.subTitle}>
              {/* Global Social Payments Application for cryptocurrencies Payments */}
              Find your friends
            </Text>

            {/* <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Skip</Text> */}
            {/* </Pressable> */}
          </View>
        </View>
      </View>
      <View style={styles.slide4}>
        <View style={styles.container}>
          <View style={styles.bottomViewBox}>
            <View style={styles.imageBox}>
              <RealEstate width={200} height={200} />
            </View>
            <Text style={styles.title}>Real Estate</Text>
            <Text style={styles.subTitle}>
              {/* Global Social Payments Application for cryptocurrencies Payments */}
              Find home in your city
            </Text>

            <Pressable
              style={styles.buttonLast}
              onPress={() => navigation.replace('Login')}>
              <Text style={styles.buttonTextLast}>Let's Start</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Swiper>
  );
}

export default SwiperContainer;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  topViewBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '80%',
    marginTop: '5%',
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  bottomViewBox: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  imageBox: {
    borderRadius: 10,
    marginTop: '35%',
  },
  title: {
    fontFamily: 'Roboto Bold',
    fontSize: 25,
    color: colors.primaryDark,
    marginTop: '10%',
  },
  subTitle: {
    fontFamily: 'Roboto',
    color: colors.black3,
    textAlign: 'center',
    width: 300,
    marginTop: '4%',
  },
  button: {
    borderColor: colors.primaryDark,
    borderWidth: 1,
    marginTop: 'auto',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Open Sans Bold',
    color: colors.primaryDark,
    paddingLeft: '40%',
    paddingRight: '40%',
    paddingTop: '3.5%',
    paddingBottom: '3.5%',
  },
  buttonLast: {
    backgroundColor: colors.primaryDark,
    marginTop: 'auto',
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  buttonTextLast: {
    fontFamily: 'Open Sans Bold',
    color: '#fff',
    paddingTop: '3.5%',
    paddingBottom: '3.5%',
  },
});
