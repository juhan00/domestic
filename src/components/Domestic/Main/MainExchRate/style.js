import styled from "@emotion/styled";

export const ExchRate = styled.div`
  width: 100%;
  flex: 1 1 0;
  height: 544px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  margin-left: 20px;
  & > h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #111;
    margin-bottom: 20px;
  }
  & > .item {
    border-top: 1px solid #f0f0f6;
    .title {
      display: flex;
      height: 40px;
      align-items: center;
      h3 {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: #111;
      }
      .info {
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
`;
