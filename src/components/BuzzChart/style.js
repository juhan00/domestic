import styled from "@emotion/styled";

export const BuzzWrapper = styled.div`
  width: 100%;
  min-height: 166.33px;
  padding: 0 32px;
  box-sizing: border-box;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;

    & .buzzg,
    .buzzarea {
      fill: url(#buzzGradient);
    }

    & .y-axis line {
      stroke: #ddd;
    }

    & .y-axis text {
      fill: #f5746b;
      font-size: 11px;
      font-weight: bold;
    }

    & .x-axis text {
      fill: #767676;
    }

    & .title {
      fill: #f5746b;
      font-size: 14px;
      font-weight: bold;
    }

    & .buzzpath {
      fill: none;
      stroke: #f5746b;
      stroke-width: 3;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
  }
`;
