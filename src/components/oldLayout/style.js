import styled from "@emotion/styled";

export const BaseStyle = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
  .hide {
    display: none;
  }
  .testMenu {
    position: sticky;
    z-index: 100;
    top: 0;
    background: #286f6c;
    .menuWrapper {
      display: flex;
      align-items: center;
      height: 70px;
      padding: 0 36px;
      max-width: 1600px;
      margin: 0 auto;
      div {
        height: 44px;
        padding: 0 24px;
        border: 1px solid #fff;
        line-height: 44px;
        border-radius: 91px;
        margin-right: 8px;
        color: #fff;
        cursor: pointer;
        :hover {
          background: #fff;
          color: #286f6c;
          font-weight: 700;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 39px;
  background-image: url("/images/moyaLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Inner = styled.div`
  max-width: 1600px;
  padding: 0 36px;
  margin: 0 auto;
`;
