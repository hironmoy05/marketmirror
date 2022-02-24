import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import {View} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native';

import ArrowLeft from '../assets/arrow-left.svg';

export const SearchContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableWithoutFeedback
        onPress={() => navigation.dispatch(StackActions.replace('Drawer'))}
        style={{padding: 20}}>
        <ArrowLeft />
      </TouchableWithoutFeedback>
      <SearchBar
        style={{backgroundColor: '#edf0ee', shadowColor: '#000'}}
        placeholder="Search here"
        onPress={() => alert('hello')}
        onChangeText={text => console.log(text)}
      />
    </View>
  );
};
