//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import colors from '../../config/colors';
import styles from './style';
import Country from '../../assets/country.svg';
import Dropdown from '../../assets/dropdown.svg';
import ModalPicker from '../ModalPicker/ModalPicker';

// create a component
const Picker = ({setPickerValue}) => {
  const [pickerData, setPickerData] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const OPTIONS = [
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
    'white',
    'purple',
  ];

  useEffect(() => {
    setPickerValue(pickerData);
  }, [pickerData]);

  return (
    <View style={[styles.formBox]}>
      <Text style={styles.label}>Label</Text>
      <View style={styles.iconBox}>
        <Country />
      </View>
      <View
        style={[
          styles.pickerBox,
          {borderColor: pickerData ? colors.primaryDark : 'rgba(0, 0, 0, 0.3)'},
        ]}>
        <Text style={styles.pickerText}>
          {!!pickerData ? pickerData : 'Select Country'}
        </Text>
        <TouchableOpacity
          style={styles.drop}
          onPress={() => setIsModalVisible(true)}>
          <Dropdown width={20} height={20} />
        </TouchableOpacity>
      </View>
      <ModalPicker
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        pickerData={pickerData}
        setPickerData={setPickerData}
        OPTIONS={OPTIONS}
        title="Color"
      />
    </View>
  );
};

//make this component available to the app
export default Picker;
