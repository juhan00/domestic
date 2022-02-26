import styled from "@emotion/styled";

export const OptionsWrapper = styled.div`
  border: 3px solid brown;
  max-width: 385px;
  width: 100%;
  margin: 0 10px 10px 10px;
`;

export const TableHeader = styled.table`
  width: 100%;
  border-radius: 12px;
  td {
    text-align: center;
    height: 27px;
    width: 120px;
    margin-right: 6px;
  }
  .table__header {
    background-color: #5fb6ad;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const TableBody = styled.table`
  min-height: 598px;
  width: 100%;
  border-radius: 12px;
  margin: 20px 0 0;
`;
export const Row = styled.tr`
  height: 36px;
  .table__header {
    height: 100px;
  }
`;
export const Cell = styled.td`
  border: 1px solid blue;
  vertical-align: middle;
  width: 60px;
  font-size: 14px;
  line-height: 22px;
  padding-left: 60px;
  .header__menu {
    background-color: aqua;
    width: 50px;
  }
  &.sub__title {
    color: #5fb6ad;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-left: 40px;
  }
  &.title {
    padding-left: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    div {
      background-color: #5fb6ad;
      width: 200px;
      height: 24px;
      margin-left: 24px;
      text-align: center;
    }
  }
`;
