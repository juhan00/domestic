import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background: #48a185;
  .totop {
    transform: translateX(0);
  }
`;

export const HeaderInnerTemplate = styled.div`
  max-width: 1600px;
  padding: 0 36px;
  margin: 0 auto;
`;

export const HaederWrapper = styled.div`
  position: relative;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const ToTop = styled.div`
  position: fixed;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 80px;
  bottom: 80px;
  right: 40px;
  background-color: #50a399;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transform: translateX(100px);
  transition: 0.3s;
  cursor: pointer;
  & > img {
    width: 10px;
  }
`;
