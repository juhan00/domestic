import styled from "@emotion/styled";

export const TableHeaderWrapper = styled.table`
  width: 100%;
  td {
    text-align: center;
  }
  .table__header {
    background-color: #5fb6ad;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 43px;
    td {
      border-radius: 12px 12px 0 0;
    }
  }
  .table__body {
    td {
      background-color: #ffffff;
      color: #767676;
      font-size: 36px;
      font-weight: 500;
      height: 87px;
      border-radius: 0 0 12px 12px; 
    }
  }
`;

export const Row = styled.tr`
  height: 36px;
  .table__header {
  }
`;
export const Cell = styled.td`
  vertical-align: middle;
`;
