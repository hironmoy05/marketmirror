import Styled from 'styled-components';
import {StyleSheet} from 'react-native';

import {calcWidth, calcHeight} from '../../../responsive';
import colors from '../../../config/colors';

export const Container = Styled.View``;

export const Frame = Styled.View`
    border: none;
    border: 2px solid ${props =>
      props.selectCountryInputColor ? `${colors.primaryDark}` : '#A8A8A8'};
    border-radius: 8px;
    padding: 0 0 0 ${calcWidth(10)}px;
    color: #C9C9C9;
    margin-top: 25px;
    `;

export const MobileFrame = Styled.View`
    border: none;
    border: 2px solid #A8A8A8;
    border-radius: 8px;
    padding: 0 0 0 ${calcWidth(10)}px;
    color: #C9C9C9;
    margin-top: ${calcHeight(5)}px;
    `;

export const FormBoxPicker = Styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 2px solid ${props =>
      props.phoneNumberInputColor ? `${colors.primaryDark}` : '#A8A8A8'};
    border-radius: 8px;
    margin-top: 25px;
    overflow: hidden
`;

export const CheckBoxText = Styled.Text`
`;

// Inlinel Styles for mobile code

export const Styles = StyleSheet.create({
  codeStyle: {
    position: 'absolute',
    zIndex: 2,
    top: '30%',
    left: '10%',
    width: 90,
    color: '#333',
  },
});
