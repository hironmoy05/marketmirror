import Styled from 'styled-components/native';
import { calcHeight } from '../../../responsive';

export const Inner = Styled.View`
    background-color: #013567;
    height: 20%;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
    display: flex;
    align-items: center;
    margin-top: -10%;
`;

// export const Container = Styled.View`
//     margin-top: -${Number(Math.floor(deviceHeight/35))}%;
//     height: ${Math.floor(deviceHeight/2)}px;
// `;
export const Container = Styled.View`
    margin-top: ${calcHeight(27)}px;
    ${props => props.screenSizeThree}
`;