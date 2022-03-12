import styled from "@emotion/styled";

export const MainChartWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px 32px;
  box-sizing: border-box;
  & > svg {
    display: block;
    margin: auto;
    width: 100%;

    & .tick line {
      stroke: #f0f0f6;
    }

    & .focus-label,
    .focus-text {
      font-size: 12px;
      fill: #767676;
    }

    & .focus-date {
      font-size: 14px;
      fill: #767676;
      font-weight: bold;
    }

    & .moving-average-5 {
      stroke: #9bdabc;
    }
    & .moving-average-20 {
      stroke: #f5746b;
    }
    & .moving-average-60 {
      stroke: #fdc055;
    }

    & .moving-average-120 {
      stroke: #bdb1e1;
    }

    & .starttext {
      font-weight: bold;
      fill: #111111;
    }

    & .endtext {
      fill: #111111;
    }

    & .average5text {
      fill: #9bdabc;
    }
    & .average20text {
      fill: #f5746b;
    }
    & .average60text {
      fill: #fdc055;
    }
    & .average120text {
      fill: #bdb1e1;
    }
  }
`;
