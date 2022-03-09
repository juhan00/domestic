import styled from "@emotion/styled";

export const ExchRateChartWrapper = styled.div`
  /* border: 1px solid black; */
  height: 100%;
  padding: 10px;
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

  .x-label,
  .y-label {
    fill: #999;
    font-size: 11px;
    font-weight: 400;
    line-height: 1.2;
  }
  .dataLine {
    stroke: #5fb6ad;
  }
`;
