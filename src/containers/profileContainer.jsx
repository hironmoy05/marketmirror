import React, { useState, useContext } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { HeaderBarContainer } from './headerBarContainer';
import { useNavigation } from '@react-navigation/native';
import Profile from '../assets/profile.svg';
import Email from '../assets/email.svg';
import Mobile from '../assets/mobile.svg';
import Authentication from '../assets/2fa.svg';
import ToggleOn from '../assets/toggle_on.svg';
import ToggleOff from '../assets/toggle_off.svg';
import { getUserInfo } from '../store/bugs';
import { useSelector } from 'react-redux';

import colors from '../config/colors';

export function ProfileContainer() {
  const userDetails = useSelector(getUserInfo);
  const navigation = useNavigation();
  const [toggleBtn, setToggleBtn] = useState(false);

  const name = userDetails[0] ? userDetails[0].Data.name : '';
  const email = userDetails[0] ? userDetails[0].Data.email : '';
  const mobile = userDetails[0] ? userDetails[0].Data.mobile : '';
  const address = userDetails[0]?.address1 ? userDetails[0].Data.address1 : 'No Data';
  const country = userDetails[0] ? userDetails[0].Data.country : '';
  const state = userDetails[0] ? userDetails[0].Data.state : '';
  const city = userDetails[0] ? userDetails[0].Data.city : '';
  const gender = userDetails[0]?.Data.gender !== null ? userDetails[0]?.Data.gender : '-';
  const dob = userDetails[0] && userDetails[0].Data.dob
  const occupation = userDetails[0]?.Data.occupation !== null ? userDetails[0].Data.occupation : '-';

  const sponsor = userDetails[0] ? userDetails[0].Data.sponsor : '';
  const referralCode = userDetails[0] ? userDetails[0].Data.user_id : '';
  const wallet = userDetails[0] && userDetails[0].Data.wallet;
  const ewallet = userDetails[0] && userDetails[0].Data.ewallet;

  console.log('users Details', userDetails[0].Data)

  return (
    <ScrollView>
      <HeaderBarContainer
        navigation={navigation}
        headerTitle={'My Profile'}
        profilePage={'profilePage'}
        profileContainer={'profileContainer'}
      />

      <View
        style={{
          flex: 1,
          paddingLeft: '5%',
          paddingRight: '5%',
          backgroundColor: colors.white,
          paddingTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingBottom: 30
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Profile />
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
              }}>
              02/04/2022
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Date of Registeration
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Profile />
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
              }}>
              {name}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Name
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 40,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Email style={{ position: 'relative', top: 5, left: 5 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
              }}>
              {mobile}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Mobile
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 40,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
              }}>
              {email}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Email
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 40,
            width: 163
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Authentication style={{ left: 5 }} />
            <Text
              style={{
                marginLeft: 12,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
              }}>
              Consumer(Are you a Businessmen)
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginRight: 'auto' }}>
            <Text
              style={{
                fontFamily: 'Open Sans Medium',
                color: colors.primaryDark,
                top: 3,
                marginLeft: 45
              }}>
              {toggleBtn ? 'Enable' : 'Disable'}
            </Text>
            <Pressable onPress={() => setToggleBtn(!toggleBtn)}>
              {toggleBtn ? <ToggleOn /> : <ToggleOff style={{ top: -6 }} />}
            </Pressable>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {/* H.No-222/A-2, Aashpuri Colony */}
              {address}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Address
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {country}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Country
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {state}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            State
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {city}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            City
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {dob}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            DOB
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {occupation}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Occupation
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {gender}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Gender
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {sponsor}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Sponsor Name
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            paddingTop: 30,
            marginBottom: 30
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {referralCode}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Referral Code
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            marginBottom: 30
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ position: 'relative', top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {wallet}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            Wallet
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: 'Open Sans Medium',
            marginBottom: 30
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Mobile style={{ top: 5, left: 7 }} />
            <Text
              style={{
                marginLeft: 18,
                fontFamily: 'Open Sans Medium',
                fontSize: 17,
                color: '#212121',
                width: 200
              }}>
              {ewallet}
            </Text>
          </View>
          <Text
            style={{ fontFamily: 'Open Sans Medium', color: colors.primaryDark }}>
            E-Wallet
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
