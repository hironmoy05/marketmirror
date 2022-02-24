import React from 'react';
import { Inner, Container } from './styles/historyTab';

export default function HistoryTab({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

HistoryTab.Container = function HistoryTabContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}