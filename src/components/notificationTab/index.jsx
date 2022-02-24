import React from 'react';
import { Inner, Container, Frame, NotificationBox, NotificationTextBox, NotificationTitle, NotificationSubTitle, NotificationDate } from './styles/notificationTab';

export default function NotificationTab({children, ...restProps}) {
    return (
        <Inner {...restProps}>{children}</Inner>
    )
}

NotificationTab.Container = function NotificationTabContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

NotificationTab.Frame = function NotificationTabFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

NotificationTab.NotificationBox = function NotificationTabNotificationBox({children, ...restProps}) {
    return <NotificationBox {...restProps}>{children}</NotificationBox>
}

NotificationTab.NotificationTextBox = function NotificationTabNotificationTextBox({children, ...restProps}) {
    return <NotificationTextBox {...restProps}>{children}</NotificationTextBox>
}

NotificationTab.NotificationTitle = function NotificationTabNotificationTitle({children, ...restProps}) {
    return <NotificationTitle {...restProps}>{children}</NotificationTitle>
}

NotificationTab.NotificationSubTitle = function NotificationTabNotificationSubTitle({children, ...restProps}) {
    return <NotificationSubTitle {...restProps}>{children}</NotificationSubTitle>
}

NotificationTab.NotificationDate = function NotificationTabNotificationCoinDate({children, ...restProps}) {
    return <NotificationDate {...restProps}>{children}</NotificationDate>
}