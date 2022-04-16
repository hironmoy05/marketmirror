import Styled from 'styled-components/native';
import {deviceHeight} from '../../../responsive';

export const Item = Styled.View`
    flex: 1;
`;

export const Container = Styled.View`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ListContainer = Styled.View`
    ${props => props.screenSizeTwo}
`;
