import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 3px solid brown;

  max-width: 1195px;
  width: 100%;
  margin: 0 10px 10px 10px;
`;

export const TableHeader = styled.table`
  width: 100%;
  border-radius: 12px;
  td {
    text-align: center;
  }
  .table__header {
    background-color: #5fb6ad;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const TableBody = styled.table`
  width: 100%;
  min-height: 598px;
  margin-top: 20px;
  border-radius: 12px;
  td {
    text-align: end;
  }
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
  vertical-align: middle;
  width: 60px;
  font-size: 14px;
  line-height: 22px;
  .header__menu {
    background-color: aqua;
    width: 50px;
  }
`;
