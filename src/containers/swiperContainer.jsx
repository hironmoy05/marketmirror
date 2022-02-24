import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

function SwiperContainer ({navigation}) {
    return (
      <Swiper style={styles.wrapper} paginationStyle={{marginBottom: 75}} showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={false}>
        <View style={styles.slide1}>
          <View style={styles.container}>
            <View style={styles.topViewBox}>
              <View style={styles.imageBox}>
                <Image style={{height: '100%', borderRadius: 15}}
                  source={require('../assets/walkthrough_1.png')}
                />
              </View>
            </View>
            <View style={styles.bottomViewBox}>
              <Text style={styles.title}>Main Title</Text>
              <Text style={styles.subTitle}>Global Social Payments Application for cryptocurrencies Payments</Text>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonText}>Skip</Text></Pressable>
            </View>
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={styles.container}>
            <View style={styles.topViewBox}>
              <View style={styles.imageBox}>
              <Image style={{height: '100%', borderRadius: 15}}
                  source={require('../assets/walkthrough_2.png')}
                />
              </View>
            </View>
            <View style={styles.bottomViewBox}>
              <Text style={styles.title}>Main Title</Text>
              <Text style={styles.subTitle}>Global Social Payments Application for cryptocurrencies Payments</Text>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonText}>Skip</Text></Pressable>
            </View>
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.container}>
            <View style={styles.topViewBox}>
              <View style={styles.imageBox}>
              <Image style={{height: '100%', borderRadius: 15}}
                  source={require('../assets/walkthrough_3.png')}
                />
              </View>
            </View>
            <View style={styles.bottomViewBox}>
              <Text style={styles.title}>Main Title</Text>
              <Text style={styles.subTitle}>Global Social Payments Application for cryptocurrencies Payments</Text>
              <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonText}>Skip</Text></Pressable>
            </View>
          </View>
        </View>
        <View style={styles.slide4}>
          <View style={styles.container}>
            <View style={styles.topViewBox}>
              <View style={styles.imageBox}>
              <Image style={{height: '100%', borderRadius: 15}}
                  source={require('../assets/walkthrough_4.png')}
                />
              </View>
            </View>
            <View style={styles.bottomViewBox}>
              <Text style={styles.title}>Main Title</Text>
              <Text style={styles.subTitle}>Global Social Payments Application for cryptocurrencies Payments</Text>
              <Pressable style={styles.buttonLast} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonTextLast}>Let's Start</Text></Pressable>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }

export default SwiperContainer;

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013567',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013567',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013567',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#013567',
  },
  text: {
    color: '#fff',
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
    backgroundColor: '#fff'
  },
  bottomViewBox: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  imageBox: {
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Open Sans Bold',
    fontSize: 30,
    color: '#013567',
    marginTop: '10%',
  },
  subTitle: {
    fontFamily: 'Open Sans Regular',
    color: '#013567',
    textAlign: 'center',
    width: 300,
    marginTop: '4%',
  },
  button: {
    borderColor: '#013567',
    borderWidth: 1,
    marginTop: 'auto',
    borderRadius: 10
  },
  buttonText: {
    fontFamily: 'Open Sans Bold',
    color: '#013567',
    paddingLeft: '40%',
    paddingRight: '40%',
    paddingTop: '3.5%',
    paddingBottom: '3.5%',
  },
  buttonLast: {
    backgroundColor: '#013567',
    marginTop: 'auto',
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  buttonTextLast: {
    fontFamily: 'Open Sans Bold',
    color: '#fff',
    paddingTop: '3.5%',
    paddingBottom: '3.5%',
  },

})