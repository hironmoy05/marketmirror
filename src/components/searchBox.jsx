import React, {useEffect} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation, StackActions} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Cross from '../assets/cross.svg';
import Search from '../assets/search1.svg';
import {calcWidth} from '../responsive';
import {getUserIdFromStore} from '../store/bugs';
import {loadLists} from '../store/listing';

export const SearchBox = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Uid = useSelector(getUserIdFromStore);

  console.log('from search box', Uid);
  useEffect(() => {
    dispatch(loadLists(Uid));
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Search')}
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
