import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  position: relative;
  min-width: 1200px;
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
  background-image: url("images/background_pattern.png");
  background-repeat: no-repeat;
  background-position: center bottom -20%;
  overflow: hidden;
  .logo {
    position: fixed;
    width: 80px;
  }
  .menuWrapper {
    width: 348px;
    position: absolute;
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
    min-width: 1200px;
    position: absolute;
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
  .hide {
    display: none;
  }
`;

export const SearchAtHome = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateX(-50%);
  width: 913px;
  border-radius: 45px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  .searchOption {
    display: inline-block;
    text-align: center;
    line-height: 80px;
    width: 100px;
    height: 80px;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    &:first-of-type {
      &::after {
        position: relative;
        display: inline-block;
        content: "";
        width: 2px;
        height: 20px;
        background-color: #e5e5e5;
        float: right;
        margin-top: 30px;
      }
    }
  }
  svg {
    margin: 0 9px;
  }
  input {
    width: 600px;
    height: 80px;
    padding-left: 10px;
    border: 0;
    font-size: 18px;
    :focus {
      outline: none;
    }
  }
  .searchResultWrapper {
    position: absolute;
    z-index: 999;
    top: 72px;
    background-color: #fff;
    width: 600px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    max-height: 300px;
    overflow-y: auto;
    .searchResultItem {
      a {
        font-size: 16px;
        padding: 6px 10px;
        display: block;
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
`;

export const TermsStyle = styled.div`
  min-width: 1200px;
  .header {
    background-color: #48a185;
    .inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1600px;
      height: 88px;
      padding: 0 36px;
      margin: 0 auto;
      .logo {
        width: 80px;
        opacity: 50%;
      }
      .login {
        width: 80px;
        height: 36px;
        background-color: #48a185;
        line-height: 36px;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 14px;
        &:hover {
          background-color: #fff;
          color: #286f6c;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
  }
  & > .inner {
    max-width: 1600px;
    padding: 40px 36px;
    margin: 0 auto;
    .termsWrapper {
      width: 100%;
      border: 1px solid #dadada;
      border-radius: 8px;
      padding: 40px 36px;
    }
    .title {
      color: #767676;
      font-size: 12px;
      line-height: 18px;
      span {
        display: block;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #000;
        margin-bottom: 4px;
      }
    }
    .provider {
      height: 2px;
      border-radius: 2px;
      background-color: #047b6c;
      margin: 16px 0;
    }
    .list {
      color: #505005;
      font-size: 14px;
      line-height: 22px;
      .listNumber {
        display: block;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: #505050;
        margin: 8px 0;
      }
      & > div {
        margin-left: 5px;
        & > div {
          margin-left: 5px;
        }
      }
    }
    .btn {
      display: inline-block;
      width: 207px;
      height: 56px;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 56px;
      text-align: center;
      color: #ffffff;
      background-color: #047b6c;
      border-radius: 4px;
      margin-top: 20px;
      margin-right: 12px;
    }
  }
`;
