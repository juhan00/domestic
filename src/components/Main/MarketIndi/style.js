import styled from "@emotion/styled";

export const MarketIndiWrapper = styled.div`
  width: 100%;
  height: 544px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & > .top {
    display: flex;
    align-items: center;
    & > h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
      min-width: 100px;
    }
    & > span {
      font-size: 11px;
      font-weight: 400;
      line-height: 1.5;
      color: #767676;
      margin-left: auto;
    }
  }
  & > ul {
    margin-top: 20px;
    & > li {
      display: flex;
      align-items: center;
      height: 112px;
      border-top: 1px solid #f0f0f6;
      .title {
        margin-left: 24px;
        h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #767676;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          color: #111111;
        }
      }
      .index {
        display: flex;
        margin-left: auto;
        color: #111111;
        &.red {
          color: #e00400;
        }
        &.blue {
          color: #1b61d1;
        }
        .point {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
        }
        .vs {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
          margin-left: 16px;
          & > img {
            margin-right: 4px;
          }
        }
      }
    }
    & > li:last-of-type {
      border-bottom: 1px solid #f0f0f6;
    }
  }
`;
