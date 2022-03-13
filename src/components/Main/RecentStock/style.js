import styled from "@emotion/styled";
import MenuIconToggle from "@images/notice_icon.svg";
import recent_close_icon from "@images/recent_close_icon.svg";

export const RecentStockWrapper = styled.div`
  height: 118px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  overflow: hidden;

  & > h2 {
    display: flex;
    align-items: center;
    width: 60px;
    font-size: 18px;
    font-weight: 500;
    color: #111111;
    margin-right: 20px;
    min-width: 34px;
  }

  & > .itemWrapper {
    display: flex;
    flex: 1 1 100%;

    & > .default {
      display: flex;
      flex: 1 1 100%;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        width: 20px;
        height: 20px;
        background-color: red;
        background: url(${MenuIconToggle});
        background-size: 20px 20px;
        margin-right: 7px;
      }
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: #505050;
    }
    & > .item {
      display: flex;
      align-items: center;
      position: relative;
      height: 62px;
      margin-right: 10px;
      padding: 10px;
      border: 1px solid #f0f0f6;
      box-sizing: border-box;
      border-radius: 81px;
      padding: 8px 28px;
      overflow: hidden;
      & > .inner {
        & > h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111111;
        }
        & > .index {
          display: flex;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111111;
          &.red {
            color: #e00400;
          }
          &.blue {
            color: #1b61d1;
          }
          & > .rate {
            display: flex;
            margin-left: 12px;
            & > img {
              margin-right: 4px;
            }
          }
        }
      }
      & > .del {
        position: absolute;
        width: 12px;
        height: 12px;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        right: 24px;
        background: url(${recent_close_icon});
        background-size: 12px 12px;
        cursor: pointer;
        z-index: 1;
      }
      &.active > .inner {
        filter: blur(10px);
        -webkit-filter: blur(10px);
        cursor: default;
      }
    }
  }
`;
