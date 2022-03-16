import styled from "@emotion/styled";

export const TopStockWrapper = styled.div`
  & > .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  flex: 2 1 0;
  height: 556px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & > .top {
    display: flex;
    align-items: center;
    & > h2 {
      display: flex;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
      & > span {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }
    }
    & > ul.filter {
      display: flex;
      height: 24px;
      line-height: 24px;
      margin-left: auto;

      li {
        padding: 0 12px;
        font-size: 12px;
        font-weight: 400;
        border: 1px solid #f0f0f6;
        box-sizing: border-box;
        color: #999;
        cursor: pointer;
        &.active {
          font-weight: 700;
          background-color: #286f6c;
          border: 1px solid #286f6c;
          box-sizing: border-box;
          color: #fff;
        }
      }
      li + li {
        border-left: 0px;
      }
      li:first-of-type {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      li:last-of-type {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
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
        padding: 14px 20px;
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
          padding: 0 20px;
          text-align: right;
          &.up {
            color: #e82b2b;
          }
          &.down {
            color: #1b61d1;
          }
          &.primary {
            color: #359866;
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
        background: #fafafe;
        border-radius: 8px;
      }
      tr td:first-of-type {
        border-top-left-radius: 10px;
      }
      tr td:first-of-type {
        border-bottom-left-radius: 10px;
      }
      tr td:last-of-type {
        border-top-right-radius: 10px;
      }
      tr td:last-of-type {
        border-bottom-right-radius: 10px;
      }
    }
  }
`;
