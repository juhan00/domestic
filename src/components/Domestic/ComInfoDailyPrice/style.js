import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  border: 1px solid red;

  background-color: #ffffff;
  margin: 20px 10px 0;
  max-width: 790px;
  width: 100%;
  max-height: 384px;
  height: 100%;
  border-radius: 12px;
  h1 {
    color: #111111;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin: 28px 28px 0;
  }
`;
export const Table = styled.table`
  border: 1px solid blue;

  margin: 13px 28px 32px;
  max-width: 726px;
  width: 100%;
`;
export const Row = styled.tr`
  height: 42px;
`;
export const Cell = styled.td`
  border: 1px solid blue;
  display: table-cell;
  width: 60px;
`;
