import React from 'react';
import { Item, Inner, Container, IconText } from './styles/tabIcon';

export default function TabIcon({children, ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner>{children}</Inner>
        </Item>
    )
} 

TabIcon.Container = function TabIconsItem({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

TabIcon.IconText = function TabIconsText({children, ...restProps}) {
    return <IconText {...restProps}>{children}</IconText>
}