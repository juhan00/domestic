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
  const buzzData = data.items.find((item) => item.id === "buzzData").data;
  const positiveData = data.items.find(
    (item) => item.id === "positiveData",
  ).data;
  const negativeData = data.items.find(
    (item) => item.id === "negativeData",
  ).data;

  const [topData, setTopData] = useState(buzzData);
  const [filterIsActive, setFilterIsActive] = useState("buzzData");

  const topDataHandler = useCallback((type) => {
    if (type === "buzzData") {
      setTopData(buzzData);
      setFilterIsActive("buzzData");
    } else if (type === "positiveData") {
      setTopData(positiveData);
      setFilterIsActive("positiveData");
    } else if (type === "negativeData") {
      setTopData(negativeData);
      setFilterIsActive("negativeData");
    }
  }, []);

  return (
    <TopStockWrapper>
      <div className="top">
        <h2>Top종목</h2>
        <ul className="filter">
          <li
            onClick={(e) => topDataHandler("buzzData")}
            className={filterIsActive === "buzzData" ? "active" : undefined}>
            버즈량상위
          </li>
          <li
            onClick={() => topDataHandler("positiveData")}
            className={
              filterIsActive === "positiveData" ? "active" : undefined
            }>
            긍정상위
          </li>
          <li
            onClick={() => topDataHandler("negativeData")}
            className={
              filterIsActive === "negativeData" ? "active" : undefined
            }>
            부정상위
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>순위</th>
            <th style={{ width: "18%" }}>종목명</th>
            <th style={{ width: "12%" }}>버즈량(건)</th>
            <th style={{ width: "12%" }}>긍정지수</th>
            <th style={{ width: "12%" }}>부정지수</th>
            <th style={{ width: "12%" }}>현재가</th>
            <th style={{ width: "12%" }}>등락률</th>
            <th style={{ width: "12%" }}>거래량</th>
          </tr>
        </thead>
        <tbody>
          {topData.map((item, index) =>
            Math.sign(item.rate) === 1 ? (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.buzz}</td>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{numberWithCommas(item.currentPrice)}</td>
                <td className="up">+{item.rate.toFixed(2)}%</td>
                <td>{numberWithCommas(item.trading)}</td>
              </tr>
            ) : Math.sign(item.rate) === -1 ? (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.buzz}</td>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
                <td>{numberWithCommas(item.currentPrice)}</td>
                <td className="down">{item.rate.toFixed(2)}%</td>
                <td>{numberWithCommas(item.trading)}</td>
              </tr>
            ) : (
              <tr key={index}>
                <td className="primary">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.buzz}</td>
                <td>{item.positive}</td>
                <td>{item.negative}</td>
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
