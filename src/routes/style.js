import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
  background-image: url("images/background_pattern.png");
  background-repeat: no-repeat;
  background-position: center bottom -20%;
  overflow: hidden;
  .menuWrapper {
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
    .searchResultWrapper {
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
        .searchResultItem {
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
