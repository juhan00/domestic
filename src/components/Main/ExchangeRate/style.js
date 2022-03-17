import styled from "@emotion/styled";

export const ExchangeRateWrapper = styled.div`
  & > .loaderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  width: 100%;
  height: 498px;
  background: #fff;
  border-radius: 12px;
  padding: 28px;
  &.domestic {
    height: 498px;
    .title {
      height: 44px;
    }
  }
  &.global {
    height: 682px;
    .title {
      height: 82px;
    }
  }
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
        transition: all ease 0.5s;
        animation-timing-function: ease-in-out;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: #fafafa;
        padding: 0 5px 0 0;

        & > .listInfoWrapper {
          margin-left: auto;
          display: flex;
          align-items: center;
          .info {
            display: flex;
            align-items: center;
            color: #111;
            .index {
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
            }
            .vs {
              margin-left: 15px;
              & > img {
                margin-right: 5px;
                transform: translateY(-1px);
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
              margin: 0 12px 0 8px;
            }
            &.up {
              color: #e00400;
            }
            &.down {
              color: #1b61d1;
            }
          }
        }

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
      }
      .content {
        overflow: hidden;
        transition: all ease-in-out 0.5s;
        display: flex;
        height: 0px;
        .info {
          & > .indexWrapper {
            margin-top: 10px;
            display: flex;
            align-items: center;
            color: #111;
            .index {
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
            }
            .vs {
              margin-left: 15px;
              & > img {
                margin-right: 5px;
                transform: translateY(-1px);
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
            &.up {
              color: #e00400;
            }
            &.down {
              color: #1b61d1;
            }
          }
          .upDownWrapper {
            white-space: nowrap;
            display: flex;
            .upDown {
              margin-right: 20px;
            }
            .week {
              margin-left: auto;
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
                text-align: right;
                &.up {
                  color: #e00400;
                }
                &.down {
                  color: #1b61d1;
                }
              }
            }
            .item + .item {
              margin-top: 15px;
            }
          }
          .date {
            margin-top: 15px;
            width: 100%;
            text-align: left;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
            color: #999;
            white-space: nowrap;
          }
        }
        .chart {
          margin-left: auto;
          width: 100%;
          padding-left: 10%;
          box-sizing: border-box;
        }
      }
      &.active {
        .title {
          background-color: #fff;
          .info {
            display: none;
          }
          .arrow {
            transform: rotate(-180deg);
          }
        }
        .content {
          height: 170px;
        }
      }
    }
  }
`;
