import React from 'react';
import { Inner, Container, Frame, HistoryBox, HistoryRightWrapper, HistoryRightWrapperInner, HistoryLeftWrapper, HistoryTitle, HistoryCoinDate, HistoryCoinFigure, HistoryCoinPrice, HistoryCoinPricePosition, HistoryCoinTitle } from './styles/transfer';

export default function Transfer({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Transfer.Container = function TransferContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Transfer.Frame = function TransferFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Transfer.HistoryBox = function TransferHistoryBox({children, ...restProps}) {
    return <HistoryBox {...restProps}>{children}</HistoryBox>
}

Transfer.HistoryRightWrapper = function TransferHistoryRightWrapper({children, ...restProps}) {
    return <HistoryRightWrapper {...restProps}>{children}</HistoryRightWrapper>
}

Transfer.HistoryRightWrapperInner = function TransferHistoryRightWrapperInner({children, ...restProps}) {
    return <HistoryRightWrapperInner {...restProps}>{children}</HistoryRightWrapperInner>
}

Transfer.HistoryLeftWrapper = function TransferHistoryLeftWrapper({children, ...restProps}) {
    return <HistoryLeftWrapper {...restProps}>{children}</HistoryLeftWrapper>
}

Transfer.HistoryTitle = function TransferHistoryTitle({children, ...restProps}) {
    return <HistoryTitle {...restProps}>{children}</HistoryTitle>
}

Transfer.HistoryCoinDate = function TransferHistoryCoinDate({children, ...restProps}) {
    return <HistoryCoinDate {...restProps}>{children}</HistoryCoinDate>
}

Transfer.HistoryCoinTitle = function TransferHistoryCoinTitle({children, ...restProps}) {
    return <HistoryCoinTitle {...restProps}>{children}</HistoryCoinTitle>
}

Transfer.HistoryCoinFigure = function TransferHistoryCoinFigure({children, ...restProps}) {
    return <HistoryCoinFigure {...restProps}>{children}</HistoryCoinFigure>
}

Transfer.HistoryCoinPrice = function TransferHistoryCoinPrice({children, ...restProps}) {
    return <HistoryCoinPrice {...restProps}>{children}</HistoryCoinPrice>
}

Transfer.HistoryCoinPricePosition = function TransferHistoryCoinPricePosition({children, ...restProps}) {
    return <HistoryCoinPricePosition {...restProps}>{children}</HistoryCoinPricePosition>
}