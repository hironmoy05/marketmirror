import React, { useEffect, useState, useRef } from 'react';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Share from 'react-native-share';
import Modal from 'react-native-modal';

import AppText from '../components/appText';
import Whatsapp from '../assets/whatsapp.svg';
import Redo from '../assets/redo2.svg';
import ArrowLeft from '../assets/chevron-left.svg';
import MarketMirror from '../assets/mm_logo_top_m_round.svg';
import colors from '../config/colors';
import { getListings, getListingDetails, listDetails } from '../store/listing';
import { SearchBox } from '../components/searchBox';
import { getUserInfo } from '../store/bugs';
import Carousel from '../components/carousel/carousel';
import { PixelDeviceHeight, deviceWidth, deviceHeight } from '../responsive';
import { loadImages, pics } from '../store/gallery';


export const DetailPageContainer = () => {
  const [currentDetails, setCurrentDetails] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const ref = useRef(null);

  const navigation = useNavigation();
  const route = useRoute();
  const data = useSelector(getListings);
  const details = data.Data;
  const userDetails = useSelector(getUserInfo);
  const lists = useSelector(getListingDetails);
  const gallerys = useSelector(pics);

  const detailsId = route.params.id;
  const id = userDetails[0].Data.uid;
  const gallery = gallerys[0]?.Status;


  useEffect(() => {
    dispatch(listDetails(id, detailsId));

    dispatch(loadImages(id, detailsId))
  }, [detailsId, id]);

  const userDes = lists ? lists[0] : [];

  const whatsAppShare = async () => {
    const shareOptions = {
      message: userDes?.title + '\n',
      url: `https://www.marketmirror.info/business/profile/${userDes?.slug}`,
      social: Share.Social.WHATSAPP,
    };

    try {
      const shareResponse = await Share.shareSingle(shareOptions);
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log('error from share', error);
    }
  };

  const customeShare = async () => {
    const shareOptions = {
      message: userDes?.title + '\n',
      url: `https://www.marketmirror.info/business/profile/${userDes?.slug}`,
    };

    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log('error from share', error);
    }
  };

  useEffect(() => {
    details.forEach(item => {
      if (item?.id === route?.params.id) {
        setCurrentDetails(item);
      }
    });
  }, [detailsId]);

  function mobileNumber() {
    const arrayNum = userDes?.reg_mobile?.split('');

    if (arrayNum?.length > 10) {
      const filterArray = arrayNum?.filter(
        index => index !== ' ' && index !== '+' && index !== '-',
      );
      console.log(filterArray);
    }
    return arrayNum?.join('');
  }

  return (
    <ScrollView>
      <Modal
        isVisible={modalVisible}
        deviceHeight={PixelDeviceHeight}
        deviceWidth={deviceWidth}
        backdropTransitionOutTiming={0}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0 }}>
        <Carousel />
      </Modal>
      <View style={styles.searchContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '98%',
          }}>
          <TouchableOpacity
            style={{ marginTop: 13, top: -2, marginLeft: 15, marginBottom: 10 }}
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
        <View style={{ alignItems: 'center', zIndex: 10, paddingHorizontal: 10 }}>
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('Search')}>
            <SearchBox />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{ uri: `${userDes?.front_img1}` }}
          />
          {userDes?.mm_thumb === '1' && (
            <View style={{ position: 'absolute', top: 113, left: 284 }}>
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
        </View>
        <View style={styles.textBox}>
          <AppText style={styles.title}>{userDes?.title}</AppText>
          <Text style={styles.heartIcon}>
            <MaterialCommunityIcons name="cards-heart-outline" size={18} />
          </Text>
          <AppText style={styles.locationText}>
            {userDes?.local_area}
          </AppText>
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
            <Text style={{ marginLeft: 8, top: -0.6, color: colors.white }}>
              {userDes?.rating}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 'auto',
              flexDirection: 'row',
              top: 8,
            }}>
            <Text style={{ top: 2 }}>
              <MaterialIcons
                name="local-offer"
                size={15}
                color={colors.primary}
              />
              {'   '}
            </Text>
            <Text>{userDes?.category}</Text>
          </View>
        </View>
        <View style={[styles.icons, styles.icons2]}>
          <View style={styles.iconBox}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel: ${mobileNumber()}`)}
              style={styles.icon}>
              <MaterialCommunityIcons
                name="phone"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={whatsAppShare}
                  style={styles.whatIcon}>
                  <Whatsapp />
                </TouchableOpacity>
              </View>
            </View>
            <AppText style={styles.iconText}>WhatsApp</AppText>
          </View>
          <View style={styles.iconBox}>
            <TouchableOpacity onPress={customeShare} style={styles.icon}>
              <Redo width={30} height={30} />
            </TouchableOpacity>
            <AppText style={styles.iconText}>Share</AppText>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="map" size={20} />
          <View style={[styles.address, { width: '95%' }]}>
            <AppText style={styles.text}>{userDes?.address}</AppText>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.details}>
          <Fontisto name="person" size={20} />
          <View style={[styles.address, { width: '95%' }]}>
            <AppText style={styles.text}>{userDes?.contact_person}</AppText>
          </View>
        </View>
        <View style={styles.divider2} />
        {userDes?.website !== '' ? (
          <>
            <TouchableOpacity
              onPress={() => Linking.openURL(userDes?.website)}
              style={styles.details}>
              <MaterialCommunityIcons name="web" size={20} />
              <AppText style={styles.text}>{userDes?.website}</AppText>
            </TouchableOpacity>
            <View style={styles.divider2} />
          </>
        ) : userDes?.whatsApp === '' ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '5%',
              }}>
              <MaterialCommunityIcons name="phone" size={20} color={'grey'} />
              <AppText style={{ marginLeft: 12, fontSize: 15 }}>
                {userDes?.mobile}
              </AppText>
            </View>
            <View style={styles.divider2} />
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '5%',
              }}>
              <MaterialCommunityIcons
                name="whatsapp"
                size={20}
                color={'grey'}
              />
              <AppText style={{ marginLeft: 12 }}>
                {userDes?.whatsApp}
              </AppText>
            </View>
            <View style={styles.divider2} />
          </>
        )}
        <View style={styles.details}>
          <MaterialIcons name="miscellaneous-services" size={20} />
          <AppText style={styles.text}>
            {userDes?.services}
          </AppText>
        </View>
        <View style={styles.divider} />
        {
          userDes?.email === '' ? null : (
            <>
              <View style={styles.details}>
                <MaterialIcons name="email" size={20} />
                <AppText style={styles.text}>
                  {userDes?.email}
                </AppText>
              </View>
              <View style={styles.divider} />
            </>
          )
        }
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
            {userDes.opening_time === ''
              ? 'Sunday'
              : userDes.opening_time}
          </AppText>
        </View>
        <View style={styles.divider2} />
        <View style={styles.details}>
          <MaterialCommunityIcons name="map-marker" size={20} />
          <AppText style={styles.text}>
            Served In : {userDes.target_area}
          </AppText>
        </View>
        <View style={styles.divider2} />
        {
          gallery === 'Error' ? null : (
            <>
              <View style={styles.details}>
                <MaterialCommunityIcons name="view-gallery-outline" size={20} />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <AppText style={[styles.text, { width: '100%' }]}>
                    Gallery: Click To View Images
                  </AppText>
                </TouchableOpacity>
              </View>
              <View style={styles.divider2} />
            </>
          )
        }
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

  // Swiper
  swiperContainer: {
    height: '30%',
    alignItems: 'center',
  },
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
});
