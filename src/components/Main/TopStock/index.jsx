import React, { useCallback, useState } from "react";
import { TopStockWrapper } from "./style";
import question_mark_icon from "@images/question_mark_icon.svg";
import numberWithCommas from "@utils/numberWithComma";
import HashLoader from "react-spinners/HashLoader";

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
  const upperLimitData = data.items.find(
    (item) => item.id === "upperLimitData",
  ).data;
  const lowerLimitData = data.items.find(
    (item) => item.id === "lowerLimitData",
  ).data;
  const upperData = data.items.find((item) => item.id === "upperData").data;
  const flatData = data.items.find((item) => item.id === "flatData").data;
  const lowerData = data.items.find((item) => item.id === "lowerData").data;
  const topTradingData = data.items.find(
    (item) => item.id === "topTradingData",
  ).data;
  const topCapData = data.items.find((item) => item.id === "topCapData").data;

  const [topData, setTopData] = useState(upperLimitData);
  const [filterIsActive, setFilterIsActive] = useState("upperLimitData");

  const topDataHandler = useCallback((type) => {
    if (type === "upperLimitData") {
      setTopData(upperLimitData);
      setFilterIsActive("upperLimitData");
    } else if (type === "lowerLimitData") {
      setTopData(lowerLimitData);
      setFilterIsActive("lowerLimitData");
    } else if (type === "upperData") {
      setTopData(upperData);
      setFilterIsActive("upperData");
    } else if (type === "flatData") {
      setTopData(flatData);
      setFilterIsActive("flatData");
    } else if (type === "lowerData") {
      setTopData(lowerData);
      setFilterIsActive("lowerData");
    } else if (type === "topTradingData") {
      setTopData(topTradingData);
      setFilterIsActive("topTradingData");
    } else if (type === "topCapData") {
      setTopData(topCapData);
      setFilterIsActive("topCapData");
    }
  }, []);

  return (
    <TopStockWrapper>
      <div className="top">
        <h2>
          Top종목
          <span>
            <img src={question_mark_icon} alt="question mark" />
          </span>
        </h2>
        <ul className="filter">
          <li
            onClick={(e) => topDataHandler("upperLimitData")}
            className={
              filterIsActive === "upperLimitData" ? "active" : undefined
            }>
            상한가
          </li>
          <li
            onClick={() => topDataHandler("lowerLimitData")}
            className={
              filterIsActive === "lowerLimitData" ? "active" : undefined
            }>
            하한가
          </li>
          <li
            onClick={() => topDataHandler("upperData")}
            className={filterIsActive === "upperData" ? "active" : undefined}>
            상승
          </li>
          <li
            onClick={() => topDataHandler("flatData")}
            className={filterIsActive === "flatData" ? "active" : undefined}>
            보합
          </li>
          <li
            onClick={() => topDataHandler("lowerData")}
            className={filterIsActive === "lowerData" ? "active" : undefined}>
            하락
          </li>
          <li
            onClick={() => topDataHandler("topTradingData")}
            className={
              filterIsActive === "topTradingData" ? "active" : undefined
            }>
            거래량상위
          </li>
          <li
            onClick={() => topDataHandler("topCapData")}
            className={filterIsActive === "topCapData" ? "active" : undefined}>
            시가총액상위
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>순위</th>
            <th style={{ width: "30%" }}>종목명</th>
            <th style={{ width: "15%" }}>현재가</th>
            <th style={{ width: "15%" }}>전일비</th>
            <th style={{ width: "15%" }}>등락률</th>
            <th style={{ width: "15%" }}>거래량</th>
          </tr>
        </thead>
        {/* <TopStockList topData={topData} /> */}
        <tbody>
          {topData.map((item, index) =>
            Math.sign(item.rate) === 1 ? (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{numberWithCommas(item.currentPrice)}</td>
                <td className="up">{numberWithCommas(item.compare)}</td>
                <td className="up">+{item.rate.toFixed(2)}%</td>
                <td>{numberWithCommas(item.trading)}</td>
              </tr>
            ) : Math.sign(item.rate) === -1 ? (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{numberWithCommas(item.currentPrice)}</td>
                <td className="down">{numberWithCommas(item.compare)}</td>
                <td className="down">{item.rate.toFixed(2)}%</td>
                <td>{numberWithCommas(item.trading)}</td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{numberWithCommas(item.currentPrice)}</td>
                <td>{numberWithCommas(item.compare)}</td>
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
