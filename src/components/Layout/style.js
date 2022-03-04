import styled from "@emotion/styled";

export const BaseStyle = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
`;

// 내비 스타일
export const NavStyle = styled.nav`
  position: fixed;
  z-index: 999;
  top: 76px;
  left: 0;
  width: 248px;
  height: calc(100vh - 76px);
  padding-left: 24px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 12px 0 0;

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
  margin: 17px 0 0 36px;
  width: 100px;
  height: 39px;
  background-image: url("images/moyaLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainSection = styled.div`
  position: relative;
  padding-top: 76px;
  padding-left: 248px;
  width: 100%;
  overflow: hidden;
  .mainContainer {
    padding: 0 30px 30px 30px;
  }
`;

// 헤더 스타일
export const HeaderStyle = styled.header`
  position: fixed;
  background-color: #f2f2f8;
  z-index: 999;
  width: 100vw;
  height: 76px;
`;
export const HaederMenuWrapper = styled.ul`
  display: flex;
  align-items: center;
`;
export const SearchMenuStyleOnHeader = styled.li`
  position: absolute;
  left: 284px;
  top: 20px;
  .searchContainer {
    height: 40px;
    width: 790px;
    box-shadow: 0 50px 30px -30px rgba(0, 0, 0, 0.5);
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
      top: 30px;
      left: 30px;
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
      padding: 0 30px;
      li {
        width: 100%;
        margin-right: 60px;
        .provider {
          width: 1px;
          height: 32px;
          background: #eee;
        }
        .infoValue {
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

// 홈 화면
export const HomeStyle = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
  background-image: url("images/background_pattern.png");
  background-repeat: no-repeat;
  background-position: center bottom -20%;
  overflow: hidden;
  ul {
    width: 348px;
    position: fixed;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    li {
      font-weight: 700;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
  .slogan {
    width: 100vw;
    position: fixed;
    top: 21%;
    text-align: center;
    font-size: 40px;
    line-height: 70px;
    span {
      color: #5fb6ad;
      font-weight: 700;
    }
    div {
      font-size: 60px;
    }
  }
`;

export const SearchMenuStyleAtHome = styled.div`
  position: fixed;
  width: 913px;
  height: 80px;
  display: flex;
  background-color: #fff;
  border-radius: 45px;
  border: 0;
  padding: 30px;
  left: 50%;
  top: 48%;
  transform: translateX(-50%);
  box-shadow: 0 50px 30px -30px rgba(0, 0, 0, 0.5);
  .searchContainer {
    width: 80%;
    .searchFormWrapper {
      form {
        input {
          width: 100%;
          height: 50px;
          transform: translateY(-25%);
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
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      max-height: 300px;
      overflow-y: scroll;
      &.hide {
        display: none;
      }
      .searchResultList {
        .serachResultItem {
          margin-top: 10px;
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
  .dropdownWrapper {
    cursor: pointer;
    .optionList {
      margin-top: 10px;
      background-color: #fff;
      width: 80%;
      border-radius: 10px;
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
      .optionItem {
        padding: 4px 10px;
        font-size: 16px;
        width: 100%;
        margin-top: 10px;
        padding: 4px 10px;
        a {
          text-decoration: none;
          color: #5f5f5f;
          font-size: 14px;
        }
        &:hover {
          background-color: #5fb6ad;
          color: #fff;
        }
      }
    }
    .btnToggle {
      transform: rotate(180deg);
      width: 9px;
      height: 4.5px;
      margin: 0 30px;
    }
  }
`;
