import React from 'react';
import {Item, Inner, Container, ListContainer} from './styles/homeTab';

export default function HomeTab({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>;
}

HomeTab.Container = function HomeTabContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};

HomeTab.ListContainer = function HomeTabListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};
