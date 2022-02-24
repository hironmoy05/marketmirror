import Styled from 'styled-components/native';

export const Inner = Styled.View`
    background-color: #fff;
    flex: 1;
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    ${props => props.screenSizeFour}
`;

export const Frame = Styled.View`
    width: 95%;
    display: flex;
    align-items: center;
    margin-top: 4%;
`;

export const NotificationBox = Styled.View`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 4%;
    margin-top: 2%
`;

export const NotificationTextBox = Styled.View``;

export const NotificationTitle = Styled.Text`
    margin-left: 5%;
    font-family: 'Open Sans Bold';
    color: #212121;
    font-size: 17px;
`;

export const NotificationSubTitle = Styled.Text`
    font-family: 'Open Sans Bold';
    margin-left: 5%;
`;

export const NotificationDate = Styled.Text`
    align-self: flex-start;
    margin-left: 14.5%;
    font-size: 12px;
    color: #707070;
    font-family: 'Open Sans Regular';
`;
