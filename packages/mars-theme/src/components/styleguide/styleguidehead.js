import React from 'react';
import { StyleGuideLogo } from "../icons";
import border from "../images/border.svg";
import { styled } from "frontity";

const StyleguideHead = (props) => (
    <StyleguideHeader>
        <StyleGuideLogoSection>
            <StyleGuideLogo />
        </StyleGuideLogoSection>

        <Title>
            <Name>{props.name}</Name>
        </Title>
    </StyleguideHeader>
);

export default StyleguideHead;

const StyleguideHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 55px;
`;

const StyleGuideLogoSection = styled.div`
    margin-right: 80px;
`;

const Title = styled.div`
    margin-right: 80px;
`;

const Name = styled.h2`
    font-family: 'Knockout';
    font-size: 90px;
    font-weight: 500;
    line-height: 80px;
    text-transform: uppercase;
    margin: 0;
    color: #00C1DE;
    position: relative;
    letter-spacing: 1.5px;
    padding-bottom: 15px;

    &:after {
        content: '';
        height: 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${border});
        background-repeat: repeat;
        background-size: cover;
    }
`;