import styled from "@emotion/styled";

export const ExchangeRateWrapper = styled.div`
  width: 100%;
  height: 498px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  & .top {
    & > h2 {
      display: flex;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
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
        height: 44px;
        align-items: center;
        cursor: pointer;
        background-color: #fafafa;
        padding: 0 5px 0 0;
        h3 {
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: #111;
        }

        .arrow {
          margin-left: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
        }
        &.active {
          background-color: transparent;
          .arrow {
            transform: rotate(-180deg);
          }
        }
      }
      .content {
        display: flex;
        .info {
          .indexWrapper {
            margin-top: 10px;
            display: flex;
            align-items: center;
            .index {
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              color: #111;
            }
            .vs {
              margin-left: 15px;
              & > img {
                margin-right: 5px;
              }
              display: flex;
              align-items: center;
              font-size: 13px;
              font-weight: 400;
              line-height: 1.5;
            }
            .rate {
              font-size: 13px;
              font-weight: 400;
              line-height: 1.5;
              margin-left: 8px;
            }
          }
          .upDownWrapper {
            white-space: nowrap;
            display: flex;
            .upDown {
              .item {
                p {
                  color: #e82b2b;
                }
              }
            }
            .week {
              margin-left: 20px;
              .item {
                p {
                  color: #111;
                }
              }
            }
            .item {
              margin-top: 20px;
              display: flex;
              h4 {
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                color: #111;
              }
              p {
                font-size: 14px;
                font-weight: 400;
                line-height: 1.5;
                margin-left: 14px;
              }
            }
            .item + .item {
              margin-top: 15px;
            }
          }
          .date {
            margin-top: 15px;
            width: 100%;
            text-align: right;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
            color: #999;
          }
        }
        .chart {
          margin-left: auto;
          max-width: 340px;
        }
      }
    }
  }
`;
