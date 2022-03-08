import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  max-width: 790px;
  width: 100%;
  max-height: 782px;
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
  max-width: 726px;
  width: 100%;
  font-size: 11px;
  line-height: 16px;
  text-align: end;
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
  .title__sub {
    color: #505050;
    text-align: center;
  }
  &.date {
    color: #505050;
  }
  &.sector {
    border-top: 1px solid #f0f0f6;
  }
  &.ifrs {
    color: #5fb6ad;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const Cell = styled.td`
  border-right: 1px solid #f0f0f6;
  width: 60px;
  vertical-align: middle;
  padding: 0 4px;
  &.type {
    color: #505050;
    width: 92px;
    text-align: start;
    font-weight: 500;
    span {
      font-size: 10px;
      font-weight: 400;
      line-height: 14px;
    }
  }
`;
