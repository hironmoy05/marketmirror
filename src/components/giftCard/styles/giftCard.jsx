import Styled from 'styled-components';
import { Pressable } from 'react-native';

export const Inner = Styled.View`
    position: relative;
    top: -8%
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    margin-bottom: 5px
`;

export const CardContainer = Styled.View`
    width: 95%;
    background-color: ${props => props.cardColor};
    border-width: 2px;
    border-color: #D2D2D266; 
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    padding: 20px;
`;

export const TopContainer = Styled.View`
    display: flex;
    flex-direction: row;
`;

export const PriceContainer = Styled.View`
    margin-left: 14px
`;

export const BottomContainer = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RightSide = Styled.View`
    display: flex;
    justifyContent: flex-end;
`;

export const LeftSide = Styled.View``;

export const CardTitle = Styled.Text`
    font-family: Open Sans Bold;
    color: #fff;
    font-size: 12px;
    opacity: .5;
`;

export const CardSubTitle = Styled.Text`
    font-family: Open Sans Bold;
    color: #fff;
    font-size: 18px
`;

export const CardSubTitle2 = Styled.Text`
    font-family: Open Sans Bold;
    color: #fff;
    opacity: .6;
    top: -1px;
`; 

export const CardBtn = Styled(Pressable)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 7% 7%;
    background-color: #fff;
    border-radius: 7px;
`;

export const CardText = Styled.Text`
    font-family: Open Sans Bold;
    color: #fff;
    font-size: 20px;
    margin-top: ${props => props.marginT ? 'auto': '20px'};
    ${props => props.opac}
`;