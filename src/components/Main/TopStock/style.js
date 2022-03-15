import styled from "@emotion/styled";

export const TopStockWrapper = styled.div`
  flex: 2 1 0;
  height: 556px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & > .top {
    & > h2 {
      display: flex;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #111;
      min-width: 100px;
      & > span {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }
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
        padding: 14px 10px;
        text-align: right;
      }
      th:nth-of-type(1) {
        text-align: center;
      }
      th:nth-of-type(2) {
        text-align: left;
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
          padding: 0 10px;
          text-align: right;
          &.up {
            color: #e82b2b;
          }
          &.down {
            color: #1b61d1;
          }
          &.primary {
            color: #5fb6ad;
          }
        }
        td:nth-of-type(1) {
          text-align: center;
        }
        td:nth-of-type(2) {
          text-align: left;
        }
      }
      tr:nth-of-type(2n + 1) {
        background: #fcfcff;
      }
    }
  }
`;
