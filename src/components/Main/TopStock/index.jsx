import React, { useCallback, useState } from "react";
import { TopStockWrapper } from "./style";
import question_mark_icon from "@images/question_mark_icon.svg";

const upperData = () => [
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "노루페인트1",
    currentPrice: "25,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
];

const lowerData = () => [
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
  {
    name: "페인트1",
    currentPrice: "15,500",
    compare: "5,150",
    rate: "+25.31%",
    trading: "68,090",
  },
];

const TopStock = () => {
  const [topData, setTopData] = useState(upperData);
  const [filterIsActive, setFilterIsActive] = useState("upper");

  const topDataHandler = useCallback((type) => {
    if (type === "upper") {
      setTopData(upperData);
      setFilterIsActive("upper");
    } else if (type === "lower") {
      setTopData(lowerData);
      setFilterIsActive("lower");
    } else if (type === "increase") {
      setTopData(upperData);
      setFilterIsActive("increase");
    } else if (type === "holding") {
      setTopData(lowerData);
      setFilterIsActive("holding");
    } else if (type === "degradation") {
      setTopData(upperData);
      setFilterIsActive("degradation");
    } else if (type === "trading") {
      setTopData(lowerData);
      setFilterIsActive("trading");
    } else if (type === "marketCap") {
      setTopData(upperData);
      setFilterIsActive("marketCap");
    }
  }, []);

  return (
    <TopStockWrapper>
      <div className="top" style={{ display: "flex" }}>
        <h2>
          Top종목
          <span>
            <img src={question_mark_icon} alt="question mark" />
          </span>
        </h2>
        <ul className="filter">
          <li
            onClick={(e) => topDataHandler("upper")}
            className={filterIsActive === "upper" ? "active" : undefined}>
            상한가
          </li>
          <li
            onClick={() => topDataHandler("lower")}
            className={filterIsActive === "lower" ? "active" : undefined}>
            하한가
          </li>
          <li
            onClick={() => topDataHandler("increase")}
            className={filterIsActive === "increase" ? "active" : undefined}>
            상승
          </li>
          <li
            onClick={() => topDataHandler("holding")}
            className={filterIsActive === "holding" ? "active" : undefined}>
            보합
          </li>
          <li
            onClick={() => topDataHandler("degradation")}
            className={filterIsActive === "degradation" ? "active" : undefined}>
            하락
          </li>
          <li
            onClick={() => topDataHandler("trading")}
            className={filterIsActive === "trading" ? "active" : undefined}>
            거래량상위
          </li>
          <li
            onClick={() => topDataHandler("marketCap")}
            className={filterIsActive === "marketCap" ? "active" : undefined}>
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
          {topData.map((data, index) => (
            <tr key={index}>
              <td className="primary">{index + 1}</td>
              <td>{data.name}</td>
              <td className="red">{data.currentPrice}</td>
              <td className="red">{data.compare}</td>
              <td>{data.rate}</td>
              <td>{data.trading}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TopStockWrapper>
  );
};

export default TopStock;
