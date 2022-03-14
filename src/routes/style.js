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
