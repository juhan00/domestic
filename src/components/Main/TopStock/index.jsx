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

const TopStock = ({ data }) => {
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
