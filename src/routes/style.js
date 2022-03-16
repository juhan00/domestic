import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  position: relative;
  min-width: 1200px;
  min-height: 100vh;
  background-color: #f2f2f8;
  background-image: url("images/background_pattern.png");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center bottom -50px;
  overflow: hidden;
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1600px;
    height: 96px;
    padding: 0 36px;
    margin: 0 auto;
    .logo {
      width: 80px;
    }
    .login {
      width: 80px;
      height: 36px;
      background-color: #f2f2f8;
      line-height: 36px;
      border: 1px solid #48a185;
      border-radius: 5px;
      color: #48a185;
      font-size: 14px;
      &:hover {
        background-color: #fff;
        color: #286f6c;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
  .slogan {
    width: 100vw;
    min-width: 1200px;
    position: absolute;
    top: 12%;
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
  .searchAtHome {
    position: absolute;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    top: 31%;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
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
