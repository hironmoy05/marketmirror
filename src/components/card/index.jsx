import React from 'react';
import {Inner, Container, Frame, Frame1, Frame2, TextBox, IconBox, CardTitle, CardCoin, CardCurrency, CardCoinShort, Circle, ButtonBox, ActionButton, ActionButtonBox, ActionButtonText} from './styles/card';

export default function Card({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

Card.Container = function CardContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Card.Circle = function CardCircle({ ...restProps}) {
    return <Circle {...restProps} />
}

Card.Frame = function CardFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Card.Frame1 = function CardFrame1({children, ...restProps}) {
    return <Frame1 {...restProps}>{children}</Frame1>
}

Card.Frame2 = function CardFrame2({children, ...restProps}) {
    return <Frame2 {...restProps}>{children}</Frame2>
}

Card.TextBox = function CardTextBox({children, ...restProps}) {
    return <TextBox {...restProps}>{children}</TextBox>
}

Card.CardTitle = function CardCardTitle({children, ...restProps}) {
    return <CardTitle {...restProps}>{children}</CardTitle>
}

Card.CardCoin = function CardCardCoin({children, ...restProps}) {
    return <CardCoin {...restProps}>{children}</CardCoin>
}

Card.CardCoinShort = function CardCardCoinShort({children, ...restProps}) {
    return <CardCoinShort {...restProps}>{children}</CardCoinShort>
}

Card.CardCurrency = function CardCardCurrency({children, ...restProps}) {
    return <CardCurrency {...restProps}>{children}</CardCurrency>
}

Card.ButtonBox = function CardButtonBox({children, ...restProps}) {
    return <ButtonBox {...restProps}>{children}</ButtonBox>
}

Card.IconBox = function CardIconBox({children, ...restProps}) {
    return <IconBox {...restProps}>{children}</IconBox>
}

Card.ActionButtonBox = function CardActionButtonBox({children, ...restProps}) {
    return <ActionButtonBox {...restProps}>{children}</ActionButtonBox>
}

Card.ActionButton = function CardActionButton({children, ...restProps}) {
    return <ActionButton {...restProps}>{children}</ActionButton>
}

Card.ActionButtonText = function CardActionButtonText({children, ...restProps}) {
    return <ActionButtonText {...restProps}>{children}</ActionButtonText>
}