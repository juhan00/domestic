import React, { useState } from "react";
import { ExchangeRateWrapper } from "./style";
import ExchangeRateChart from "./ExchangeRateChart";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import exch_rate_arrow_icon from "@images/exch_rate_arrow_icon.svg";

const initialExchangeRateData = [
  {
    nation: "미국(USD)",
    stockIndex: 1340.28,
    vs: 8.76,
    rate: 0.65,
    chartData: [
      { stock: 2900, date: "10:00" },
      { stock: 2520, date: "10:10" },
      { stock: 2530, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2403, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2230, date: "11:40" },
      { stock: 2330, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2100, date: "12:10" },
      { stock: 2540, date: "12:20" },
      { stock: 2400, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2400, date: "12:50" },
      { stock: 2300, date: "10:00" },
      { stock: 2405, date: "10:10" },
      { stock: 2500, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2400, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2200, date: "11:40" },
      { stock: 2340, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2340, date: "12:10" },
      { stock: 2500, date: "12:20" },
      { stock: 2480, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2900, date: "12:50" },
    ],
  },
  {
    nation: "유럽(EUR)",
    stockIndex: 1340.28,
    vs: 8.76,
    rate: 0.65,
    chartData: [
      { stock: 2900, date: "10:00" },
      { stock: 2520, date: "10:10" },
      { stock: 2530, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2403, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2230, date: "11:40" },
      { stock: 2330, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2100, date: "12:10" },
      { stock: 2540, date: "12:20" },
      { stock: 2400, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2400, date: "12:50" },
      { stock: 2300, date: "10:00" },
      { stock: 2405, date: "10:10" },
      { stock: 2500, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2400, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2200, date: "11:40" },
      { stock: 2340, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2340, date: "12:10" },
      { stock: 2500, date: "12:20" },
      { stock: 2480, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2900, date: "12:50" },
    ],
  },
  {
    nation: "일본 JPY(100엔)",
    stockIndex: 1046.72,
    vs: 8.76,
    rate: 0.42,
    chartData: [
      { stock: 2900, date: "10:00" },
      { stock: 2520, date: "10:10" },
      { stock: 2530, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2403, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2230, date: "11:40" },
      { stock: 2330, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2100, date: "12:10" },
      { stock: 2540, date: "12:20" },
      { stock: 2400, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2400, date: "12:50" },
      { stock: 2300, date: "10:00" },
      { stock: 2405, date: "10:10" },
      { stock: 2500, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2400, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2200, date: "11:40" },
      { stock: 2340, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2340, date: "12:10" },
      { stock: 2500, date: "12:20" },
      { stock: 2480, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2900, date: "12:50" },
    ],
  },
  {
    nation: "중국(CNY)",
    stockIndex: 1340.28,
    vs: 8.76,
    rate: 0.65,
    chartData: [
      { stock: 2900, date: "10:00" },
      { stock: 2520, date: "10:10" },
      { stock: 2530, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2403, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2230, date: "11:40" },
      { stock: 2330, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2100, date: "12:10" },
      { stock: 2540, date: "12:20" },
      { stock: 2400, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2400, date: "12:50" },
      { stock: 2300, date: "10:00" },
      { stock: 2405, date: "10:10" },
      { stock: 2500, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2400, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2200, date: "11:40" },
      { stock: 2340, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2340, date: "12:10" },
      { stock: 2500, date: "12:20" },
      { stock: 2480, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2900, date: "12:50" },
    ],
  },
  {
    nation: "영국(GBP)",
    stockIndex: 1340.28,
    vs: 4.36,
    rate: 0.42,
    chartData: [
      { stock: 2900, date: "10:00" },
      { stock: 2520, date: "10:10" },
      { stock: 2530, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2403, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2230, date: "11:40" },
      { stock: 2330, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2100, date: "12:10" },
      { stock: 2540, date: "12:20" },
      { stock: 2400, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 2400, date: "12:50" },
      { stock: 2300, date: "10:00" },
      { stock: 2405, date: "10:10" },
      { stock: 2500, date: "10:20" },
      { stock: 2400, date: "10:30" },
      { stock: 2500, date: "10:40" },
      { stock: 2650, date: "10:50" },
      { stock: 2700, date: "11:00" },
      { stock: 2500, date: "11:10" },
      { stock: 2400, date: "11:20" },
      { stock: 2300, date: "11:30" },
      { stock: 2200, date: "11:40" },
      { stock: 2340, date: "11:50" },
      { stock: 2400, date: "12:00" },
      { stock: 2340, date: "12:10" },
      { stock: 2500, date: "12:20" },
      { stock: 2480, date: "12:30" },
      { stock: 2600, date: "12:40" },
      { stock: 1900, date: "12:50" },
    ],
  },
];

