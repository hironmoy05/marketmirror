import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchCamera } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderBar } from '../components';
import Back from '../assets/back.svg';
import Edit from '../assets/edit.svg';
import RoundLogo from '../assets/mm_logo_top_m_round.svg';
import Done from '../assets/done.svg';
import Camera from '../assets/camera.svg';
import { getUserInfo } from '../store/bugs';
import colors from '../config/colors';
import { getUserPhoto, getProfilePic } from '../store/users';

export const HeaderBarContainer = props => {
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserInfo);
  // const userPic = useSelector(getProfilePic);
  // const profilePic = userPic;

  const name = userDetails[0] ? userDetails[0].Data.name : '';
  const email = userDetails[0] ? userDetails[0].Data.email : '';
  const mobile = userDetails[0] ? userDetails[0].Data.mobile : '';

  const navigation = useNavigation();
  let Header;

  switch (props.headerTitle) {
    case 'Buy Coin':
      Header = 'Buy Coin';
      break;
    case 'Sell Coin':
      Header = 'Sell Coin';
      break;
    case 'Send Coin':
      Header = 'Send Coin';
      break;
    case 'My Profile':
      Header = 'My Profile';
      break;
    case 'KYC Verification':
      Header = 'KYC Verification';
      break;
    case 'Bank Accounts':
      Header = 'Bank Accounts';
      break;
    case 'Gift Card':
      Header = 'Gift Card';
      break;
    case 'Settings':
      Header = 'Settings';
      break;
    case 'Supports':
      Header = 'Supports';
      break;
    case 'New Bank Accounts':
      Header = 'New Bank Accounts';
      break;
    case 'Terms & Condition':
      Header = 'Terms & Condition';
      break;
    case 'Privacy Policy':
      Header = 'Privacy Policy';
      break;
    default:
      Header = 'Bitcoin Balance';
      break;
  }

  // async function handleCamera() {
  //   const result = await launchCamera({
  //     mediaType: 'photo',
  //     maxWidth: 200,
  //     maxHeight: 200,
  //     quality: 1,
  //   }, res => res ? '' : dispatch(getUserPhoto({ profilePic: res.assets[0].fileName })));
  // }

  // console.log(profilePic[0].pic)


  return (
    <HeaderBar
      buyContainer={props.buyContainer}
      profileContainer={props.profileContainer}
      ProfileContainer2={props.ProfileContainer2}
    >
      <Pressable
        style={[styles.backButton, { top: props.profilePage ? '8.5%' : '58%' }]}
        onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>
      <HeaderBar.Container>
        <HeaderBar.BitCoinTitle>{Header}</HeaderBar.BitCoinTitle>
        {props.profilePage && (
          <Pressable
            onPress={() =>
              props.profilePage2 ? '' : props.navigation.navigate('Profile2')
            }
            style={{ marginLeft: 'auto', paddingRight: '5%', top: -33 }}>
            {props.profilePage2 ? (
              <TouchableOpacity activeOpacity={.8} onPress={() => console.log('submit')}>
                <Done width={30} height={30} />
              </TouchableOpacity>
            ) : (
              <Edit width={22} height={22} />
            )}
          </Pressable>
        )}
      </HeaderBar.Container>

      {props.profilePage && (
        <>
          <View style={{ alignItems: 'center' }}>
            {props.profilePage2 ? (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: -30,
                }}>
                <View
                  style={{
                    backgroundColor: colors.white,
                    width: 120,
                    height: 120,
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {
                    // profilePic ? <Image style={{ width: 100, height: 100 }} source={profilePic[0].pic} /> : <RoundLogo width={80} height={80} />
                  }
                  {/* <RoundLogo width={80} height={80} /> */}
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: 3,
                    bottom: -4,
                    borderWidth: 2,
                    borderColor: colors.primaryDark,
                    borderRadius: 100,
                  }}>
                  <Pressable onPress={() => console.log('user')}>
                    <Camera />
                  </Pressable>
                </View>
              </View>
            ) : (
              <RoundLogo />
            )}
            {props.profilePage2 ? null : (
              <>
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: 'Open Sans Bold',
                    fontSize: 17,
                    marginTop: 5,
                  }}>
                  {name}
                </Text>
                <Text
                  style={{
                    color: colors.white,
                    opacity: 0.5,
                    fontFamily: 'Open Sans Bold',
                    fontSize: 17,
                    marginTop: 5,
                  }}>
                  {email}
                </Text>
              </>
            )}
          </View>
        </>
      )}
    </HeaderBar>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    paddingLeft: '12%',
  },
});
