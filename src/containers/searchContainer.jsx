import React, { useEffect, useState } from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Pressable,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import ArrowLeft from '../assets/chevron-left.svg';
import MarketMirrorLogo from '../assets/mm_logo_top_m_round.svg';
import colors from '../config/colors';
import AppText from '../components/appText';
import { getListings } from '../store/listing';
import { loadLists, getDashListings } from '../store/listing';
import { getUserIdFromStore } from '../store/bugs';
import { YOUR_CLIENT_ID } from '../constants/urls';

export const SearchContainer = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [key, setKey] = useState('');

  const [filteredDataSource, setFilteredDataSource] = useState(null);

  const navigation = useNavigation();
  const Route = useRoute();
  const details = useSelector(getListings);
  let listingDetails = details?.Data;
  const categoryId = Number(Route?.params?.id);
  const Uid = useSelector(getUserIdFromStore);

  const searchByKey = (cb, d) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        cb(...args)
      }, d)
    }
  }

  const handleChange = searchByKey(e => e !== '' ? (setKey(e), setSearch(true)) : (setSearch(false), setKey('')), 1000);

  useEffect(() => {
    const category = '';
    dispatch(loadLists(YOUR_CLIENT_ID, Uid, keyword = key, search ? category : categoryId));

  }, [categoryId, key, search]);

  return (
    <>
      <View style={styles.searchContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          // onPress={() => alert('hello')}
          onClearPress={() => setKey('')}
          onChangeText={handleChange}
        />
      </View>
      {
        <FlatList
          data={listingDetails}
          keyExtractor={item => item?.id}
          refreshing={true}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate('DetailPage', { id: item?.id })}
              android_ripple={{ color: colors.primaryLight }}
              style={styles.resultContainer}>
              <View style={styles.resultDetails}>
                <View styles={styles.imageBox}>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: 80,
                      height: 120,
                      paddingLeft: 0,
                      marginLeft: -5,
                    }}
                    source={{
                      uri: `${item?.front_img1}`,
                    }}
                  />
                </View>
                <View style={styles.detailBox}>
                  <Text style={styles.title}>{item?.title}</Text>
                  <View style={{ width: '88%' }}>
                    <Text style={{ marginTop: 2 }}>{item?.address}</Text>
                  </View>
                  <View style={styles.rating}>
                    <Text>
                      <MaterialCommunityIcons
                        name="account"
                        size={15}
                        color={colors.primary}
                      />
                      {'   '}
                      {item?.contact_person}
                    </Text>
                  </View>
                  <Text>
                    <MaterialCommunityIcons
                      name="phone"
                      size={15}
                      color={colors.primary}
                    />
                    {'   '}
                    {item?.reg_mobile}
                  </Text>
                  <Text style={{ width: '88%' }}>
                    {item?.website ? (
                      <MaterialCommunityIcons
                        name="web"
                        size={15}
                        color={colors.primary}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="email"
                        size={15}
                        color={colors.primary}
                      />
                    )}
                    {'   '}
                    {item?.website ? item?.website : item?.email}
                  </Text>
                  <Text>
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={15}
                      color={colors.primary}
                    />
                    {'   '}
                    {item?.opening_time}
                  </Text>
                </View>
              </View>
              <View style={[styles.bottomText, { flexDirection: 'row' }]}>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: colors.primary,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text>
                    <MaterialCommunityIcons
                      name="star"
                      size={15}
                      color={colors.white}
                    />
                  </Text>
                  <Text style={{ marginLeft: 8, top: -0.6, color: colors.white }}>
                    {item.rating}
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 'auto',
                    marginRight: 20,
                    flexDirection: 'row',
                  }}>
                  <Text style={{ top: 2 }}>
                    <MaterialIcons
                      name="local-offer"
                      size={15}
                      color={colors.primary}
                    />
                    {'   '}
                  </Text>
                  <Text>{item.category}</Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      }
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
    padding: 5,
    paddingTop: 10,
  },
  title: {
    fontFamily: 'Open Sans Bold',
    marginTop: 0,
  },
  detailBox: {
    marginLeft: 15,
    alignSelf: 'flex-start',
    marginTop: -5,
  },
  imageBox: {},
  rating: {
    flexDirection: 'row',
    width: '78%',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  ratings: {
    top: 2.3,
  },
  leftText: {
    color: 'red',
  },
  bottomText: {},
});
