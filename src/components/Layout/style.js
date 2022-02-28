import styled from "@emotion/styled";

// 내비 스타일
export const NavStyle = styled.nav`
  position: fixed;
  z-index: 999;
  float: left;
  top: 0;
  left: 0;
  width: 248px;
  height: 100vh;
  padding-left: 24px;
  background-color: #fff;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);

  .mainMenu {
    display: flex;
    align-items: center;
    margin-top: 32px;
    font-size: 16px;
    .menuIcon {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
    a {
      color: #000;
      text-decoration: none;
      &.active {
        font-weight: 700;
      }
    }
    .toggleBtn {
      position: absolute;
      right: 40px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }

  .subMenu {
    font-size: 14px;
    li {
      padding: 20px 0 0 40px;
    }
    a {
      color: #000;
      text-decoration: none;
      &.active {
        background-color: #5fb6ad;
        color: #fff;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 39px;
  margin: 34px 0 60px;
  background-image: url("/images/moyaLogo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainSection = styled.div`
  position: relative;
  left: 248px;
  margin: 0 auto;
`;

// 헤더 스타일
export const HeaderStyle = styled.header`
  width: 100%
  height: 50px;
  background-color: #eee;
  `;
export const HaederMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
`;
export const SearchMenuStyleOnHeader = styled.li`
  margin-left: 30px;
  height: 40px;
  .searchContainer {
    width: 790px;
    .searchFormWrapper {
      form {
        input {
          width: 100%;
          height: 30px;
          border: 0;
          border-radius: 15px;
          padding: 0 10px;
          :focus {
            border: 1px solid #5fb6ad;
            outline: none;
            font-weight: 700;
            box-sizing: border-box;
          }
        }
      }
    }
    .seachResultWrapper {
      position: absolute;
      top: 30px;
      left: 30px;
      z-index: 9999999;
      background-color: #fff;
      width: 790px;
      border-radius: 10px;
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      max-height: 300px;
      overflow-y: scroll;
      &.hide {
        display: none;
      }
      .searchResultList {
        .serachResultItem {
          padding: 4px 10px;
          font-size: 16px;
          width: 100%;
          height: 24px;
          a {
            text-decoration: none;
            color: #5f5f5f;
            font-size: 14px;
            span {
              color: #000;
              font-size: 16px;
            }
          }
          &:hover {
            background-color: #5fb6ad;
            a {
              color: #fff;
              span {
                color: #fff;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`;

// 주식 개요 스타일
export const StockInfoStyle = styled.div`
  border: 1px solid red;
  height: 158px;
  max-width: 1600px;
  section {
    display: flex;
    & > div {
      border: 1px solid red;
      max-width: 400px;
      width: 100%;
      height: 94px;
    }
    .stock {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .category {
        & > div {
          border: 1px solid aqua;
          display: flex;
        }
      }
    }
    .price {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .tradingVolume {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
  nav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      border: 1px solid blue;
      width: 180px;
      height: 100%;
      text-align: center;
      text-decoration: none;
    }
  }
`;
