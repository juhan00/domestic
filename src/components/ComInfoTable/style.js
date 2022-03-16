import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  min-height: 782px;
  height: 100%;
  border-radius: 12px;
  padding: 28px 32px 32px;
  h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin: 0 -4px 20px;
  }
`;
export const Table = styled.table`
  width: 100%;
  font-size: 11px;
  line-height: 16px;
  text-align: end;
  border-collapse: separate;
  border-spacing: 0 10px;
`;
export const Row = styled.tr`
  height: 36px;
  &.title {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: start;
    td {
      padding: 0;
    }
  }
  &.date {
    color: #999999;
    font-size: 12px;
    line-height: 16px;
  }
  &.sector {
    border-top: 1px solid #767676;
  }
  &.ifrs {
    color: #e76666;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
  }
`;
export const Cell = styled.td`
  width: 60px;
  height: 20px;
  border-right: 1px solid #f0f0f6;
  vertical-align: middle;
  padding: 0 4px;
  &.title__sub {
    color: #286f6c;
    background-color: #e8f1ee;
    text-align: center;
  }
  &.type {
    color: #505050;
    width: 92px;
    border: none;
    text-align: start;
    font-weight: 500;
    span {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`;
