import React from "react";
import { TableHeader, TableBody, Row, Cell } from "../BetaTable/style";

const CorrelationTable = () => {
  return (
    <>
      <div>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>Beta</Cell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell>통화</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
          <thead>
            <Row className="table__header">
              <Cell colSpan={3}>Options</Cell>
            </Row>
            <Row className="table__header">
              <Cell>Dates</Cell>
              <Cell>Test</Cell>
              <Cell>Test</Cell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell className="sub__title">Company</Cell>
            </Row>
            <Row>
              <Cell>시가총액</Cell>
            </Row>
            <Row>
              <Cell>기업가치</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">Valuation</Cell>
            </Row>
            <Row>
              <Cell>직전 분기 대비 주당순이익 증가율</Cell>
            </Row>
            <Row>
              <Cell>주가수익률</Cell>
            </Row>
            <Row>
              <Cell>주당순자산</Cell>
            </Row>
            <Row>
              <Cell>주가장부가치비율</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">Efficiency Ratios</Cell>
            </Row>
            <Row>
              <Cell>자산순이익률(ROA)</Cell>
            </Row>
            <Row>
              <Cell>자기자본순이익률(ROE)</Cell>
            </Row>
            <Row>
              <Cell className="sub__title">Yield</Cell>
            </Row>
            <Row>
              <Cell>주당배당금</Cell>
            </Row>
            <Row>
              <Cell>시가배당률</Cell>
            </Row>
          </tbody>
        </TableBody>
      </div>
    </>
  );
};

export default CorrelationTable;
