import { css } from "frontity";

const cssReset = css`
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
    font-family: "Sailec";
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    letter-sapcing: -0.15px;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }

  blockquote::before,
  blockquote::after {
    content: "";
  }

  a,
  path {
    transition: all 0.15s linear;
  }

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const documentSetup = (colors) => css`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background: ${colors.bodyBg};
    box-sizing: border-box;
    color: #424242;
    font-family: "Sailec";
    font-weight: normal;
    font-size: 18px;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }
`;

const formDesign = (colors) => css`
  input {
    font-family: "Larsseit";
    font-weight: bold;
    font-size: 18px;
    border: 1px solid ${colors.primary};
    color: ${colors.themeBlack};
    padding: 5px 15px;
    margin: 0;
    border-radius: 0;
    height: 53px;

    &::-webkit-input-placeholder {
      /* Edge */
      color: ${colors.themeBlack};
      opacity: 0.4;
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${colors.themeBlack};
      opacity: 0.4;
    }

    &::placeholder {
      color: ${colors.themeBlack};
      opacity: 0.4;
    }

    &:focus {
      outline: transparent;
    }
  }
`;

const globalStyle = (colors) =>
  css([
    cssReset,
    documentSetup(colors),
    formDesign(colors),
  ]);

export default globalStyle;