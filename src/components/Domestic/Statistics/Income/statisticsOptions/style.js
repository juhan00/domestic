import styled from "@emotion/styled";

export const OptionsWrapper = styled.div`
  border: 1px solid red;
  max-width: 385px;
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
    height: 27px;
    width: 120px;
    margin-right: 6px;
  }
  .table__header {
    background-color: #5fb6ad;
  }
`;

export const TableBody = styled.table`
  background-color: aqua;

  min-height: 598px;
  width: 100%;
  border-radius: 12px;
  margin: 20px 0 0;
`;
export const Row = styled.tr`
  height: 36px;
  .table__header {
    height: 100px;
  }
  .title {
    background-color: tomato;
  }
  .sub__title {
    background-color: blanchedalmond;
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
