import Styled from 'styled-components/native';
import {deviceHeight} from '../../../responsive';

export const Item = Styled.View`
    height: ${deviceHeight}px;
    position: relative;
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ListContainer = Styled.View`
    ${props => props.screenSizeTwo}
`;
