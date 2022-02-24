import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {HomeTab} from '../components';
import {SearchBox} from '../components/searchBox';

import colors from '../config/colors';

export const HomeTabContainer = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <HomeTab>
        <HomeTab.Container>
          <SearchBox />
        </HomeTab.Container>
        <View style={styles.container}>
          <View style={styles.services}>
            <View style={styles.servicesBox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                  backgroundColor: '#000',
                }}
              />
              <Text style={styles.subTitle}>B2b</Text>
            </View>
            <View style={styles.servicesBox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                  backgroundColor: '#000',
                }}
              />
              <Text style={styles.subTitle}>Doctors</Text>
            </View>
            <View style={styles.servicesBox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                  backgroundColor: '#000',
                }}
              />
              <Text style={styles.subTitle}>Travel</Text>
            </View>
            <View style={styles.servicesBox}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                  backgroundColor: '#000',
                }}
              />
              <Text style={styles.subTitle}>Beauty</Text>
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
    color: colors.black,
    marginTop: '10%',
    fontWeight: 'bold',
  },
});
