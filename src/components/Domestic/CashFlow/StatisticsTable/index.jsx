import React from "react";
import {
  TableWrapper,
  TableHeader,
  TableBody,
  Row,
  Cell,
} from "@components/Domestic/StatisticsMain/StatisticsTable/style";

const StatisticsTable = () => {
  return (
    <>
      <TableWrapper>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={10}>Cashflow</Cell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell colSpan={2}>최근</Cell>
              <Cell>2021</Cell>
              <Cell>4분기</Cell>
              <Cell>2021</Cell>
              <Cell>3분기</Cell>
              <Cell>2021</Cell>
              <Cell>2분기</Cell>
              <Cell>2021</Cell>
              <Cell>1분기</Cell>
            </Row>
            <Row>
              <Cell>RESTATED</Cell>
              <Cell>AS-REPORTED</Cell>
              <Cell>RESTATED</Cell>
              <Cell>AS-REPORTED</Cell>
              <Cell>RESTATED</Cell>
              <Cell>AS-REPORTED</Cell>
              <Cell>RESTATED</Cell>
              <Cell>AS-REPORTED</Cell>
              <Cell>RESTATED</Cell>
              <Cell>AS-REPORTED</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>2022-02-23</Cell>
              <Cell colSpan={2}>2021-12-23</Cell>
              <Cell colSpan={2}>2021-09-24</Cell>
              <Cell colSpan={2}>2021-06-25</Cell>
              <Cell colSpan={2}>2021-03-26</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
          <tbody>
            <Row />
            <Row>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
              <Cell colSpan={2}>2304009억원</Cell>
            </Row>
            <Row />
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row />
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
            <Row />
            <Row>
              <Cell colSpan={2}>1413원</Cell>
              <Cell colSpan={2}>1413원</Cell>
              <Cell colSpan={2}>1413원</Cell>
              <Cell colSpan={2}>1413원</Cell>
              <Cell colSpan={2}>1413원</Cell>
            </Row>
            <Row>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
              <Cell colSpan={2}>12.05%</Cell>
            </Row>
          </tbody>
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default StatisticsTable;
