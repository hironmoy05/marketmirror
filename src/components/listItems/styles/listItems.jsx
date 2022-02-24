import Styled from 'styled-components/native';

export const Container = Styled.View`
    display: flex;
    justify-content: center;
    ${props => props.screenSizeOne}
`;

export const ItemWrapper = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    border-bottom: 2px solid #222;
    margin-top: 10px;
    ${(props) => props.border};
`;

export const Divider = Styled.View``;

export const LeftWrapper = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props => props.wrapperPosition}
`;

export const RightWrapper = Styled.View`
    ${props => props.balanceCardWrapper}

`;

export const TitleWrapper = Styled.View`
margin-left: 20px;
`;

export const PriceWrapper = Styled.View``;

export const ListTitle = Styled.Text`
    font-family: 'Open Sans Bold';
    color: #212121;
    ${props => props.font};
`;

export const ListSubTitle = Styled.Text`
    font-family: 'Open Sans Regular';
    color: #707070;
`;

export const ListPrice = Styled.Text`
    font-family: 'Open Sans Bold';
`;

export const ListPercent = Styled.Text`
    fontFamily: 'Open Sans Regular';
    ${props => props.colors}
    text-align: right;
`;