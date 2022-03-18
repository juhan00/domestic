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
  .corrChartRef {
    width: 100%;
    position: relative;
    & > svg {
      width: 100%;
      height: 500px;
    }
    .tooltip {
      position: absolute;
      top: 500px;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  .title {
    padding-top: 10px;
    text-align: left;
    background-color: transparent;
    &::before {
      float: left;
      margin-right: 5px;
      display: block;
      content: "";
      width: 12px;
      height: 12px;
      border: 1px solid #fdc055;
      border-radius: 50%;
      background-color: #fdc055;
    }
  }
`;

export const YLabel = styled.div`
  overflow: hidden;
  color: #505050;
  background-color: #fafafe;
  width: 30%;
  height: 30px;
  border: none;
  border-radius: 6px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  & > span {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
  }
`;
