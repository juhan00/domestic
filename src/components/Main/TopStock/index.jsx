import React, { useCallback, useState, useEffect, useMemo } from "react";
import { TopStockWrapper } from "./style";
import question_mark_icon from "@images/question_mark_icon.svg";
import numberWithCommas from "@utils/numberWithComma";
import HashLoader from "react-spinners/HashLoader";
import { func } from "prop-types";

export const TopStockLoader = () => {
  return (
    <TopStockWrapper>
      <div className="loaderWrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </TopStockWrapper>
  );
};

const data = {
  items: [
    {
      name: "삼성전자",
      currentPrice: 70200,
      compare: 200,
      rate: 0.29,
      trading: 8907965,
      buzz: 776,
      emotion: 5,
    },
    {
      name: "LG에너지솔루션",
      currentPrice: 363500,
      compare: 27500,
      rate: -7.03,
      trading: 1983756,
      buzz: 611,
      emotion: 3,
    },
    {
      name: "SK하이닉스",
      currentPrice: 116000,
      compare: -1000,
      rate: -0.85,
      trading: 3152057,
      buzz: 541,
      emotion: 1,
    },
    {
      name: "NAVER",
      currentPrice: 329000,
      compare: 0,
      rate: 0,
      trading: 678047,
      buzz: 510,
      emotion: -3,
    },
    {
      name: "삼성바이오로직스",
      currentPrice: 799000,
      compare: 12000,
      rate: 1.52,
      trading: 51447,
      buzz: 457,
      emotion: 2,
    },
    {
      name: "삼성전자우",
      currentPrice: 63100,
      compare: -200,
      rate: -0.32,
      trading: 1380011,
      buzz: 415,
      emotion: -3,
    },
    {
      name: "카카오",
      currentPrice: 103500,
      compare: 2000,
      rate: 1.97,
      trading: 3642279,
      buzz: 352,
      emotion: -5,
    },
    {
      name: "현대차",
      currentPrice: 164500,
      compare: -4500,
      rate: -2.66,
      trading: 1106795,
      buzz: 313,
      emotion: 4,
    },
    {
      name: "삼성SDI",
      currentPrice: 491000,
      compare: 10000,
      rate: 2.08,
      trading: 643704,
      buzz: 298,
      emotion: 2,
    },
    {
      name: "LG화학",
      currentPrice: 457000,
      compare: -15000,
      rate: -3.18,
      trading: 603056,
      buzz: 265,
      emotion: 4,
    },
  ],
};

const TopStock = () => {
  const [topData, setTopData] = useState(null);
  const [filterIsActive, setFilterIsActive] = useState("buzzTopData");

  const sortData = useCallback(
    (type) => {
      if (type === "positiveTopData") {
        return data.items.sort((a, b) =>
          a.emotion > b.emotion ? -1 : a.emotion < b.emotion ? 1 : 0,
        );
      } else if (type === "negativeTopData") {
        return data.items.sort((a, b) =>
          a.emotion > b.emotion ? 1 : a.emotion < b.emotion ? -1 : 0,
        );
      } else {
        return data.items.sort((a, b) =>
          a.buzz > b.buzz ? -1 : a.buzz < b.buzz ? 1 : 0,
        );
      }
    },
    [data],
  );

  useEffect(() => {
    setTopData(sortData("buzzTopData"));
  }, []);

  const topDataHandler = useCallback((type) => {
    setTopData(sortData(type));
    setFilterIsActive(type);
  }, []);

  return (
    <TopStockWrapper>
      <div className="top">
        <h2>Top종목</h2>
        <ul className="filter">
          <li
            onClick={(e) => topDataHandler("buzzTopData")}
            className={filterIsActive === "buzzTopData" ? "active" : undefined}>
            버즈량상위
          </li>
          <li
            onClick={() => topDataHandler("positiveTopData")}
            className={
              filterIsActive === "positiveTopData" ? "active" : undefined
            }>
            긍정상위
          </li>
          <li
            onClick={() => topDataHandler("negativeTopData")}
            className={
              filterIsActive === "negativeTopData" ? "active" : undefined
            }>
            부정상위
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "8%" }}>순위</th>
            <th style={{ width: "23%" }}>종목명</th>
            <th style={{ width: "13%" }}>버즈량(건)</th>
            <th style={{ width: "12%" }}>감성지수</th>
            <th style={{ width: "12%" }}>현재가</th>
            <th style={{ width: "8%" }}>등락률</th>
            <th style={{ width: "12%" }}>거래량</th>
          </tr>
        </thead>
        <tbody>
          {topData &&
            topData.map((item, index) =>
              Math.sign(item.rate) === 1 ? (
                <tr key={index}>
                  <td className="primary">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.buzz}</td>
                  <td>{item.emotion}%</td>
                  <td>{numberWithCommas(item.currentPrice)}</td>
                  <td className="up">+{item.rate.toFixed(2)}%</td>
                  <td>{numberWithCommas(item.trading)}</td>
                </tr>
              ) : Math.sign(item.rate) === -1 ? (
                <tr key={index}>
                  <td className="primary">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.buzz}</td>
                  <td>{item.emotion}%</td>
                  <td>{numberWithCommas(item.currentPrice)}</td>
                  <td className="down">{item.rate.toFixed(2)}%</td>
                  <td>{numberWithCommas(item.trading)}</td>
                </tr>
              ) : (
                <tr key={index}>
                  <td className="primary">{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.buzz}</td>
                  <td>{item.emotion}%</td>
                  <td>{numberWithCommas(item.currentPrice)}</td>
                  <td>{item.rate.toFixed(2)}%</td>
                  <td>{numberWithCommas(item.trading)}</td>
                </tr>
              ),
            )}
        </tbody>
      </table>
    </TopStockWrapper>
  );
};

export default TopStock;
