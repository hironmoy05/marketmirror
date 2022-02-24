import React from 'react';
import { Container, ItemWrapper, Divider, LeftWrapper, RightWrapper, TitleWrapper, PriceWrapper, ListTitle, ListSubTitle, ListPrice, ListPercent } from './styles/listItems';

export default function ListItems({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

ListItems.ItemWrapper = function ListItemsItemWrapper({children, ...restProps}) {
    return <ItemWrapper {...restProps}>{children}</ItemWrapper>
}

ListItems.Divider = function ListItemsDivider({...restProps}) {
    return <Divider {...restProps} />
}

ListItems.LeftWrapper = function ListItemsLeftWrapper({children, ...restProps}) {
    return <LeftWrapper {...restProps}>{children}</LeftWrapper>
}

ListItems.RightWrapper = function ListItemsRightWrapper({children, ...restProps}) {
    return <RightWrapper {...restProps}>{children}</RightWrapper>
}

ListItems.TitleWrapper = function ListItemsTitleWrapper({children, ...restProps}) {
    return <TitleWrapper {...restProps}>{children}</TitleWrapper>
}

ListItems.PriceWrapper = function ListItemsPriceWrapper({children, ...restProps}) {
    return <PriceWrapper {...restProps}>{children}</PriceWrapper>
}

ListItems.ListTitle = function ListItemsListTitle({children, ...restProps}) {
    return <ListTitle {...restProps}>{children}</ListTitle>
}

ListItems.ListSubTitle = function ListItemsListSubTitle({children, ...restProps}) {
    return <ListSubTitle {...restProps}>{children}</ListSubTitle>
}

ListItems.ListPrice = function ListItemsListPrice({children, ...restProps}) {
    return <ListPrice {...restProps}>{children}</ListPrice>
}

ListItems.ListPercent = function ListItemsListPercent({children, ...restProps}) {
    return <ListPercent {...restProps}>{children}</ListPercent>
}
