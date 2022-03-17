import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  position: relative;
  width: 664px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  .menuWrapper {
    width: 214px;
    border: 2px solid #f0f0f6;
    border-radius: 4px;
    display: flex;
    align-items: center;
    overflow: hidden;
    .menu {
      position: relative;
      text-align: center;
      width: 107px;
      height: 40px;
      line-height: 40px;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
      color: #999;
      cursor: pointer;
      &.active {
        background-color: #f0f0f6;
        color: #047b6c;
      }
      &:hover {
        background-color: #047b6c;
        color: #fff;
      }
      &:first-of-type {
        &::after {
          position: absolute;
          display: inline-block;
          content: "";
          width: 1px;
          height: 40px;
          background-color: #f0f0f6;
          right: 0;
        }
      }
      &:last-of-type {
        &::after {
          position: absolute;
          display: inline-block;
          content: "";
          width: 1px;
          height: 40px;
          background-color: #f0f0f6;
          left: 0;
        }
      }
    }
  }
  .searchBtn {
    width: 60px;
    height: 40px;
    position: absolute;
    right: 4px;
    background-color: #047b6c;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    svg {
    }
  }
  input {
    width: 350px;
    height: 48px;
    padding-left: 24px;
    border: 0;
    font-size: 14px;
    color: #999;
    &:focus {
      outline: none;
      color: #000;
    }
  }
  .searchResultWrapper {
    position: absolute;
    z-index: 999;
    top: 48px;
    background-color: #fff;
    width: 444px;
    border-radius: 8px;
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
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #047b6c;
      border-radius: 6px;
    }
  }
  mark {
    background-color: transparent;
    color: #047b6c;
    font-weight: 700;
  }
`;
