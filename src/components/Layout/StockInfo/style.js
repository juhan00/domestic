import styled from "@emotion/styled";

// 주식 개요 스타일
export const StockInfoStyle = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 30px;
  .stockInfoContainer {
    width: 100%;
    height: 110px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e0e0e0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      margin: 0 12px;
      border-radius: 10px;
    }
    .stockRecap {
      position: absolute;
      z-index: 10;
      width: 70%;
      padding: 30px;
      border-radius: 12px;
      background-color: #fff;
      border: 1px solid #5fb6ad;
      text-align: justify;
      margin: 55px 0 0 100px;
      .title {
        display: block;
        font-weight: 700;
        margin-bottom: 15px;
      }
      .source {
        display: block;
        margin-top: 15px;
        font-size: 12px;
      }
    }
  }
  .stockInfoWrapper {
    font-size: 14px;
    white-space: nowrap;
    ul {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      padding: 0 30px;
      li {
        width: 100%;
        margin-right: 60px;
        .stockName {
          display: flex;
          align-items: center;
          img {
            cursor: pointer;
          }
        }
        .stockPrice {
          padding-top: 10px;
        }
        .provider {
          width: 1px;
          height: 32px;
          background: #e5e5ec;
        }
        .infoValue {
          padding-top: 10px;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    h3 {
      display: inline;
      font-size: 18px;
      font-weight: 700;
      margin-right: 5px;
    }
    img {
      width: 10px;
      height: 5px;
      margin-right: 10px;
    }
    .price {
      font-size: 16px;
      font-weight: 700;
      color: #5fb6ad;
      margin-left: 5px;
      margin-right: 10px;
    }
    .date {
      font-size: 11px;
    }
  }
`;
