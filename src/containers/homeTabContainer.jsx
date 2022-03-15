import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HomeTab} from '../components';
import {SearchBox} from '../components/searchBox';
import Swiper from 'react-native-swiper';

import colors from '../config/colors';
import Beauty from '../assets/new/beauty.svg';
import Grocery from '../assets/new/grocery.svg';
import HomeRepairService from '../assets/new/home repair services.svg';
import Home from '../assets/new/home.svg';
import Medication from '../assets/new/medication.svg';
import Movies from '../assets/new/movies.svg';
import RealEstate from '../assets/new/real estate.svg';
import Shopping from '../assets/new/shoping.svg';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import {getUserIdFromStore} from '../store/bugs';
import {loadLists} from '../store/listing';
import {getListings, getFilterdDetails} from '../store/listing';

export const HomeTabContainer = () => {
  const [filteredDataSource, setFilteredDataSource] = useState(null);

  const dispatch = useDispatch();
  const Uid = useSelector(getUserIdFromStore);
  const details = useSelector(getListings);
  const listingDetails = details?.Data;

  useEffect(() => {
    dispatch(loadLists(Uid));
    // fetch('https://api.marketmirror.info/RestApiV2/GetStateList')
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  }, []);

  const categoryId = details ?? Number(listingDetails[0].category);

  // console.log(typeof listingDetails[0].category, typeof categoryId);

  function getCategoryFiltered(id) {
    listingDetails.map(item => {
      if (Number(item.category) === id) {
        console.log(item);
        setFilteredDataSource(item);
      }
    });
  }

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <HomeTab>
        <HomeTab.Container>
          <SearchBox />
        </HomeTab.Container>

        {/* Swiper */}
        <View style={styles.swiperContainer}>
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
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide2}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <Jobs width={200} height={200} /> */}
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide3}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <Community width={200} height={200} /> */}
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.slide4}>
              <View style={styles.container}>
                <View style={styles.bottomViewBox}>
                  <View style={styles.imageBox}>
                    {/* <RealEstate width={200} height={200} /> */}
                  </View>
                </View>
              </View>
            </View>
          </Swiper>
        </View>

        {/* Services */}
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.services}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => getCategoryFiltered(50)}
                style={styles.servicesBox}>
                <Beauty width={45} height={45} />
                <Text
                  numberOfLines={1}
                  style={[styles.subTitle, {width: '70%'}]}>
                  B2B Services
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <Grocery width={45} height={45} />
                <Text style={styles.subTitle}>Grocery</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <HomeRepairService width={45} height={45} />
                <Text style={styles.subTitle}>Home Service</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <Home width={45} height={45} />
                <Text style={styles.subTitle}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <Medication width={45} height={45} />
                <Text style={styles.subTitle}>Medication</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <Movies width={45} height={45} />
                <Text style={styles.subTitle}>Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <RealEstate width={45} height={45} />
                <Text style={styles.subTitle}>Real Estate</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.servicesBox}>
                <Shopping width={45} height={45} />
                <Text style={styles.subTitle}>Shopping</Text>
              </TouchableOpacity>
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
    fontSize: 14,
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
