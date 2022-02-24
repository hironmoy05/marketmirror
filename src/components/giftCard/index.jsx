import React from 'react';
import { Inner, Container, CardContainer, CardCircleContainer, TopContainer, PriceContainer, BottomContainer, RightSide, LeftSide, CardTitle, CardSubTitle, CardSubTitle2, CardBtn, CardText } from './styles/giftCard';

export default function GiftCard({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>
}

GiftCard.Container = function GiftCardContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

GiftCard.CardContainer = function GiftCardCardContainer({children, ...restProps}) {
    return <CardContainer {...restProps}>{children}</CardContainer>
}

GiftCard.CardCircleContainer = function GiftCardCardCircleContainer({children, ...restProps}) {
    return <CardCircleContainer {...restProps}>{children}</CardCircleContainer>
}

GiftCard.TopContainer = function GiftCardTopContainer({children, ...restProps}) {
    return <TopContainer {...restProps}>{children}</TopContainer>
}

GiftCard.PriceContainer = function GiftCardPriceContainer({children, ...restProps}) {
    return <PriceContainer {...restProps}>{children}</PriceContainer>
}

GiftCard.BottomContainer = function GiftCardBottomContainer({children, ...restProps}) {
    return <BottomContainer {...restProps}>{children}</BottomContainer>
}

GiftCard.RightSide = function GiftCardRightSide({children, ...restProps}) {
    return <RightSide {...restProps}>{children}</RightSide>
}

GiftCard.LeftSide = function GiftCardLeftSide({children, ...restProps}) {
    return <LeftSide {...restProps}>{children}</LeftSide>
}

GiftCard.CardTitle = function GiftCardCardTitle({children, ...restProps}) {
    return <CardTitle {...restProps}>{children}</CardTitle>
}

GiftCard.CardSubTitle = function GiftCardCardSubTitle({children, ...restProps}) {
    return <CardSubTitle {...restProps}>{children}</CardSubTitle>
}

GiftCard.CardSubTitle2 = function GiftCardCardSubTitle2({children, ...restProps}) {
    return <CardSubTitle2 {...restProps}>{children}</CardSubTitle2>
}

GiftCard.CardBtn = function GiftCardCardBtn({children, ...restProps}) {
    return <CardBtn {...restProps}>{children}</CardBtn>
}

GiftCard.CardText = function GiftCardCardText({children, ...restProps}) {
    return <CardText {...restProps}>{children}</CardText>
}





