import React from "react";
import { OptionsWrapper, TableHeader, TableBody, Row, Cell } from "./style";

const StatisticsOptions = (props) => {
  return (
    <>
      <OptionsWrapper>
        <TableHeader>
          <thead>
            <Row className="table__header">
              <Cell colSpan={2}>Options</Cell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell>단위</Cell>
              <Cell>K M B</Cell>
            </Row>
            <Row>
              <Cell>소숫점표시</Cell>
              <Cell>2 +/-</Cell>
            </Row>
            <Row>
              <Cell>통화</Cell>
              <Cell>KRW</Cell>
            </Row>
          </tbody>
        </TableHeader>
        <TableBody>
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
      </OptionsWrapper>
    </>
  );
};

export default StatisticsOptions;
