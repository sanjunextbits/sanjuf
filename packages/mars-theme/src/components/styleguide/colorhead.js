import React from 'react';
import { styled } from "frontity";

const ColorHead = (props) => (
    <Name><span>{props.name}</span>{props.statename}</Name>
);

export default ColorHead;

const Name = styled.h3`
    font-family: 'Larsseit';
    font-weight: normal;
    font-size: 24px;
    letter-spacing: -1.2px;
    margin: 0 0 22px 0;
    color: #424242;
    text-transform: none;
    line-height: 30px;

    span {
        font-weight: 800;
        display: block;
    }
`;