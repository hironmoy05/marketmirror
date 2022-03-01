import Styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native';

import colors from '../../../config/colors';

export const Item = Styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;

export const SafeArea = Styled(SafeAreaView)`
    flex: 1;
`;

export const Container = Styled.View`
    display: flex;
    align-item: center;
    height: 500px;
    padding: 30px;
    margin-top: auto
`;

export const Frame = Styled.View`
    display: flex;
    align-items: center;
    margin-top: auto;
`;

export const RegularButton = Styled(Button)`
    background-color: #fff;
`;

export const Title = Styled.Text`
    color: #fff;
    font-size: 37px;
    font-weight: 400;
    line-height: 42px;
    margin-left: 10px;
`;

export const SubTitle = Styled.Text`
    font-size: 14px;
    color: #fff;
    width: 300px;
    opacity: .5;
    margin-top: 1px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 30px;
`;

export const ButtonText = Styled.Text`
    font-size: 16px;
    color: ${colors.primaryDark};
    font-weight: 700;
`;

export const LogoBox = Styled.View`
    display: flex;
    align-items: center;
`;
