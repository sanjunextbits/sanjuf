import React from "react";
import { styled, connect, Global } from "frontity";
import { SearchIcon } from "../icons";
import SearchForm from "./search-form";
import ScreenReaderText from "../styles/screen-reader";

function Search({ state, actions }) {
    const { isSearchOpen } = state.theme;

    return (
        <>
        <SearchMain>
            <SearchButton onClick={actions.theme.toggleSearch}>
                <SearchIcon />
                <ScreenReaderText>Search</ScreenReaderText>
            </SearchButton>

            {isSearchOpen && <SearchForm />}
        </SearchMain>
        </>
    );
}

const SearchMain = styled.div`
    line-height: 1px;
`

const SearchButton = styled.button`
    background: transparent;
    width: 25px;
    height: 25px;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export default connect(Search);
