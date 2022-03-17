import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  max-width: 790px;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  padding: 28px;
  h1 {
    color: #111111;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin-bottom: 10px;
  }
`;
export const Table = styled.table`
  max-width: 726px;
  width: 100%;
  text-align: end;
`;
export const Row = styled.tr`
  height: 42px;
  &.title {
    color: #767676;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const Cell = styled.td`
  width: 60px;
  vertical-align: middle;
  &.date {
    text-align: start;
  }
`;
