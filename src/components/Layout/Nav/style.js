import styled from "@emotion/styled";

export const Dark = styled.div`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.6;
`;

export const NavStyle = styled.nav`
  position: fixed;
  z-index: 999;
  top: 76px;
  left: 0;
  width: 212px;
  height: calc(100vh - 76px);
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 12px 0 0;

  .mainMenu {
    font-size: 16px;
    margin-top: 12px;
    a {
      display: flex;
      align-items: center;
      height: 56px;
      color: #000;
      text-decoration: none;
      svg {
        fill: #999999;
        margin: 0 18px 0 26px;
      }
      &.active {
        font-weight: 700;
        svg {
          fill: #5fb6ad;
        }
      }
    }
  }

  .subMenu {
    font-size: 14px;
    .submenuItem {
      display: block;
      width: 124px;
      height: 30px;
      margin: 4px 40px 0 48px;
      padding-left: 16px;
      color: #505050;
      text-decoration: none;
      line-height: 30px;
      border-radius: 55px;
      &.active {
        background-color: #5fb6ad;
        color: #fff;
        font-weight: 500;
      }
    }
    .thirdmenuItem {
      display: inline-block;
      height: 30px;
      margin-left: 64px;
      color: #767676;
      text-decoration: none;
      line-height: 30px;
      &::before {
        display: inline-block;
        content: "";
        width: 4px;
        height: 4px;
        background: #e5e5ec;
        border-radius: 4px;
        margin: 0 12px 3px 0;
      }
      &.active {
        color: #5fb6ad;
        font-weight: 700;
        &::before {
          background: #5fb6ad;
        }
      }
    }
  }

  .toggleIcon {
    display: none;
  }

  /* 1600 이하 */
  @media (max-width: 1600px) {
    width: 212px;
    background: #fff;
    transition: 0.2s;
    .toggleIcon {
      display: flex;
      align-items: center;
      width: 60px;
      height: 56px;
      margin-top: 12px;
      transition: 0.2s;
      cursor: pointer;
      svg {
        margin-left: 26px;
      }
    }
    &.close {
      transform: translateX(-167px);
      .toggleIcon {
        transition: 0.2s;
        transform: translateX(152px);
        width: 60px;
      }
      .mainMenu {
        margin-top: 0;
        transition: 0.2s;
        cursor: pointer;
        svg {
          position: absolute;
          margin-left: 179px;
        }
        .mainMenuTilte {
          position: absolute;
          margin-left: 215px;
          padding: 5px;
          width: 80px;
          text-align: center;
          background: #5fb6ad;
          font-weight: 500;
          color: #fff;
          border-radius: 5px;
          opacity: 0;
          &:after {
            content: "";
            position: absolute;
            top: 8px;
            left: -7px;
            border-right: 7px solid #5fb6ad;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
        }
        &:hover {
          background: #eee;
          .mainMenuTilte {
            opacity: 1;
            transition: 0.3s;
          }
        }
      }
      .subMenu {
        display: none;
      }
    }
  }
`;
