import { styled } from "frontity";

const Input = styled.input`
  box-shadow: none;
  display: block;
  max-width: 100%;
  width: 100%;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export default Input;
