import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 585px;
  border-radius: 12px;
  overflow: hidden;
`;
export const Table = styled.table`
  height: 100%;
  width: 100%;
  
  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    max-height: 542px;
    font-size: 12px;
  }
`;

export const Row = styled.tr`
  background-color: #ffffff;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:nth-of-type(even) {
    background-color: #fafafe;
  }
  &.table__header {
    border-bottom: 3px solid #E5EEEE;
    color: #767676;
    justify-content: center;
    font-size: 18px;
    line-height: 43px;
    font-weight: 700;
    height: 43px;
    text-align: center;
    
  }
  &.category {
    font-size: 14px;
    justify-content: space-around;
  }
  &.table__body {
    color: #505050;
    justify-content: center;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    height: 52px;
    border-radius: 0 0 12px 12px;
  }
`;
export const Cell = styled.td`
  vertical-align: middle;
  &.item {
    text-align: end;
  }
`;
