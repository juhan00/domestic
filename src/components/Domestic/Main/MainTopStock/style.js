import styled from "@emotion/styled";
import { hierarchy } from "d3";

export const TopStock = styled.div`
  flex: 2 1 0;
  height: 544px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & .top {
    & > h2 {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #111;
      min-width: 69px;
    }
    & > ul.filter {
      display: flex;
      margin-left: auto;
      min-width: 515px;
      li {
        height: 26px;
        padding: 2px 12px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #999;
        border: 1px solid #e5e5ec;
        box-sizing: border-box;
        border-radius: 32px;
        cursor: pointer;
        &.active {
          background-color: #5fb6ad;
          border: 1px solid #5fb6ad;
          color: #fff;
        }
      }
      li + li {
        margin-left: 8px;
      }
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
      tr:nth-child(2n + 1) {
        background: #fcfcff;
      }
    }
  }
`;
