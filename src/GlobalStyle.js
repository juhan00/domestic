import React from "react";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        body {
          font-size: 14px;
          background-color: #f7f7fb;
        }
      `}
    />
  );
};

export default GlobalStyle;
