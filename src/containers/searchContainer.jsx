import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Pressable,
  View,
} from 'react-native';

import ArrowLeft from '../assets/chevron-left.svg';
import MarketMirrorLogo from '../assets/mm_logo_top_m_round.svg';
import colors from '../config/colors';
import AppText from '../components/appText';

export const SearchContainer = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginTop: 9,
              marginLeft: 15,
              marginBottom: 12,
              marginRight: 10,
              top: 1,
            }}
            onPress={() => navigation.dispatch(StackActions.replace('Drawer'))}>
            <ArrowLeft />
          </TouchableOpacity>
          <MarketMirrorLogo width={30} height={30} />
          <AppText
            style={{
              marginLeft: 15,
              color: colors.white,
              fontFamily: 'Open Sans Bold',
            }}>
            MarketMirror
          </AppText>
        </View>
        <SearchBar
          style={{
            backgroundColor: '#edf0ee',
            shadowColor: colors.black,
            borderRadius: 5,
          }}
          placeholder="Search here"
          onPress={() => alert('hello')}
          onChangeText={text => console.log(text)}
          autoFocus
        />
      </View>

      {/* <FlatList /> */}
      <Pressable
        onPress={() => navigation.dispatch(StackActions.replace('DetailPage'))}
        android_ripple={{color: colors.primaryLight}}
        style={styles.resultContainer}>
        <View style={styles.resultDetails}>
          <View styles={styles.imageBox}>
            <Image
              resizeMode="cover"
              style={{width: 80, height: 110, paddingLeft: 0, marginLeft: -5}}
              source={require('../assets/images/restaurant.jpg')}
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.title}>Mao Family Restaurant</Text>
            <View style={styles.rating}>
              <Text style={{top: 1.5}}>5.0</Text>
              <Text>⭐⭐⭐⭐⭐</Text>
              <Text style={styles.ratings}>7413 Ratings</Text>
            </View>
            <Text style={{marginTop: 4}}>Masani Road, Mathura</Text>
            <Text style={{marginTop: 4}}>
              <Text style={styles.leftText}>20% Off</Text>. Rs 500-1000
            </Text>
          </View>
        </View>
        <Text style={styles.bottomText}>Rohan 5/5 & 1 Friend Rated this</Text>
      </Pressable>
      <View style={styles.resultContainer}>
        <View style={styles.resultDetails}>
          <View styles={styles.imageBox}>
            <Image
              resizeMode="cover"
              style={{width: 80, height: 110, paddingLeft: 0, marginLeft: -5}}
              source={require('../assets/images/restaurant.jpg')}
            />
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.title}>Mao Family Restaurant</Text>
            <View style={styles.rating}>
              <Text style={{top: 1.5}}>5.0</Text>
              <Text>⭐⭐⭐⭐⭐</Text>
              <Text style={styles.ratings}>7413 Ratings</Text>
            </View>
            <Text style={{marginTop: 4}}>Masani Road, Mathura</Text>
            <Text style={{marginTop: 4}}>
              <Text style={styles.leftText}>20% Off</Text>. Rs 500-1000
            </Text>
          </View>
        </View>
        <Text style={styles.bottomText}>Rohan 5/5 & 1 Friend Rated this</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.primary,
    paddingBottom: 20,
  },
  resultContainer: {
    backgroundColor: colors.white,
    width: '93%',
    marginTop: 12,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    borderRadius: 10,
  },
  resultDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingTop: 10,
  },
  title: {
    fontFamily: 'Open Sans Bold',
  },
  detailBox: {
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  imageBox: {},
  rating: {
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  ratings: {
    top: 2.3,
  },
  leftText: {
    color: 'red',
  },
  bottomText: {},
});
