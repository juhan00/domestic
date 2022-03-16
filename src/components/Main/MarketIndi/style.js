import styled from "@emotion/styled";

export const MarketIndiWrapper = styled.div`
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
  & > .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #111;
    }
    .date {
      margin-left: auto;
      height: 21px;
      line-height: 21px;
      padding: 0 8px;
      box-sizing: border-box;
      border: 1px solid #e8f1ee;
      border-radius: 21px;
      font-size: 11px;
      font-weight: 400;
      color: #286f6c;
    }
  }
  & > .itemWrapper {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .item {
      display: flex;
      align-items: center;
      width: calc(50% - 20px);
      height: 160px;
      background-color: #fafafe;
      border-radius: 20px;
      padding: 0 0 0 32px;
      ul {
        margin-left: 28px;
        li {
          h3 {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: #767676;
          }
          .descript {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.5;
            color: #0e393a;
          }
          .index {
            display: flex;
            color: #111111;
            .point {
              font-size: 22px;
              font-weight: 500;
              line-height: 1.5;
            }
            .vs {
              position: relative;
              top: 3px;
              display: flex;
              align-items: center;
              font-size: 13px;
              font-weight: 400;
              line-height: 1.5;
              margin-left: 16px;
              & > img {
                margin-right: 4px;
                transform: translateY(-2px);
              }
            }
            &.up {
              color: #f5746b;
            }
            &.down {
              color: #065398;
            }
          }
        }
      }
    }
  }
`;
