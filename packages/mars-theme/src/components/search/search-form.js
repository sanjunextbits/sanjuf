import { connect, styled } from "frontity";
import React, { useRef } from "react";
import ScreenReaderText from "../styles/screen-reader";
import Button from "../styles/button";
import { ButtonSearchIcon } from "../icons";
import Input from "../styles/input";

const SearchForm = ({ state, actions, libraries }) => {
    const parse = libraries.source.parse(state.router.link);
    const searchQuery = parse.query["s"];
    const { primary } = state.theme.colors;
    const { closeSearch } = actions.theme;

    const inputRef = useRef();

    const handleSubmit = (event) => {
        // Prevent page navigation
        event.preventDefault();

        // Get the input's value
        const searchString = inputRef.current.value;
        // If the typed search string is not empty
        // Better to trim write spaces as well
        if (searchString.trim().length > 0) {
          // Let's go search for blogs that match the search string
          actions.router.set(`/?s=${searchString.toLowerCase()}`);
          // Scroll the page to the top
          window.scrollTo(0, 0);

          closeSearch();
        }
    };

  return (
    <SeachForm>
        <Form role="search" aria-label="404 not found" onSubmit={handleSubmit}>
        <Label>
            <ScreenReaderText>Search for:</ScreenReaderText>
            <SearchInput
            type="search"
            defaultValue={searchQuery || ""}
            placeholder="Search Term"
            name="search"
            ref={inputRef}
            />
        </Label>
        <SearchButton bg={primary} type="submit">
            <ButtonSearchIcon />
            <ScreenReaderText>Search</ScreenReaderText>
        </SearchButton>
        </Form>
    </SeachForm>
  );
};

export default connect(SearchForm);

const SeachForm = styled.div`
  position: absolute;
  right: 0;
  width: 287px;
  margin-top: 25px;
`;

const Form = styled.form`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  font-size: inherit;
  margin: 0;
`;

const SearchInput = styled(Input)`
  width: 223px;
  height: 47px;
`;

const SearchButton = styled(Button)`
  width: 65px;
  text-align: center;
  height: 47px;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;

  svg {
    margin: 0 auto;
  }
`;
