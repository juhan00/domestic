import styled from "@emotion/styled";

export const BaseStyle = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: #f2f2f8;
`;

export const Logo = styled.div`
  margin: 17px 0 0 36px;
  width: 100px;
  height: 39px;
  background-image: url("images/moyaLogo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainSection = styled.div`
  position: relative;
  width: calc(100% - 212px);
  padding: 76px 36px 30px 36px;
  float: right;
  overflow: hidden;

  @media (max-width: 1600px) {
    width: calc(100% - 45px);
  } ;
`;
