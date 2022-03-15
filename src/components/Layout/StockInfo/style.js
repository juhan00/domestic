import styled from "@emotion/styled";

// 주식 개요 스타일
export const StockInfoContainer = styled.div`
  padding: 8px 0;
  margin: 0 auto;
  overflow: hidden;
  .stockRecap {
    position: absolute;
    z-index: 990;
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

  .stockInfoWrapper {
    background: #fff;
    font-size: 14px;
    border-radius: 12px;
    ul {
      height: 110px;
      position: relative;
      display: flex;
      align-items: center;
      white-space: nowrap;
      padding: 0 30px;
      li {
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
