import React from "react";
import { TableWrapper, Table, Row, Cell } from "./style";

const DoComInfoDailyPrice = () => {
  return (
    <TableWrapper>
      <h1>일별시세</h1>
      <Table>
        <thead>
          <Row>
            <Cell>날짜</Cell>
            <Cell>종가</Cell>
            <Cell>전일비</Cell>
            <Cell>시가</Cell>
            <Cell>고가</Cell>
            <Cell>저가</Cell>
            <Cell>거래량</Cell>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell>2022.02.21</Cell>
            <Cell>74200</Cell>
            <Cell>+200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>10449584</Cell>
          </Row>
          <Row>
            <Cell>2022.02.21</Cell>
            <Cell>74200</Cell>
            <Cell>+200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>10449584</Cell>
          </Row>
          <Row>
            <Cell>2022.02.21</Cell>
            <Cell>74200</Cell>
            <Cell>+200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>10449584</Cell>
          </Row>
          <Row>
            <Cell>2022.02.21</Cell>
            <Cell>74200</Cell>
            <Cell>+200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>10449584</Cell>
          </Row>
          <Row>
            <Cell>2022.02.21</Cell>
            <Cell>74200</Cell>
            <Cell>+200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>74200</Cell>
            <Cell>10449584</Cell>
          </Row>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default DoComInfoDailyPrice;
