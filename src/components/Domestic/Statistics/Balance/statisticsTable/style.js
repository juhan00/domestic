import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 1px solid blue;

  max-width: 1195px;
  width: 100%;
  max-height: 991px;
  height: 100%;
  margin: 0 10px 10px 10px;
`;

export const TableHeader = styled.table`
  background-color: red;

  width: 100%;
  border-radius: 12px;
  td {
    text-align: center;
  }
  .table__header {
    background-color: #5fb6ad;
  }
`;

export const TableBody = styled.table`
  background-color: aqua;

  width: 100%;
  min-height: 598px;
  margin-top: 20px;
  border-radius: 12px;
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
