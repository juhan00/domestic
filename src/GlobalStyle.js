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
          @font-face {
            font-family: "Roboto";
            src: url(../public/font/Roboto-Black.ttf);
          }
          font-family: "Roboto";
        }
        body {
          font-size: 14px;
          background-color: #f7f7fb;
        }

        .hash_loader_wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .box_ani {
          transform: translateY(100%);
          opacity: 0;
          &.ani_on {
            opacity: 1;
            transform: translateY(0px);
          }
          &.delay1 {
            transition-delay: 1s;
          }
          &.delay2 {
            transition-delay: 2s;
          }
          &.delay3 {
            transition-delay: 3s;
          }
          &.delay4 {
            transition-delay: 4s;
          }
          &.delay5 {
            transition-delay: 5s;
          }
          &.turn1 {
            transition: all ease-in-out 0.5s;
          }
          &.turn2 {
            transition: all ease-in-out 0.6s;
          }
          &.turn3 {
            transition: all ease-in-out 0.7s;
          }
          &.turn4 {
            transition: all ease-in-out 0.8s;
          }
          &.turn5 {
            transition: all ease-in-out 0.9s;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
