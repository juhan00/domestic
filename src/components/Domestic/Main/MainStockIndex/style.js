import styled from "@emotion/styled";

export const StockIndex = styled.div`
  display: flex;
  flex: 1 1 0;
  border: 1px solid black;
  max-height: 300px;
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
  .dataLine {
    stroke: #5fb6ad;
  }
  .dataLineBlur {
    stroke: #5fb6ad;
    filter: blur(4px);
  }
  .todayLine {
    stroke-width: 1;
    stroke: #f0f0f6;
    stroke-dasharray: 3, 3;
  }
`;
