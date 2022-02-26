import styled from "@emotion/styled";

export const TableWrapper = styled.table`
  margin: 10px;
  max-width: 790px;
  width: 100%;
  max-height: 790px;
  height: 100%;
`;
export const Row = styled.tr`
  height: 36px;
  .table__header {
    height: 100px;
  }
  .header__menu {
    background-color: tomato;
    width: 100px;
  }
`;
export const Cell = styled.td`
  border: 1px solid blue;
  width: 60px;
  .header__menu {
    background-color: aqua;
    width: 50px;
  }
`;
