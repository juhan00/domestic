import styled from "@emotion/styled";

export const Page = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 16px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;

export const Button = styled.button`
  border: none;
  border-radius: 16px;
  padding: 8px 12px;
  /* font-size: 1rem; */

  &:hover {
    /* background: tomato; */
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    /* background: grey; */
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