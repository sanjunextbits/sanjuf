import React from "react";
import { connect, styled } from "frontity";
import Link from "../link-button";
import { HeartIcon } from "../icons";

const Donate = ({ state }) => {
    const { donate } = state.theme.colors;
    const { white } = state.theme.colors;
    const { donateHover } = state.theme.colors;
    const { donateActive } = state.theme.colors;

    return (
        <StyledLink bg={donate} color={white} bgHover={donateHover} colorHover={white} colorVisited={white} bgActive={donateActive} colorActive={white} link="/donate">
            <DonateButtonText>Donate</DonateButtonText>
            <HeartIcon />
        </StyledLink>
    );
};

export default connect(Donate);

const StyledLink = styled(Link)`
    font-size: 24px;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    letter-spacing: 0;
    margin-left: 25px;
    line-height: 19px;
    border-width: 0;
`;
const DonateButtonText = styled.span`
    padding-right: 10px;
`;