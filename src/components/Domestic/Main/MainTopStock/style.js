import styled from "@emotion/styled";

export const TopStock = styled.div`
  flex-grow: 2;
  border: 1px solid black;
  min-height: 300px;
  height: 100%;
  padding: 10px;
  & > table {
    margin-top: 20px;
    text-align: center;
    & > thead {
    }
    & > tbody {
      margin-top: 10px;
    }
  }
`;
