import styled from "@emotion/styled";
import { all } from "redux-saga/effects";

export const StockIndex = styled.div`
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
    & > h2 {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #111111;
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
      & > .date {
        align-self: flex-end;
        margin-left: auto;
        font-size: 11px;
        font-weight: 400;
        line-height: 1.5;
        color: #505050;
      }
    }
  }

  & > .stockIndexRef {
    width: 100%;
    //d3 chart
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
  }
`;
