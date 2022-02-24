import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTabContainer} from './homeTabContainer';
import {PortfolioTabContainer} from './portfolioTabContainer';
import {HistoryTabContainer} from './historyTabContainer';
import {NotificationTabContainer} from './notificationTabContainer';
import {Image, Text} from 'react-native';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

export const TabsCotainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.primary,
          minHeight: 60,
          paddingBottom: 5,
          paddingTop: 5,
          paddingLeft: 20,
          paddingRight: 20,
        },
        tabBarLabelStyle: {fontSize: 11, fontFamily: 'Open Sans Bold'},
      }}>
      <Tab.Screen
        name="HomeTabScreen"
        component={HomeTabContainer}
        options={{
          // title: 'Dashboard',
          tabBarLabel: ({focused, size, color}) => (
            <Text style={{color: `${focused ? '#fff' : '#A8A8A8'}`}}>Home</Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home_selected.png')
                  : require('../assets/icons/home_1.png')
              }
              style={{
                width: size,
                height: size,

                // backgroundColor: `${focused ? '#013567' : '#fff'}`,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PortfolioTabScreen"
        component={PortfolioTabContainer}
        options={{
          // title: 'Portfolio',
          tabBarLabel: ({focused, size, color}) => (
            <Text style={{color: `${focused ? '#fff' : '#A8A8A8'}`}}>
              Portfolio
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/portfolio_selected.png')
                  : require('../assets/icons/portfolio.png')
              }
              style={{
                width: size,
                height: size,
                backgroundColor: `${
                  focused ? colors.primaryDark : colors.primaryDark
                }`,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTabScreen"
        component={HistoryTabContainer}
        options={{
          tabBarLabel: ({focused, size, color}) => (
            <Text style={{color: `${focused ? '#fff' : '#A8A8A8'}`}}>
              History
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/history_selected.png')
                  : require('../assets/icons/history.png')
              }
              style={{
                width: size,
                height: size,
                backgroundColor: `${focused ? '#fff' : '#013567'}`,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationTabScreen"
        component={NotificationTabContainer}
        options={{
          tabBarLabel: ({focused, size, color}) => (
            <Text style={{color: `${focused ? '#fff' : '#A8A8A8'}`}}>
              Notification
            </Text>
          ),
          tabBarIcon: ({focused, size, color}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/notification_selected.png')
                  : require('../assets/icons/notification.png')
              }
              style={{
                width: size,
                height: size,
                backgroundColor: `${focused ? '#fff' : '#013567'}`,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
