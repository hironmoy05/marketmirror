import React from 'react';
import { Inner , GraphContainer } from './styles/graph';

export default function Graph({children, ...restProps}) {
    return <Inner {...restProps}>{children}</Inner>;
}

Graph.GraphContainer = function GraphGraphContainer({children, ...restProps}) {
    return <GraphContainer {...restProps}>{children}</GraphContainer>;
}