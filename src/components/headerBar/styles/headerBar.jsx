import Styled from 'styled-components';

import colors from '../../../config/colors';

export const Inner = Styled.View`
    padding-top: 5%;
    background-color: ${colors.primaryDark}; 
    padding-bottom: ${props => props.profileContainer ? '5%' : '15%'}; 
    border-bottom-left-radius: 25px; 
    border-bottom-right-radius: 25px;
    ${props => props.buyContainer};
    ${props => props.kycContainer}
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
`;

export const BitCoinTitle = Styled.Text`
    font-family: 'Open Sans Bold';
    font-size: 18px;
    color: #fff;
    padding-bottom: 2%;
`;