import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background-color: #286f6c;
`;

export const HaederWrapper = styled.div`
  position: relative;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  padding: 0 36px;
  margin: 0 auto;

  .logo {
    width: 80px;
  }

  .login {
    width: 80px;
    height: 36px;
    background-color: #286f6c;
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
`;

export const SearchOnHeader = styled.div`
  width: 664px;
  border-radius: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 12px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  .searchOption {
    text-align: center;
    line-height: 48px;
    a {
      display: inline-block;
      width: 70px;
      height: 48px;
      text-decoration: none;
      color: #000;
      &.active {
        color: #286f6c;
        font-weight: 700;
      }
    }
    &:first-of-type {
      &::after {
        display: inline-block;
        content: "";
        width: 1px;
        height: 14px;
        background-color: #e5e5e5;
      }
    }
  }
  svg {
    margin: 0 9px;
  }
  input {
    width: 450px;
    height: 48px;
    padding-left: 10px;
    border: 0;
    font-size: 16px;
    :focus {
      outline: none;
    }
  }
  .searchResultWrapper {
    position: absolute;
    z-index: 999;
    top: 72px;
    background-color: #fff;
    width: 475px;
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
