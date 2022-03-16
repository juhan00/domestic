import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TableWrapper, Table, Row, Cell } from "./style";
import numberWithCommas from "@utils/numberWithComma";

const ComInfoTable = ({ yearly, quarters }) => {
  return (
    <TableWrapper>
      <h1>기업실적분석</h1>
      <Table>
        <thead>
          <Row className="title">
            <Cell rowSpan={3}>
              주요
              <br />
              재무정보
            </Cell>
            <Cell className="title__sub" colSpan={4}>
              최근 연간 실적
            </Cell>
            <Cell className="title__sub" colSpan={4}>
              최근 분기 실적
            </Cell>
          </Row>
          <Row className="date">
            {yearly.map((item) => (
              <Cell>{item.basDt}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{item.basDt}</Cell>
            ))}
          </Row>
          <Row className="ifrs">
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
            <Cell>IFRS 연결</Cell>
          </Row>
          <Row />
        </thead>
        <tbody>
          <Row>
            <Cell className="type">
              매출액 <span>(억원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.revenue)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.revenue)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              영업이익 <span>(억원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.opInc)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.opInc)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              당기순이익 <span>(억원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.netInc)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.netInc)}</Cell>
            ))}
          </Row>
          <Row className="sector">
            <Cell className="type">
              영업이익률 <span>(%)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.opMargin)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.opMargin)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              순이익률 <span>(%)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.netMargin)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.netMargin)}</Cell>
            ))}
          </Row>
          <Row className="sector">
            <Cell className="type">
              부채비율 <span>(%)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.deptEquity)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.deptEquity)}</Cell>
            ))}
          </Row>
          <Row className="sector">
            <Cell className="type">
              ROE <span>(원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.roe)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.roe)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              ROA <span>(배)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.roa)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.roa)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              EPS <span>(원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.eps)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.eps)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              PER <span>(배)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.per)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.per)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              BPS <span>(배)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.bps)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.bps)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              PBR <span>(배)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.pbr)}</Cell>
            ))}
            {quarters.map((item) => (
              <Cell>{numberWithCommas(item.pbr)}</Cell>
            ))}
          </Row>
          <Row className="sector">
            <Cell className="type">
              주당배당금 <span>(원)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.devidend)}</Cell>
            ))}
          </Row>
          <Row>
            <Cell className="type">
              시가배당률 <span>(%)</span>
            </Cell>
            {yearly.map((item) => (
              <Cell>{numberWithCommas(item.devidendPer)}</Cell>
            ))}
          </Row>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ComInfoTable;
