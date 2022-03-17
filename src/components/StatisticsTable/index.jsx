import React, { useEffect, useState } from "react";
import { TableWrapper, Table, Row, Cell } from "./style";
import numberWithCommas from "@utils/numberWithComma";

const tableCategories = {
  statistics: [
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
  ],
  balance: [
    { marketCap: "자산총계" },
    { curAsset: "유동자산" },
    { inventory: "재고자산" },
    { tangible: "유형자산" },
    { intangible: "무형자산" },
    { invests: "투자자산" },
    { liabilitiesCap: "부채총계" },
    { curLiab: "유동부채" },
  ],
  income: [],
};
const percentage = ["ROE", "ROA", "EPS", "PER", "BPS", "PBR"];

const StatisticsTable = ({ data, type }) => {
  const [categories, setCategories] = useState([]);
  const [isYearly, setIsYearly] = useState(true);

  useEffect(() => {
    setCategories(tableCategories[type]);
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
          </Row>
          {data &&
            categories.map((item, index) => (
              <Row>
                <Cell key={index} className="table__category">
                  <h3>{Object.values(item)}</h3>
                </Cell>
                {isYearly
                  ? data.yearly.map((data, i) => (
                      <Cell>
                        {numberWithCommas(data[Object.keys(item)])}
                        <span>
                          {percentage.includes(Object.values(item)[0])
                            ? " %"
                            : " 억원"}
                        </span>
                      </Cell>
                    ))
                  : data.quarters.map((data, i) => (
                      <Cell>
                        {numberWithCommas(data[Object.keys(item)])}
                        <span>
                          {percentage.includes(Object.values(item)[0])
                            ? " %"
                            : " 억원"}
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

export default StatisticsTable;
