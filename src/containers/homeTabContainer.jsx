import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  LogBox,
  ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

import { HomeTab } from '../components';
import { SearchBox } from '../components/searchBox';
import colors from '../config/colors';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getDashListings } from '../store/listing';

export const HomeTabContainer = () => {
  const navigation = useNavigation();
  const dashlists = useSelector(getDashListings);

  LogBox.ignoreLogs(['ImmutableStateInvariantMiddleware']);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <HomeTab>
        <HomeTab.Container>
          <SearchBox />
        </HomeTab.Container>

        {/* Swiper */}
        <View style={[styles.swiperContainer, { flex: 0.5 }]}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            // containerStyle={}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.slide1}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <Business width={200} height={200} /> */}
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={{
                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide2}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <Jobs width={200} height={200} /> */}
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={{
                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide3}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <Community width={200} height={200} /> */}
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={{
                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide4}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <RealEstate width={200} height={200} /> */}
                    <Image
                      style={{ width: '100%', height: '100%' }}
                      source={{
                        uri: 'https://www.marketmirror.info/uploads/ads/ads2.jpg',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Swiper>
        </View>

        {/* Services */}
        <ScrollView style={{ flex: 0.4, marginBottom: '18%' }}>
          <View style={styles.container}>
            <View style={styles.services}>
              {dashlists?.map(item => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Search', { id: item?.id })}
                  style={styles.servicesBox}>
                  {/* <Beauty width={45} height={45} /> */}
                  {/* <SvgWithCssUri width={45} height={45} uri={item?.icon} /> */}
                  <Image
                    style={{ width: 40, height: 44 }}
                    source={{ uri: item?.image }}
                  />
                  <Text
                    numberOfLines={1}
                    style={[styles.subTitle, { width: '80%' }]}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </HomeTab>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10%',
  },
  services: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  servicesBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '25%',
    marginTop: '8%',
  },
  subTitle: {
    fontFamily: 'Roboto',
    color: colors.black,
    marginTop: '10%',
    textAlign: 'center',
    fontSize: 10,
  },

  // Swiper
  swiperContainer: {
    height: '30%',
    alignItems: 'center',
  },
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
    display: 'flex',
    alignItems: 'center',
  },
  bottomViewBox: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  imageBox: {
    width: '80%',
    height: '100%',
    borderWidth: 2,
    borderColor: colors.black3,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Roboto Bold',
    fontSize: 25,
    color: colors.primaryDark,
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
