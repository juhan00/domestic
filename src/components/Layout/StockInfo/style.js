import styled from "@emotion/styled";

// 주식 개요 스타일
export const StockInfoStyle = styled.div`
  width: 100%;
  margin-bottom: 30px;
  .stockInfoContainer {
    width: 100%;
    height: 110px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .stockInfoWrapper {
    font-size: 14px;
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
        /* .stockRecap {
          position: absolute;
          z-index: 10;
          width: 300px;
          height: 300px;
          background-color: #eee;
        } */
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
      transform: rotate(180deg);
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
