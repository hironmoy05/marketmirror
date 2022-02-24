import Styled from 'styled-components/native';

export const Inner = Styled.View`
    position: relative;
    top: -4%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    padding: 8px;
    ${props => props.bidState}
`;

export const Container = Styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${props => props.addBorder};
`;

export const Frame = Styled.View`
`;

export const BidTitle = Styled.Text`
    font-family: Open Sans Medium;
    color: #013567;
    ${props => props.fontsSize}
    ${props => props.pad}
`;

export const BidSubTitle = Styled.Text`
    font-family: Open Sans Regular;
    color: #707070;
    ${props => props.alignText}
`;
export const BidStatus = Styled.Text`
    font-family: 'Open Sans Bold';
    ${props => props.statusColor};
`;