import React, {useEffect, useState} from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation, StackActions, useRoute} from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import AppText from '../components/appText';
import Whatsapp from '../assets/whatsapp.svg';
import Redo from '../assets/redo2.svg';
import ArrowLeft from '../assets/chevron-left.svg';
import MarketMirror from '../assets/mm_logo_top_m_round.svg';
import colors from '../config/colors';
import {getListings} from '../store/listing';

export const DetailPageContainer = () => {
  const [currentDetails, setCurrentDetails] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const data = useSelector(getListings);
  const details = data.Data;
  const detailsId = route.params.id;

  useEffect(() => {
    details.forEach(item => {
      if (item.id === route.params.id) {
        console.log(item);
        setCurrentDetails(item);
      }
    });
  }, [detailsId]);

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '98%',
          }}>
          <TouchableOpacity
            style={{marginTop: 13, top: -2, marginLeft: 15, marginBottom: 10}}
            onPress={() => navigation.dispatch(StackActions.replace('Drawer'))}>
            <ArrowLeft />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              width: '80%',
              paddingTop: 8,
              paddingBottom: 8,
              marginLeft: 10,
              flexDirection: 'row',
            }}>
            <MarketMirror width={32} height={32} />
            <AppText
              style={{
                marginLeft: 15,
                color: colors.white,
                fontFamily: 'Open Sans Bold',
              }}>
              MarketMirror
            </AppText>
          </View>
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
        />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{uri: `${currentDetails?.front_img1}`}}
          />
          {currentDetails.mm_thumb === '1' && (
            <View style={{position: 'absolute', top: 113, left: 284}}>
              <View
                style={{
                  width: 27,
                  height: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: colors.white,
                  backgroundColor: colors.primary,
                }}>
                <AppText>
                  <Foundation
                    name="sheriff-badge"
                    size={18}
                    color={colors.white}
                  />
                </AppText>
              </View>
            </View>
          )}
          {/* <View>
              <Image source={{uri: `${currentDetails?.mm_thumb}`}} />
            </View> */}
        </View>
        <View style={styles.textBox}>
          <AppText style={styles.title}>
            {/* Star Planet Delight Dining & Bar */}
            {currentDetails.title}
          </AppText>
          <Text style={styles.heartIcon}>
            <MaterialCommunityIcons name="cards-heart-outline" size={18} />
          </Text>
          <AppText style={styles.locationText}>
            {currentDetails.local_area}
          </AppText>
        </View>
        <View style={[styles.bottomText, {flexDirection: 'row'}]}>
          <View
            style={{
              width: 50,
              height: 20,
              backgroundColor: colors.primary,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
              borderRadius: 5,
            }}>
            <Text>
              <MaterialCommunityIcons
                name="star"
                size={15}
                color={colors.white}
              />
            </Text>
            <Text style={{marginLeft: 8, top: -0.6, color: colors.white}}>
              {currentDetails.rating}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              top: 8,
            }}>
            <Text style={{top: 2}}>
              <MaterialIcons
                name="local-offer"
                size={15}
                color={colors.primary}
              />
              {'   '}
            </Text>
            <Text>{currentDetails.category}</Text>
          </View>
        </View>
        <View style={[styles.icons, styles.icons2]}>
          <View style={styles.iconBox}>
            <Pressable
              onPress={() => console.log('Pressed')}
              style={styles.icon}>
              <MaterialCommunityIcons
                name="phone"
                size={30}
                color={colors.primary}
              />
            </Pressable>
            <AppText style={styles.iconText}>Call</AppText>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="google-maps"
                size={32}
                color={colors.primary}
              />
            </View>
            <AppText style={styles.iconText}>Map</AppText>
          </View>
          <View style={styles.iconBox}>
            <View>
              <View style={styles.icon}>
                <View style={styles.whatIcon}>
                  <Whatsapp />
                </View>
              </View>
            </View>
            <AppText style={styles.iconText}>WhatsApp</AppText>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.icon}>
              <Redo width={30} height={30} />
            </View>
            <AppText style={styles.iconText}>Share</AppText>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="map" size={20} />
          <View style={styles.address}>
            <AppText style={styles.text}>{currentDetails.address}</AppText>
          </View>
        </View>
        <View style={styles.divider2} />
        {currentDetails.website != '' ? (
          <>
            <TouchableOpacity
              onPress={() => Linking.openURL(currentDetails.website)}
              style={styles.details}>
              <MaterialCommunityIcons name="web" size={20} />
              <AppText style={styles.text}>{currentDetails.website}</AppText>
            </TouchableOpacity>
            <View style={styles.divider2} />
          </>
        ) : currentDetails.whatsApp === '' ? null : (
          <>
            <View>
              <MaterialCommunityIcons
                name="whatsApp"
                size="20"
                color={'green'}
              />
              <AppText>{currentDetails.whatsApp}</AppText>
            </View>
            <View style={styles.divider2} />
          </>
        )}
        <View style={styles.details}>
          <MaterialCommunityIcons name="alert-outline" size={20} />
          <AppText style={styles.text}>
            ConronaVirus (COVID-19) will affect on hours and services may differ
          </AppText>
        </View>
        <View style={styles.divider2} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="clock-outline" size={20} />
          <AppText style={styles.text}>
            Open Time :{' '}
            {currentDetails.opening_time === ''
              ? 'Sunday'
              : currentDetails.opening_time}
          </AppText>
        </View>
        <View style={styles.divider2} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="map-marker" size={20} />
          <AppText style={styles.text}>
            Served In : {currentDetails.target_area}
          </AppText>
        </View>
        <View style={styles.divider2} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.primary,
    paddingBottom: 20,
  },
  mainContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: colors.white,
  },
  imageBox: {
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textBox: {
    marginTop: 15,
  },
  title: {
    fontFamily: 'Open Sans Bold',
  },
  heartIcon: {
    marginLeft: 10,
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    color: colors.black,
    marginTop: 5,
  },
  icons: {
    flexDirection: 'row',
    top: 3,
  },
  ratings: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    top: 3,
  },
  rating: {
    fontSize: 12,
    top: 2,
  },
  icons2: {
    width: '100%',
    justifyContent: 'space-between',
  },
  iconBox: {
    marginTop: 25,
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whatIcon: {
    marginTop: -16,
    marginLeft: -10,
    marginRight: 8,
    marginBottom: -5,
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E3EDF3',
    marginTop: 25,
  },
  divider2: {
    borderBottomWidth: 1,
    borderBottomColor: '#E3EDF3',
    marginTop: 15,
  },
  alert: {
    marginTop: 15,
    flexDirection: 'row',
  },
  details: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    marginLeft: 10,
    width: '80%',
  },
});
