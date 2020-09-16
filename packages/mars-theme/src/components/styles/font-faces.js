import React from "react";
import { Global, css, connect } from "frontity";
import SailecRegular from "../../fonts/Sailec/Sailec-Regular.woff2";
import SailecBold from "../../fonts/Sailec/Sailec-Bold.woff2";
import LarsseitNormal from "../../fonts/Larsseit/Larsseit.woff2";
import LarsseitBold from "../../fonts/Larsseit/Larsseit-Bold.woff2";
import LarsseitExtraBold from "../../fonts/Larsseit/Larsseit-ExtraBold.woff2";
import KnockoutHTF68 from "../../fonts/Knockout/KnockoutHTF68.woff2";

const fonts = {
  all: [
    SailecRegular,
    SailecBold,
    LarsseitNormal,
    LarsseitBold,
    LarsseitExtraBold,
    KnockoutHTF68,
  ],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Sailec";
          font-style: normal;
          font-weight: normal;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "Sailec";
          font-style: normal;
          font-weight: bold;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }

        @font-face {
          font-family: "Larsseit";
          font-style: normal;
          font-weight: normal;
          font-display: "swap";
          src: url(${font[2]}) format("woff2");
        }

        @font-face {
          font-family: "Larsseit";
          font-style: normal;
          font-weight: bold;
          font-display: "swap";
          src: url(${font[3]}) format("woff2");
        }

        @font-face {
          font-family: "Larsseit";
          font-style: normal;
          font-weight: 800;
          font-display: "swap";
          src: url(${font[4]}) format("woff2");
        }

        @font-face {
          font-family: "Knockout";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[5]}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
