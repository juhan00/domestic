import styled from "@emotion/styled";

export const MajorStockWrapper = styled.div`
  & > .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  width: 100%;
  height: 377px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & .top {
    display: flex;
    align-items: center;
    h2 {
      display: flex;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
      min-width: 100px;
    }
    .date {
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
          img {
            margin-right: 3px;
            transform: translateY(-3px);
          }
          &.up {
            color: #e82b2b;
            img {
              transform: translateY(-1px);
            }
          }
          &.down {
            color: #1b61d1;
            img {
              transform: translateY(-1px);
            }
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
