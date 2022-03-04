import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 1px solid red;

  background-color: #ffffff;
  margin: 10px;
  max-width: 790px;
  width: 100%;
  max-height: 782px;
  height: 100%;
  border-radius: 12px;
  h1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin: 28px 28px 0;
  }
`;
export const Table = styled.table`
  border: 1px solid blue;

  margin: 20px 32px 32px;
  max-width: 726px;
  width: 100%;
`;
export const Row = styled.tr`
  height: 36px;
  &.sector {
    border-top: 1px solid #f0f0f6;
  }
`;
export const Cell = styled.td`
  border-right: 1px solid #f0f0f6;
  width: 60px;
  &.type {
    width: 92px;
    font-size: 11px;
    line-height: 16px;
    span {
      font-size: 10px;
      line-height: 14px;
    }
  }
`;
