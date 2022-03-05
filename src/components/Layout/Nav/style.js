import styled from "@emotion/styled";

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
      display: block;
      width: 80px;
      height: 30px;
      margin-left: 80px;
      color: #767676;
      text-decoration: none;
      line-height: 30px;
      border-radius: 55px;
      &.active {
        color: #5fb6ad;
        font-weight: 700;
      }
    }
  }
`;
