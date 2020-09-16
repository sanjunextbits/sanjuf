import React from 'react';
import { styled } from "frontity";

const ColorHead = (props) => (
    <Name>{props.name}</Name>
);

export default ColorHead;

const Name = styled.h4`
    font-family: 'Larsseit';
    font-weight: 800;
    font-size: 18px;
    line-height: 23px;
    color: #00C1DE;
    margin-bottom: 33px;
`;