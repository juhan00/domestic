import styled from "@emotion/styled";

export const ExchangeRateChartWrapper = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  & > svg {
    width: 100%;

    .tick {
      line {
        stroke: #f0f0f6;
      }
      text {
        font-size: 11px;
        font-weight: 400;
        line-height: 1.2;
        color: #999;
      }
    }
    .domain {
      stroke: #aaaaaa;
    }
    .x-axis {
      line {
        stroke: #aaaaaa;
      }
    }

    .x-label,
    .y-label {
      fill: #999;
      font-size: 11px;
      font-weight: 400;
      line-height: 1.2;
    }
    .dataLine {
      stroke: #fdc055;
      stroke-width: 2px;
    }
  }
`;
