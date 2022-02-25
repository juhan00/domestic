import styled from "styled-components";

export const NavStyle = styled.nav`
  position: fixed;
  z-index: 999;
  float:left
  top: 0;
  left: 0;
  width: 248px;
  height: 100vh;
  padding-left: 24px;
  background-color: #fff;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);

  // 메인 메뉴 스타일
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

  // 서브 메뉴
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

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #eee;
  input {
    margin-left: 30px;
    width: 790px;
    height: 40px;
    border: 0;
    border-radius: 40px;
  }
`;

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
