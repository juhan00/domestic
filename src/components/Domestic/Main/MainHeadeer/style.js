import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid black;
  max-height: 300px;
  height: 100%;
  padding: 10px;

  & > h2 {
    width: 60px;
    font-size: 18px;
  }

  & > .itemWrapper {
    display: flex;
    & > .item {
      margin-right: 20px;
    }
  }
`;
