import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  width: 100%;
  height: 700px;
  h5 {
    color: #505050;
    margin-top: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 22px;
  }
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
  & > .betaChartRef {
    width: 100%;
    position: relative;
    & > svg {
      width: 100%;
      height: 500px;
    }
  }
`;
export const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
`;
export const YLabel = styled.div`
  color: #505050;
  background-color: #fafafe;
  height: 60px;
  border: none;
  border-radius: 6px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 60px;
  & > span {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
  }
`;
export const TooltipContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: #767676;
  width: 150px;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  overflow: visible;
  z-index: 10;
  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
  }
  span {
    display: flex;
    justify-content: space-between;
    .per {
      color: #111111;
      font-weight: 700;
    }
  }
`;
