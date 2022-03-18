import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TableWrapper, Table, Row, Cell } from "./style";
import numberWithCommas from "@utils/numberWithComma";

const ComInfoTable = ({ yearly, quarters, unit }) => {
  const category = [
    { revenue: "매출액" },
    { opInc: "영업이익" },
    { netInc: "순이익" },
    { opMargin: "영업이익률" },
    { netMargin: "순이익률" },
    { deptEquity: "부채비율" },
    { reserve: "유보율" },
    { roe: "ROE" },
    { roa: "ROA" },
    { eps: "EPS" },
    { per: "PER" },
    { bps: "BPS" },
    { pbr: "PBR" },
    { devidend: "배당금" },
    { devidendPer: "배당수익률" },
  ];
  const percentage = ["ROE", "ROA", "EPS", "PER", "BPS", "PBR"];

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
            {yearly.map((item, idx) => (
              <Cell key={idx}>{item.basDt}</Cell>
            ))}
            {quarters.map((item, idx) => (
              <Cell key={idx}>{item.basDt}</Cell>
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
          {category.map((key, index) => (
            <Row key={index}>
              <Cell className="type">{Object.values(key)}</Cell>
              {yearly.map((data, i) => (
                <Cell key={i}>
                  {data[Object.keys(key)]}
                  <span>
                    {percentage.includes(Object.values(key)[0])
                      ? " %"
                      : ` ${unit}`}
                  </span>
                </Cell>
              ))}
              {quarters.map((data, i) => (
                <Cell key={i}>
                  {data[Object.keys(key)]}
                  <span>
                    {percentage.includes(Object.values(key)[0])
                      ? " %"
                      : ` ${unit}`}
                  </span>
                </Cell>
              ))}
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ComInfoTable;
