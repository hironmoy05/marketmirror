import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    backgroundColor: '#fff',
    width: WIDTH - 30,
    height: HEIGHT / 2,
  },
  selectText: {
    marginVertical: 15,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontFamily: 'Roboto Medium',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#D2D2D2',
  },
});

export default styles;
