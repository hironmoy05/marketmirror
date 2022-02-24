import React from 'react';
import { Inner, Container, Frame, HistoryBox, HistoryRightWrapper, HistoryRightWrapperInner, HistoryLeftWrapper, HistoryTitle, HistoryCoinDate, HistoryCoinFigure, HistoryCoinPrice, HistoryCoinTitle } from './styles/buy';

export default function Buy({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Buy.Container = function BuyContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Buy.Frame = function BuyFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Buy.HistoryBox = function BuyHistoryBox({children, ...restProps}) {
    return <HistoryBox {...restProps}>{children}</HistoryBox>
}

Buy.HistoryRightWrapper = function BuyHistoryRightWrapper({children, ...restProps}) {
    return <HistoryRightWrapper {...restProps}>{children}</HistoryRightWrapper>
}

Buy.HistoryRightWrapperInner = function BuyHistoryRightWrapperInner({children, ...restProps}) {
    return <HistoryRightWrapperInner {...restProps}>{children}</HistoryRightWrapperInner>
}

Buy.HistoryLeftWrapper = function BuyHistoryLeftWrapper({children, ...restProps}) {
    return <HistoryLeftWrapper {...restProps}>{children}</HistoryLeftWrapper>
}

Buy.HistoryTitle = function BuyHistoryTitle({children, ...restProps}) {
    return <HistoryTitle {...restProps}>{children}</HistoryTitle>
}

Buy.HistoryCoinDate = function BuyHistoryCoinDate({children, ...restProps}) {
    return <HistoryCoinDate {...restProps}>{children}</HistoryCoinDate>
}

Buy.HistoryCoinTitle = function BuyHistoryCoinTitle({children, ...restProps}) {
    return <HistoryCoinTitle {...restProps}>{children}</HistoryCoinTitle>
}

Buy.HistoryCoinFigure = function BuyHistoryCoinFigure({children, ...restProps}) {
    return <HistoryCoinFigure {...restProps}>{children}</HistoryCoinFigure>
}

Buy.HistoryCoinPrice = function BuyHistoryCoinPrice({children, ...restProps}) {
    return <HistoryCoinPrice {...restProps}>{children}</HistoryCoinPrice>
}