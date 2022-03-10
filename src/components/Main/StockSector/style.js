import styled from "@emotion/styled";
import { all } from "redux-saga/effects";

export const StockSectorWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  .alignL {
    text-align: left;
  }
  .alignR {
    text-align: right;
  }
  & .top {
    & > h2 {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #111;
      min-width: 100px;
    }
    & > span {
      font-size: 11px;
      font-weight: 400;
      line-height: 1.5;
      color: #505050;
      margin-left: auto;
    }
  }

  & > table {
    width: 100%;
    margin-top: 6px;
    text-align: center;
    thead {
      th {
        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;
        color: #999;
        padding: 14px 0;
      }
    }
    tbody {
      tr {
        height: 42px;
        td {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
          vertical-align: middle;
          &.red {
            color: #e82b2b;
          }
          &.blue {
            color: #1b61d1;
          }
          &.primary {
            color: #5fb6ad;
          }
        }
      }
      tr:nth-of-type(2n + 1) {
        background: #fcfcff;
      }
    }
  }
`;