import styled from "@emotion/styled";

export const ExchangeRateWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
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
    margin-bottom: 20px;
  }
  & > .itemWrapper {
    & > .item {
      border-top: 1px solid #f0f0f6;
      .title {
        display: flex;
        height: 40px;
        align-items: center;
        cursor: pointer;
        h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }
        .info {
          display: flex;
          align-items: center;
          margin-left: auto;
          color: #111;
          &.red {
            color: #e00400;
          }
          &.blue {
            color: #1b61d1;
          }
          .index {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
          }
          .vs {
            & > img {
              margin-right: 4px;
            }
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.5;
            margin-left: 8px;
          }
          .rate {
            font-size: 13px;
            font-weight: 400;
            line-height: 1.5;
            margin-left: 8px;
          }
        }
      }
      .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        margin-left: 12px;
        &.active {
          transform: rotate(-180deg);
        }
      }
    }
  }
`;
