import React from 'react';
import { Item, Container, SafeArea, LogoBox, LogoImage } from './styles/splash';

export default function Splash ({ children, ...restProps }) {
    return (
            <SafeArea {...restProps}>
                <Item>{children}</Item>
            </SafeArea>
    )
}

Splash.Container = function SplashContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Splash.LogoBox = function SplashLogoBox({ children, ...restProps }) {
    return <LogoBox {...restProps}>{children}</LogoBox>
}

Splash.LogoImage = function SplashImage({ children, ...restProps }) {
    return <LogoImage {...restProps}>{children}</LogoImage>
}