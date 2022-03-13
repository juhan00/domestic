import styled from "@emotion/styled";

export const Page = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  flex-shrink:0;
  border: none;
  border-radius: 9px;
  font-size: 13px;
  height: 18px;
  min-width: 18px;
  padding: 2px;
  /* box-sizing: border-box; */
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #5FB6AD;
    color: #FFFFFF;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;