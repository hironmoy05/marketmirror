import React from 'react';
import { Container, Inner, SmallLogoBox, LoginContainer, RegisterBox, LoginBox, LoginFormBox, LoginTitle, LoginSubTitle, HeaderBox, Label, IconBox, IconBox2, FormIconBox, FormTextInput, EmailTextInput, PasswordTextInput, NameTextInput, RegEmailTextInput, RegPasswordTextInput, RegRetypePasswordTextInput, FormButton, RegFormButton, LoginFormButton, FormButtonBox, FormBox, FormSelfButton, FormSelfText, ForgotText } from './styles/login';
import { View, Text } from 'react-native';
import { styles } from './styles/login';

export default function Login({ children, ...restProps }) {
    return (
    <Container {...restProps}>
        <Inner>{children}</Inner>
    </Container>
    )
}

Login.SmallLogoBox = function LoginSmallLogoBox({ children, ...restProps }) {
    return <SmallLogoBox {...restProps}>{children}</SmallLogoBox>
}

Login.LoginContainer = function LoginLoginContainer({ children, ...restProps }) {
    return <LoginContainer {...restProps}>{children}</LoginContainer>
}

Login.LoginFormBox = function LoginLoginFormBox({ children, ...restProps }) {
    return <LoginFormBox {...restProps}>{children}</LoginFormBox>
}

Login.LoginTitle = function LoginLoginTitle({ children, ...restProps }) {
    return <LoginTitle {...restProps}>{children}</LoginTitle>
}

Login.LoginSubTitle = function LoginLoginSubTitle({ children, ...restProps }) {
    return <LoginSubTitle {...restProps}>{children}</LoginSubTitle>
}

Login.HeaderBox = function LoginHeaderBox({ children, ...restProps }) {
    return <HeaderBox {...restProps}>{children}</HeaderBox>
}

Login.FormBox = function LoginFormBox({ children, ...restProps }) {
    return <FormBox {...restProps}>{children}</FormBox>
}

Login.Label = function LoginFormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Login.IconBox = function LoginIconBox({ children, ...restProps }) {
    return <IconBox {...restProps}>{children}</IconBox>
}

Login.IconBox2 = function LoginIconBox2({ children, ...restProps }) {
    return <IconBox2 {...restProps}>{children}</IconBox2>
}

Login.FormIconBox = function LoginFormIconBox({ children, ...restProps }) {
    return <FormIconBox {...restProps}>{children}</FormIconBox>
}

Login.FormTextInput = function LoginFormTextInput({ ...restProps }) {
    return <FormTextInput {...restProps} />
}
Login.EmailTextInput = function LoginEmailTextInput({ ...restProps }) {
    return <EmailTextInput {...restProps} />
}
Login.PasswordTextInput = function LoginPasswordTextInput({ ...restProps }) {
    return <PasswordTextInput {...restProps} />
}
Login.NameTextInput = function LoginNameTextInput({ ...restProps }) {
    return <NameTextInput {...restProps} />
}
Login.RegEmailTextInput = function LoginRegEmailTextInput({ ...restProps }) {
    return <RegEmailTextInput {...restProps} />
}
Login.RegPasswordTextInput = function LoginRegPasswordTextInput({ ...restProps }) {
    return <RegPasswordTextInput {...restProps} />
}
Login.RegRetypePasswordTextInput = function LoginRegRetypePasswordTextInput({ ...restProps }) {
    return <RegRetypePasswordTextInput {...restProps} />
}

Login.FormButton = function LoginFormButto({ children, ...restProps }) {
    return <FormButton {...restProps}>{children}</FormButton>
}

Login.RegFormButton = function LoginRegFormTextInput({ children, ...restProps }) {
    return <RegFormButton {...restProps}>{children}</RegFormButton>
}
Login.LoginFormButton = function LoginFormTextInput({ children, ...restProps }) {
    return <LoginFormButton {...restProps}>{children}</LoginFormButton>
}

Login.FormSelfButton = function LoginFormSelfButton({children, ...restProps}) {
    return <FormSelfButton {...restProps}>{children}</FormSelfButton>
}

Login.FormSelfText = function LoginFormSelfText({children, ...restProps}) {
    return <FormSelfText {...restProps}>{children}</FormSelfText>
}

Login.FormButtonBox = function LoginScreenFormButtonBox({children, ...restProps}) {
    return <FormButtonBox {...restProps}>{children}</FormButtonBox>
}

Login.RegisterBox = function LoginRegisterBox({children, ...restProps}) {
    return <RegisterBox {...restProps}>{children}</RegisterBox>
}

Login.LoginBox = function LoginLoginBox({children, ...restProps}) {
    return <LoginBox {...restProps}>{children}</LoginBox>
}

Login.RegisterTextBox = function LoginRegisterTextBox({ children, ...restProps }) {
    return (
        <View {...restProps} style={styles.registerTextBox}>
            <Text style={styles.registerTextColor}>{children}</Text>
        </View>
    )
}

Login.ForgotText = function LoginForgotText({children}) {
    return <ForgotText>{children}</ForgotText>
}

// Just a componenets
// Login.ForgotText = function LoginForgotText({ children, ...restProps }) {
//     return (
//         <View style={styles.accentTextWrapper} {...restProps}>
//             <Text  style={styles.accenText}>{children}</Text>
//         </View>
//     )
// }
   
Login.LineText = function LoginLineText() {
    return (
        <View style={styles.lineWrapper}>
            <View style={styles.leftLine} />
                <View>
                    <Text style={styles.innerLineText}>Or With</Text>
                </View>
            <View style={styles.rightLine} />
        </View>
    )
}
