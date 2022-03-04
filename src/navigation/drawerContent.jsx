import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Title, Caption, Drawer} from 'react-native-paper';
import LogoRound from '../assets/mm_logo_top_m_round.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation, StackActions} from '@react-navigation/native';
import RNRestart from 'react-native-restart';
import {getUserInfo} from '../store/bugs';
import {signoutRequest} from '../store/api';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../config/colors';

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserInfo);

  // dispatch({type:'error', payload: {message: 'An error occured'}});

  const name = userDetails[0] ? userDetails[0].Data.name : '';
  const email = userDetails[0] ? userDetails[0].Data.email : '';

  const navigation = useNavigation();

  async function handleLogout() {
    await AsyncStorage.multiRemove(['userEmail', 'userName', 'user_id']);
    dispatch(signoutRequest());
    RNRestart.Restart();
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.drawerLogoBox}>
              <View style={styles.drawerLogo}>
                <LogoRound />
              </View>
            </View>
            <View style={styles.userInfoText}>
              <Title style={styles.title}>{name}</Title>
              <Caption style={styles.caption}>{email}</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/home.png')}
                />
              )}
              label="Home"
              labelStyle={styles.label}
              onPress={() => {
                navigation.dispatch(StackActions.replace('Drawer'));
                props.navigation.dispatch(DrawerActions.closeDrawer());
              }}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/profile.png')}
                />
              )}
              label="Profile"
              labelStyle={styles.label}
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/kyc.png')}
                />
              )}
              label="KYC Verification"
              labelStyle={styles.label}
              // onPress={() => navigation.navigate('KycVerification')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/bank.png')}
                />
              )}
              label="Bank Account"
              labelStyle={styles.label}
              // onPress={() => navigation.navigate('BankAccount')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/gift_card.png')}
                />
              )}
              label="Gifting Card Coupns"
              labelStyle={styles.label}
              // onPress={() => navigation.navigate('GiftCard')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/settings.png')}
                />
              )}
              label="Settings"
              labelStyle={styles.label}
              // onPress={() => navigation.navigate('Settings')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/support.png')}
                />
              )}
              label="Supports"
              labelStyle={styles.label}
              // onPress={() => navigation.navigate('Supports')}
            />
          </View>
          <View style={styles.drawerDivider}>
            <DrawerItem
              icon={(color, size) => (
                <Image
                  color={color}
                  size={size}
                  source={require('../assets/icons/logout.png')}
                />
              )}
              labelStyle={{color: '#FE1D1D', marginLeft: -14}}
              label="Logout"
              onPress={() => handleLogout()}
            />
          </View>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerLogoBox: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: colors.white,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  drawerLogo: {
    alignItems: 'center',
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: colors.primaryDark,
    marginTop: -5,
    paddingTop: '15%',
    paddingBottom: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#E3EDF3',
  },
  userInfoText: {
    marginLeft: '5%',
  },
  title: {
    fontFamily: 'Open Sans Bold',
    color: '#fff',
    fontSize: 17,
  },
  caption: {
    color: '#fff',
    fontFamily: 'Open Sans Regular',
    opacity: 0.8,
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  label: {
    fontFamily: 'Open Sans Regular',
    color: '#212121',
    marginLeft: -14,
  },
});
