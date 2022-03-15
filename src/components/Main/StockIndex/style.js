import styled from "@emotion/styled";
import { all } from "redux-saga/effects";

export const StockIndexWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  overflow: hidden;

  & + div {
    margin-left: 20px;
  }

  & > .topInfo {
    width: 100%;
    & > .title {
      display: flex;
      h2 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
        color: #111111;
      }
      .date {
        align-self: flex-start;
        margin-left: auto;
        height: 21px;
        line-height: 21px;
        padding: 0 8px;
        box-sizing: border-box;
        border: 1px solid #e8f1ee;
        border-radius: 21px;
        font-size: 11px;
        font-weight: 400;
        color: #286f6c;
      }
    }

    & > .info {
      width: 100%;
      display: flex;
      margin-top: 4px;
      & > .index {
        font-size: 26px;
        font-weight: 500;
        line-height: 1;
        color: #e00400;
        & > .vs {
          margin-left: 12px;
          & > img {
            margin-right: 6px;
            transform: translateY(-1px);
          }
          font-size: 14px;
          line-height: 1.5;
        }
        & > .rate {
          font-size: 14px;
          line-height: 1.5;
          margin-left: 12px;
        }
      }
    }
  }

  & > .stockIndexRef {
    width: 100%;
    & > svg {
      width: 100%;
      //d3 chart
      .x-axis {
        .tick {
          text {
            font-size: 11px;
            font-weight: 400;
            line-height: 1.2;
            color: #111;
          }
        }
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
      .dataLine {
        stroke: #359866;
        stroke-width: 2px;
      }
      .dataArea {
        fill: url(#areaGradient);
      }
      .todayLine {
        stroke-width: 1;
        stroke: #facdcd;
        stroke-dasharray: 3, 3;
      }
    }
  }
`;
