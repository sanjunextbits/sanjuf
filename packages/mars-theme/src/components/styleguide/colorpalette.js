import React from 'react';
import { styled } from "frontity";

const ColorPalette = (props) => (
    <ColorPaletteItem bg={props.bg} />
);

export default ColorPalette;

const ColorPaletteItem = styled.div`
  background-color: ${(props) => props.bg};
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  margin-right: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.16);
`;