import Styled from 'styled-components/native';
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoBox = Styled.View`
`;
