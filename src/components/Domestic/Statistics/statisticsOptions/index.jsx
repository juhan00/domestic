import React from "react";
import { OptionsWrapper, TableHeader, TableBody, Row, Cell } from "./style";

const StatisticsOptions = () => {
  return (
    <>
      <OptionsWrapper>
        <TableHeader>
          <Row className="table__header">
            <Cell colSpan={2}>Options</Cell>
          </Row>
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
        </TableHeader>
        <TableBody>
          <Row>Company</Row>
          <Row>시가총액</Row>
          <Row>기업가치</Row>
          <Row>Valuation</Row>
          <Row>직전 분기 대비 주당순이익 증가율</Row>
          <Row>주가수익률</Row>
          <Row>주당순자산</Row>
          <Row>주가장부가치비율</Row>
          <Row>Efficiency Ratios</Row>
          <Row>자산순이익률(ROA)</Row>
          <Row>자기자본순이익률(ROE)</Row>
          <Row>Yield</Row>
          <Row>주당배당금</Row>
          <Row>시가배당률</Row>
        </TableBody>
      </OptionsWrapper>
    </>
  );
};

export default StatisticsOptions;
