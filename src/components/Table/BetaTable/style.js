import styled from "@emotion/styled";


export const TableBody = styled.table`
  /* min-height: 598px; */
  width: 100%;
  margin-top: 18px;
  .table__header {
    background-color: #5fb6ad;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    height: 43px;
    text-align: center;
    td {
      border-radius: 12px 12px 0 0;
    }
  }
  .table__header__sub {
    background-color: #5fb6ad;
    border-top: 1px solid #ffffff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    td {
      padding-left: 30px;
    }
  }
  thead,
  tbody tr {
    display: table;
    width: 100%;
  }
  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: calc(100vh - 498px);
    border-radius: 0 0 12px 12px;
    font-size: 12px;
    tr:nth-of-type(odd) {
      background-color: #ffffff;
    }
    tr:nth-of-type(even) {
      background-color: #fafafe;
    }
    /* tr:last-of-type {
      td {
        height: 50px;
        padding-bottom: 14px;
      }
    } */
    td {
      padding-left: 30px;
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
