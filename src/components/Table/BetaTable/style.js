import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 20px 20px 0;
`;
export const Table = styled.table`
  width: 100%;
  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    max-height: 540px;
    font-size: 12px;
  }
`;

export const Row = styled.tr`
  background-color: #ffffff;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-of-type(even) {
    background-color: #fafafe;
  }
  &.table__header {
    background-color: #5fb6ad;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
    justify-content: center;
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
    height: 40px;
    text-align: center;
  }
  &.category {
    font-size: 14px;
    justify-content: space-between;
  }
  &.table__body {
    color: #767676;
    justify-content: center;
    font-size: 36px;
    text-align: center;
    height: 90px;
  }
`;
export const Cell = styled.td`
  padding: 0 20px;
  vertical-align: middle;
  &.item {
    text-align: end;
  }
`;
