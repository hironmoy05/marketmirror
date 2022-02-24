import React from 'react';
import { Inner, Container } from './styles/portfolioTab';

export default function PortfolioTab({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

PortfolioTab.Container = function PortfolioTabContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}