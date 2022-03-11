import styled from "@emotion/styled";

export const EmotionWrapper = styled.div`
  width: 100%;
  min-height: 166.33px;
  padding: 0 32px;
  box-sizing: border-box;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;

    & .emotiong,
    .emotionarea {
      fill: url(#chartGradient);
    }

    & .y-axis line {
      stroke: #ddd;
    }

    & .emotionpath {
      fill: none;
      stroke: #5fb6ad;
      stroke-width: 3;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    & #chartGradient {
      x1: 100%;
      y2: 100%;
      y1: 100%;
      y2: 0%;
    }
  }
`;
