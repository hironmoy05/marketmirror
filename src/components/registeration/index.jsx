import React from 'react';
import { Container, CheckBoxText, Frame, MobileFrame, FormBoxPicker } from "./styles/registeration";

export default function Registeration({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Registeration.Frame = function RegistrationScreenFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Registeration.MobileFrame = function RegistrationScreenMobileFrame({ children, ...restProps }) {
    return <MobileFrame {...restProps}>{children}</MobileFrame>
}

Registeration.CheckBoxText = function RegistrationScreenCheckBoxText({ children, ...restProps }) {
    return <CheckBoxText {...restProps}>{children}</CheckBoxText>
}

Registeration.FormBoxPicker = function RegistrationScreenFormBoxPicker({ children, ...restProps }) {
    return <FormBoxPicker {...restProps}>{children}</FormBoxPicker>
}