import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex: 1 1 0;
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
        & > p {
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
          & > span {
            margin-left: 12px;
          }
        }
      }
      & > .del {
        position: absolute;
        font-size: 12px;
        top: 50%;
        transform: translateY(-50%);
        right: 24px;
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
