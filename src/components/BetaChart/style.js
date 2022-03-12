import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  width: 100%;
  height: 740px;
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
export const InputWrapper = styled.div`
  background-color: #fafafe;
  height: 60px;
  padding: 20px 0;
  border-radius: 6px;
  text-align: center;
  input[type="date"] {
    background-color: transparent;
    width: 40%;
    height: 100%;
    border: none;
    border-bottom: 1px solid #e5e5ec;
    color: #111111;
    padding-bottom: 5px;
    margin: 0 5px;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    width: 15px;
    padding: 0px;
    margin: 0px;
    color: #767676;
  }
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
  background-color: #facdcd;
  color: #000000;
  border: none;
  border-radius: 2px;
  padding: 8px;
  font-size: 13px;
  line-height: 20px;
  position: absolute;
  overflow: visible;
  z-index: 10;
`;
