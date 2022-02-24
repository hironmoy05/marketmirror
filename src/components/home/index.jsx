import React from 'react';
import { SafeArea, Item, Container, Frame, RegularButton, ButtonText, Title, SubTitle,LogoBox } from './styles/home';

export default function Home({ children, ...restProps }) {
    return (
        <SafeArea {...restProps}>
            <Item>{children}</Item>
        </SafeArea>
    )
}

Home.Container = function HomeContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Frame = function HomeFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Home.RegularButton = function HomeRegularButton({ children, ...restProps}) {
    return <RegularButton {...restProps}>{children}</RegularButton>
}

Home.ButtonText = function HomeButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>
}

Home.Title = function HomeTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Home.SubTitle = function HomeSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Home.LogoBox = function HomeLogoBox({ children, ...restProps }) {
    return <LogoBox {...restProps}>{children}</LogoBox>
}