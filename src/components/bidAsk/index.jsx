import React from 'react';
import {Inner, Container, Frame, BidTitle, BidSubTitle, BidStatus } from './styles/bidAsk';

export default function BidAsk({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>;
}

BidAsk.Container = function BidAskContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

BidAsk.Frame = function BidAskFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>;
}

BidAsk.BidTitle = function BidAskBidTitle({children, ...restProps}) {
    return <BidTitle {...restProps}>{children}</BidTitle>;
}

BidAsk.BidSubTitle = function BidAskBidSubTitle({children, ...restProps}) {
    return <BidSubTitle {...restProps}>{children}</BidSubTitle>;
}

BidAsk.BidStatus = function BidAskBidStatus({children, ...restProps}) {
    return <BidStatus {...restProps}>{children}</BidStatus>;
}