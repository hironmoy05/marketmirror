import React from 'react';
import { Inner, Container, Frame, HistoryBox, HistoryRightWrapper, HistoryRightWrapperInner, HistoryLeftWrapper, HistoryTitle, HistoryCoinDate, HistoryCoinFigure, HistoryCoinPrice, HistoryCoinTitle } from './styles/sell';

export default function Sell({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Sell.Container = function SellContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Sell.Frame = function SellFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Sell.HistoryBox = function SellHistoryBox({children, ...restProps}) {
    return <HistoryBox {...restProps}>{children}</HistoryBox>
}

Sell.HistoryRightWrapper = function SellHistoryRightWrapper({children, ...restProps}) {
    return <HistoryRightWrapper {...restProps}>{children}</HistoryRightWrapper>
}

Sell.HistoryRightWrapperInner = function SellHistoryRightWrapperInner({children, ...restProps}) {
    return <HistoryRightWrapperInner {...restProps}>{children}</HistoryRightWrapperInner>
}

Sell.HistoryLeftWrapper = function SellHistoryLeftWrapper({children, ...restProps}) {
    return <HistoryLeftWrapper {...restProps}>{children}</HistoryLeftWrapper>
}

Sell.HistoryTitle = function SellHistoryTitle({children, ...restProps}) {
    return <HistoryTitle {...restProps}>{children}</HistoryTitle>
}

Sell.HistoryCoinDate = function SellHistoryCoinDate({children, ...restProps}) {
    return <HistoryCoinDate {...restProps}>{children}</HistoryCoinDate>
}

Sell.HistoryCoinTitle = function SellHistoryCoinTitle({children, ...restProps}) {
    return <HistoryCoinTitle {...restProps}>{children}</HistoryCoinTitle>
}

Sell.HistoryCoinFigure = function SellHistoryCoinFigure({children, ...restProps}) {
    return <HistoryCoinFigure {...restProps}>{children}</HistoryCoinFigure>
}

Sell.HistoryCoinPrice = function SellHistoryCoinPrice({children, ...restProps}) {
    return <HistoryCoinPrice {...restProps}>{children}</HistoryCoinPrice>
}