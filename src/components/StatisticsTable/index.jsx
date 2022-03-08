import React, { useEffect, useState } from "react";
import { TableWrapper, Table, Row, Cell } from "./style";

const tableCategories = {
  statistics: [
    { basDt: "기준일자" },
    { bizYear: "사업연도" },
    { crno: "법인등록번호" },
    { enpBzopPft: "기업영업이익" },
    { enpSaleAmt: "기업매출금액" },
    { enpCrtmNpf: "기업당기순이익" },
    { enpTastAmt: "기업총자산금액" },
    { enpTdbtAmt: "기업총부채금액" },
    { enpTcptAmt: "기업총자본금액" },
    { enpCptlAmt: "기업자본금액" },
    { fnclDcd: "재무제표구분코드" },
    { fnclDcdNm: "재무제표구분코드명" },
    { fnclDebtRto: "재무제표부채비율" },
    { iclsPalClcAmt: "포광손익계산금액" },
  ],
  balance: [],
  income: [],
  cashflow: [],
};

const StatisticsTable = ({ data, type }) => {
  const [categories, setCategories] = useState([]);
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    setCategories(tableCategories[type]);
    console.log(data);
  }, [type]);

  return (
    <TableWrapper>
      <Table>
        <thead>
          <Row>
            <Cell className="table__title--category">주요재무정보</Cell>
            {data &&
              data.yearly.map((item, i) => (
                <Cell key={i} className="table__title">
                  {item.basDt}
                </Cell>
              ))}
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
          </Row>
          <Row>
            <Cell className="table__category">
              <h2>카테고리</h2>
            </Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
            <Cell>2304009억원</Cell>
          </Row>
          {data &&
            categories.slice(3).map((item, index) => (
              <Row>
                <Cell key={index} className="table__category">
                  <h3>{Object.values(item)}</h3>
                </Cell>
                {isYearly
                  ? data.yearly.map((d, i) => (
                      <Cell>{data.yearly[i][Object.keys(item)]}</Cell>
                    ))
                  : data.quarter.map((d, i) => (
                      <Cell>{data.yearly[i][Object.keys(item)]}</Cell>
                    ))}
              </Row>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default StatisticsTable;
