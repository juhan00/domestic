import React from "react";
import {
  TableWrapper,
  Table,
  Row,
  Cell,
} from "@components/Domestic/StatisticsTable/style";

const StatisticsTable = () => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <Row className="table__header">
            <Cell colSpan={7}>
              <button>연간실적</button>
              <button>분기실적</button>
            </Cell>
          </Row>
          <Row>
            <Cell className="table__title--category">주요재무정보</Cell>
            <Cell className="table__title">2021.12.23</Cell>
            <Cell className="table__title">2021.12.23</Cell>
            <Cell className="table__title">2021.12.23</Cell>
            <Cell className="table__title">2021.12.23</Cell>
            <Cell className="table__title">2021.12.23</Cell>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell className="table__category">
              <h1>카테고리</h1>
            </Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h2>카테고리</h2>
            </Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>1413원</Cell>
            <Cell>1413원</Cell>
            <Cell>1413원</Cell>
            <Cell>1413원</Cell>
            <Cell>1413원</Cell>
          </Row>
          <Row>
            <Cell className="table__category">
              <h3>카테고리</h3>
            </Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
            <Cell>12.05%</Cell>
          </Row>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default StatisticsTable;
