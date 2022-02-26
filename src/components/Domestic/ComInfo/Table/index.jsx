import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TableWrapper, Row, Cell } from "./style";

const Table = () => {
  return (
    <>
      <h1>기업실적분석</h1>
      <TableWrapper>
        <thead>
          <Row>
            <th rowSpan={2}>
              주요
              <br />
              재무정보
            </th>
            <Row>
              <Cell colSpan={2}>최근 연간 실적</Cell>
              <Cell colSpan={2}>최근 분기 실적</Cell>
            </Row>
            <Row>
              <Cell>Date</Cell>
              <Cell>Date</Cell>
              <Cell>Date</Cell>
              <Cell>Date</Cell>
            </Row>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell>
              매출액 <span>(억원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              영업이익 <span>(억원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              당기순이익 <span>(억원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              영업이익률 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              순이익률 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              POE <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              부채비율 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              당좌비율 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              유보율 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              EPS <span>(원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              PER <span>(배)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              BPS <span>(원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              PBR <span>(배)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              주당배당금 <span>(원)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              시가배당률 <span>(%)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
          <Row>
            <Cell>
              배당성향 <span>($)</span>
            </Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>
            <Cell>Financial</Cell>{" "}
          </Row>
        </tbody>
      </TableWrapper>
    </>
  );
};

export default Table;
