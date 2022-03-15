import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formBox: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: -5,
    marginVertical: 30,
  },
  label: {
    position: 'absolute',
    zIndex: 2,
    marginTop: -10,
    marginLeft: 25,
    color: '#D2D2D2',
    backgroundColor: '#fff',
  },
  iconBox: {
    position: 'absolute',
    zIndex: 2,
    marginTop: 19,
    marginLeft: 14,
  },
  pickerBox: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 10,
  },
  drop: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

export default styles;