const ExchangeRate = () => {
  const [isActive, setIsActive] = useState(0);
  const [exchangeRateData, setExchangeRateData] = useState(
    initialExchangeRateData,
  );

  const isActiveHandler = (country) => {
    setIsActive(country);
  };

  return (
    <ExchangeRateWrapper>
      <div className="top">
        <h2>환율</h2>
      </div>

      {exchangeRateData.map((data, index) => (
        <div className="itemWrapper" key={data.nation}>
          <div className="item">
            <div className="title" onClick={() => isActiveHandler(index)}>
              <h3>{data.nation}</h3>
              <div className="info">
                <div className="index" style={{ marginLeft: "auto" }}>
                  {data.stockIndex}
                </div>
                <div className="vs">
                  <img src={stock_none} alt="stock none" /> {data.vs}
                </div>
                <div className="rate">{data.rate}</div>
              </div>
              <div className={`arrow ${isActive === index && "active"}`}>
                <img src={exch_rate_arrow_icon} alt="arrow" />
              </div>
            </div>
            {isActive === index && <ExchangeRateChart data={data.chartData} />}
          </div>
        </div>
      ))}

      {/* <div className="itemWrapper">
        <div className="item">
          <div className="title" onClick={() => isActiveHandler("USD")}>
            <h3>미국(USD)</h3>
            <div className="info">
              <div className="index" style={{ marginLeft: "auto" }}>
                1,340.28
              </div>
              <div className="vs">
                <img src={stock_none} alt="stock none" /> 8.76
              </div>
              <div className="rate">-0.65%</div>
            </div>
            <div className={`arrow ${isActive === "USD" && "active"}`}>
              <img src={exch_rate_arrow_icon} alt="arrow" />
            </div>
          </div>
          {isActive === "USD" && <ExchangeRateChart />}
        </div>
      </div> */}

      {/* <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("EUR")}>
          <h3>유럽(EUR)</h3>
          <div className="info blue">
            <div className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </div>
            <div className="vs">
              <img src={stock_down} alt="stock down" /> 8.76
            </div>
            <div className="rate">-0.65%</div>
          </div>
          <div className={`arrow ${isActive === "EUR" && "active"}`}>
            <img src={exch_rate_arrow_icon} alt="arrow" />
          </div>
        </div>
        {isActive === "EUR" && <ExchangeRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("JPY")}>
          <h3>일본 JPY(100엔)</h3>
          <div className="info red">
            <div className="index" style={{ marginLeft: "auto" }}>
              1,046.72
            </div>
            <div className="vs">
              <img src={stock_up} alt="stock up" /> 8.76
            </div>
            <div className="rate">+0.42%</div>
          </div>
          <div className={`arrow ${isActive === "JPY" && "active"}`}>
            <img src={exch_rate_arrow_icon} alt="arrow" />
          </div>
        </div>
        {isActive === "JPY" && <ExchangeRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("CNY")}>
          <h3>중국(CNY)</h3>
          <div className="info blue">
            <div className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </div>
            <div className="vs">
              <img src={stock_down} alt="stock down" /> 8.76
            </div>
            <div className="rate">-0.65%</div>
          </div>
          <div className={`arrow ${isActive === "CNY" && "active"}`}>
            <img src={exch_rate_arrow_icon} alt="arrow" />
          </div>
        </div>
        {isActive === "CNY" && <ExchangeRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("GBP")}>
          <h3>영국(GBP)</h3>
          <div className="info red">
            <div className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </div>
            <div className="vs">
              <img src={stock_up} alt="stock up" /> 4.36
            </div>
            <div className="rate">+0.42%</div>
          </div>
          <div className={`arrow ${isActive === "GBP" && "active"}`}>
            <img src={exch_rate_arrow_icon} alt="arrow" />
          </div>
        </div>
        {isActive === "GBP" && <ExchangeRateChart />}
      </div> */}
    </ExchangeRateWrapper>
  );
};

export default ExchangeRate;
