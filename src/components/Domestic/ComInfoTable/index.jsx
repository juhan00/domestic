import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TableWrapper, Table, Row, Cell } from "./style";

const ComInfoTable = () => {
  return (
    <TableWrapper>
      <h1>기업실적분석</h1>
      <Table>
        <Row>
          <Cell className="type" rowSpan={3}>
            주요
            <br />
            재무정보
          </Cell>
          <Cell colSpan={4}>최근 연간 실적</Cell>
          <Cell colSpan={6}>최근 분기 실적</Cell>
        </Row>
        <Row>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
          <Cell>Date</Cell>
        </Row>
        <Row>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
          <Cell>
            IFRS
            <br />
            연결
          </Cell>
        </Row>
        <Row>
          <Cell className="type">
            매출액 <span>(억원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            영업이익 <span>(억원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            당기순이익 <span>(억원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row className="sector">
          <Cell className="type">
            영업이익률 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            순이익률 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            POE <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row className="sector">
          <Cell className="type">
            부채비율 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            당좌비율 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            유보율 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row className="sector">
          <Cell className="type">
            EPS <span>(원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            PER <span>(배)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            BPS <span>(원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            PBR <span>(배)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row className="sector">
          <Cell className="type">
            주당배당금 <span>(원)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            시가배당률 <span>(%)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
        <Row>
          <Cell className="type">
            배당성향 <span>($)</span>
          </Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
        </Row>
      </Table>
    </TableWrapper>
  );
};

export default ComInfoTable;
