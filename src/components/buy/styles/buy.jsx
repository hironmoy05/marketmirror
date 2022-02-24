import Styled from 'styled-components/native';

export const Inner = Styled.View`
    background-color: #fff;
    ${props => props.screenSizeOne};
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    width: 95%;
`;

export const Frame = Styled.View`
    width: 95%;
    display: flex;
    align-items: center;
    margin-top: 4%;

`;

export const HistoryBox = Styled.View`
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center
    justify-content: space-between;
    padding-bottom: 4%;
    margin-top: 2%
`;

export const HistoryRightWrapper = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center
`;

export const HistoryRightWrapperInner = Styled.View`
    margin-left: 10%
`;

export const HistoryLeftWrapper = Styled.View``;

export const HistoryTitle = Styled.Text`
    margin-left: 5%;
    margin-top: 5%;
    font-family: 'Open Sans Bold';
    color: #212121;
    font-size: 18px;
`;

export const HistoryCoinDate = Styled.Text`
    align-self: flex-start;
    margin-left: 8%;
    font-size: 12px;
    color: #707070;
    font-family: 'Open Sans Regular';
`;

export const HistoryCoinTitle = Styled.Text`
    font-family: 'Open Sans Bold';
    color: #212121;
`;

export const HistoryCoinFigure = Styled.Text`
    font-family: 'Open Sans Regular';
    color: #707070;
`;

export const HistoryCoinPrice = Styled.Text`
    font-family: 'Open Sans Medium';
    color: #1DDB5C;
`;
