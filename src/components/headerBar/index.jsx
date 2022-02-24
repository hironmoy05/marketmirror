import React from 'react';
import { Inner, Container, BitCoinTitle } from './styles/headerBar';

export default function HeaderBar({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>;
}

HeaderBar.Container = function HeaderBarContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

HeaderBar.BitCoinTitle = function HeaderBarBitCoinTitle({children, ...restProps}) {
    return <BitCoinTitle {...restProps}>{children}</BitCoinTitle>
}