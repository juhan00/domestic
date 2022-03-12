import styled from "@emotion/styled";

export const EmotionWrapper = styled.div`
  width: 100%;
  min-height: 166.33px;
  padding: 20px 32px;
  box-sizing: border-box;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;
  }

  & svg .emotionpath {
    fill: none;
    stroke: #065398;
    stroke-width: 3;
    stroke-line: join round;
    stroke-line: cap round;
  }

  & .y-axis text {
    fill: #065398;
    font-size: 11px;
    font-weight: bold;
  }

  & .x-axis text {
    fill: #767676;
  }
  & .title {
    fill: #065398;
    font-size: 14px;
    font-weight: bold;
  }
`;
