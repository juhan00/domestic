import styled from "@emotion/styled";

export const Page = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  /* font-size: 1rem; */

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #5FB6AD;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;