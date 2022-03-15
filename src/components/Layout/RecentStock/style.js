import styled from "@emotion/styled";
import MenuIconToggle from "@images/notice_icon.svg";

export const RecentStockWrapper = styled.div`
  height: 110px;
  display: flex;
  flex: 1 1 0;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  overflow: hidden;
  margin-bottom: 20px;

  & > h2 {
    display: flex;
    align-items: center;
    width: 60px;
    font-size: 16px;
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
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #505050;
    }
    & > .item {
      display: flex;
      align-items: center;
      position: relative;
      height: 62px;
      min-width: 100px;
      margin-right: 10px;
      border: 1px solid #e5e5ec;
      box-sizing: border-box;
      border-radius: 81px;
      cursor: pointer;
      & > .inner {
        padding: 8px 28px;

        & > h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #767676;
        }
        & > .index {
          display: flex;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #111111;
          & > .rate {
            font-size: 16px;
            font-weight: 400;
            display: flex;
            margin-left: 12px;
            &.red {
              color: #e82b2b;
            }
            &.blue {
              color: #065398;
            }
            & > img {
              width: 10px;
              margin-right: 4px;
            }
          }
        }
      }
      & > .del {
        display: none;
      }
      &.active > .inner {
        cursor: default;
      }
      &:hover {
        .del {
          display: block;
          position: absolute;
          width: 26px;
          height: 26px;
          padding: 4px;
          top: 50%;
          transform: translateY(-50%);
          right: 18px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
          cursor: pointer;
          z-index: 1;
        }
      }
    }
  }
`;
