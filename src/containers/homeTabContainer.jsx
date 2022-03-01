import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {HomeTab} from '../components';
import {SearchBox} from '../components/searchBox';

import colors from '../config/colors';
import Beauty from '../assets/new/beauty.svg';
import Grocery from '../assets/new/grocery.svg';
import HomeRepairService from '../assets/new/home repair services.svg';
import Home from '../assets/new/home.svg';
import Medication from '../assets/new/medication.svg';
import Movies from '../assets/new/movies.svg';
import RealEstate from '../assets/new/real estate.svg';
import Shopping from '../assets/new/shoping.svg';

export const HomeTabContainer = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <HomeTab>
        <HomeTab.Container>
          <SearchBox />
        </HomeTab.Container>
        <View style={styles.container}>
          <View style={styles.services}>
            <View style={styles.servicesBox}>
              <Beauty width={45} height={45} />
              <Text style={styles.subTitle}>Beauty</Text>
            </View>
            <View style={styles.servicesBox}>
              <Grocery width={45} height={45} />
              <Text style={styles.subTitle}>Grocery</Text>
            </View>
            <View style={styles.servicesBox}>
              <HomeRepairService width={45} height={45} />
              <Text style={styles.subTitle}>Home Service</Text>
            </View>
            <View style={styles.servicesBox}>
              <Home width={45} height={45} />
              <Text style={styles.subTitle}>Home</Text>
            </View>
            <View style={styles.servicesBox}>
              <Medication width={45} height={45} />
              <Text style={styles.subTitle}>Medication</Text>
            </View>
            <View style={styles.servicesBox}>
              <Movies width={45} height={45} />
              <Text style={styles.subTitle}>Movies</Text>
            </View>
            <View style={styles.servicesBox}>
              <RealEstate width={45} height={45} />
              <Text style={styles.subTitle}>Real Estate</Text>
            </View>
            <View style={styles.servicesBox}>
              <Shopping width={45} height={45} />
              <Text style={styles.subTitle}>Shopping</Text>
            </View>
          </View>
        </View>
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
});
