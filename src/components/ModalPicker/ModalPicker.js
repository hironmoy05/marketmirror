//import liraries
import React from 'react';
import {Text, View, Modal, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

// create a component
const ModalPicker = ({
  isModalVisible,
  setIsModalVisible,
  setPickerData,
  OPTIONS,
  title,
}) => {
  const onPressItem = option => {
    setIsModalVisible(false);
    setPickerData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.pickerOption}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text style={styles.selectText}>{item}</Text>
      </TouchableOpacity>
    );
  });
  return (
    <Modal
      visible={isModalVisible}
      statusBarTranslucent={true}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsModalVisible(false)}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>{title}</Text>
          <ScrollView>{option}</ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

//make this component available to the app
export default ModalPicker;
