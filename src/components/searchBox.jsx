import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation, StackActions} from '@react-navigation/native';
import {View, Text, Image, Pressable} from 'react-native';

import Cross from '../assets/cross.svg';
import Search from '../assets/search1.svg';
import {calcWidth} from '../responsive';

export const SearchBox = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.dispatch(StackActions.replace('Search'))}
      style={{
        backgroundColor: '#edf0ee',
        padding: 6,
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <Pressable style={{left: 1, top: 2}}>
          <Search />
        </Pressable>
        <View style={{left: calcWidth(-23)}}>
          <Text>Search here</Text>
        </View>
        <View>
          <Cross />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};