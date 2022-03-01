import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {useNavigation, StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../components/appText';
import Whatsapp from '../assets/whatsapp.svg';
import Redo from '../assets/redo2.svg';
import ArrowLeft from '../assets/chevron-left.svg';
import MarketMirror from '../assets/mm_logo_top_m_round.svg';
import colors from '../config/colors';

export const DetailPageContainer = () => {
  const navigation = useNavigation();
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
            source={require('../assets/images/restaurantIn.jpeg')}
          />
        </View>
        <View style={styles.textBox}>
          <AppText style={styles.title}>
            Star Planet Delight Dining & Bar
          </AppText>
          <Text style={styles.heartIcon}>
            <MaterialCommunityIcons name="cards-heart-outline" size={18} />
          </Text>
          <AppText style={styles.locationText}>Vihar Vest</AppText>
        </View>
        <View style={styles.ratings}>
          <Text>4.1</Text>
          <View style={styles.icons}>
            <MaterialCommunityIcons name="star" size={13} color={'orangered'} />
            <MaterialCommunityIcons name="star" size={13} color={'orangered'} />
            <MaterialCommunityIcons name="star" size={13} color={'orangered'} />
            <MaterialCommunityIcons name="star" size={13} color={'orangered'} />
            <MaterialCommunityIcons
              // name="star-half-full"
              name="star-outline"
              size={13}
              color={'orangered'}
            />
          </View>
          <AppText style={styles.rating}>2996 Ratings</AppText>
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
            <AppText style={styles.text}>Tarapur M.I.D.C Shivaji Nagar</AppText>
            <AppText style={styles.text}>Salvad Faghar -281004</AppText>
          </View>
        </View>
        <View style={styles.divider2} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="alert-outline" size={20} />
          <AppText style={styles.text}>
            ConronaVirus (COVID-19) will affect on hours and services may differ
          </AppText>
        </View>
        <View style={styles.divider2} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="clock-outline" size={20} />
          <AppText style={styles.text}>Open Now : Open 24 Hrs</AppText>
        </View>
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
  },
});
