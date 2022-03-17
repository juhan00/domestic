import styled from "@emotion/styled";

export const Page = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  .overflow {
    overflow: hidden;
    width: 326px;
  }
  .arrow {
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      border-top: 2px solid #505050;
      border-right: 2px solid #505050;
      transform: rotate(45deg);
      position: absolute;
      top:6px;
      left: 4px;
    }
    &.left::after {
      transform: rotate(-135deg);
      left: 5px;

    }
  }

`;
export const ArrayWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 326px;
  margin-right: 34px;
`
export const Button = styled.button`
  flex-shrink:0;
  border: none;
  border-radius: 9px;
  font-size: 13px;
  height: 18px;
  min-width: 18px;
  padding: 0;
  box-sizing: border-box;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
    &::after {
      border-color: #999999;
    }
  }

  &[aria-current] {
    background: #286F6C;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 13px;
    cursor: revert;
    transform: revert;
  }
`;