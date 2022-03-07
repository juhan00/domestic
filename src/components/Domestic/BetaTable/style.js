import styled from "@emotion/styled";

export const TableHeader = styled.table`
  width: 23.913043%;
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
      border-bottom-left-radius: 12px;
      background-color: #FFFFFF;
      color: #767676;
      font-size: 36px;
      font-weight: 500;
      height: 87px;
      border-radius: 0 0 12px 12px; 
    }
  }
`;
export const TableBody = styled.table`
  min-height: 598px;
  width: 23.913043%;
  margin-top: 18px;
  .table__header {
    background-color: #5fb6ad;
    color: #FFFFFF;
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
    border-top: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    td {
      padding-left: 30px;
    }
  }
  tbody {
    font-size: 12px;
    tr:nth-of-type(odd) {
      background-color: #FFFFFF;
    }
    tr:nth-of-type(even) {
      background-color: #FAFAFE;
    }
    tr:last-child {
      td {
        height: 50px;
        padding-bottom: 14px;
      }
      td:first-child {
        border-radius: 0 0 0 12px;
      } 
      td:last-child {
        border-radius: 0 0 12px 0;
      } 
    }
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
