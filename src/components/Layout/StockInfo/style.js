import styled from "@emotion/styled";

// 주식 개요 스타일
export const StockInfoContainer = styled.div`
  position: relative;
  padding: 8px 0;
  margin: 0 auto;
  .stockInfoWrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    border-radius: 8px;
    color: #fff;
    padding: 0 32px;
    ul {
      height: 110px;
      position: relative;
      display: flex;
      align-items: center;
      white-space: nowrap;
      li {
        margin-left: 33px;
        .stockName {
          display: flex;
          align-items: flex-end;
          line-height: 24px;
          h3 {
            font-size: 18px;
            font-weight: 700;
            margin-right: 5px;
          }
          span {
            color: #8cd7cd;
          }
        }
        .stockPrice {
          display: flex;
          align-items: center;
          padding-top: 4px;
          color: #8cd7cd;
          .price {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            margin-left: 5px;
            color: #fff;
          }
          .marketType {
            font-size: 11px;
            color: #fff;
            height: 16px;
            line-height: 16px;
            padding: 0px 12px;
            margin: 0 8px;
            background: #286f6c;
            border-radius: 4px;
          }
          .date {
            font-size: 11px;
          }
        }
        .provider {
          width: 1px;
          height: 32px;
          background: #299889;
        }
        .infoTitle {
          font-size: 14px;
          line-height: 22px;
          color: #a0ddd5;
        }
        .infoValue {
          padding-top: 4px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          span {
            font-size: 14px;
            color: #b1dfdc;
            margin-left: 2px;
          }
        }
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
    .toggle {
      position: absolute;
      right: 32px;
      display: flex;
      align-items: center;
      color: #a0ddd5;
      cursor: pointer;
    }
  }
`;

export const MoreInfoContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  z-index: 990;
  width: 800px;
  padding: 32px 28px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
    .title {
      display: block;
      font-size: 18px;
      line-height: 26px;
    }
    .source {
      display: block;
      font-size: 12px;
      color: #999;
    }
  }
  .recap {
    text-align: justify;
    color: #505050;
    margin-bottom: 16px;
    line-height: 22px;
  }
  ul {
    display: flex;
    align-items: center;
    white-space: nowrap;
    li {
      margin-left: 33px;
      .infoTitle {
        line-height: 22px;
        color: #767676;
      }
      .infoValue {
        padding-top: 4px;
        line-height: 22px;
        font-weight: 700;
        span {
          font-size: 13px;
          color: #767676;
          margin-left: 2px;
        }
      }
      &:first-of-type {
        margin: 0;
      }
    }
  }
`;
