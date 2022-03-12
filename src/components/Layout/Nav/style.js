import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  position: sticky;
  z-index: 99;
  top: 0;
  background-color: #286f6c;

  .menuWrapper {
    max-width: 1600px;
    display: flex;
    align-items: center;
    max-width: 1600px;
    padding: 12px 36px 20px;
    margin: 0 auto;

    a {
      height: 44px;
      padding: 0 24px;
      border: 1px solid #fff;
      line-height: 44px;
      border-radius: 91px;
      margin-right: 8px;
      color: #fff;
      text-decoration: none;
      /* cursor: pointer; */
      :hover {
        background: #fff;
        color: #286f6c;
        font-weight: 700;
      }
    }
  }
`;

export const MenuItem = styled.div`
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
`;
