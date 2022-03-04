import React, { useState } from "react";
import { ExchRate } from "./style";
import ExchRateChart from "./ExchRateChart";

const MainExchRate = () => {
  const [isActive, setIsActive] = useState("USD");

  const isActiveHandler = (country) => {
    setIsActive(country);
  };

  return (
    <ExchRate>
      <h2>환율</h2>
      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("USD")}>
          <h3>미국(USD)</h3>
          <div className="info">
            <span className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </span>
            <span className="vs">- 8.76</span>
            <span className="rate">- 0.65%</span>
          </div>
          <div className={`arrow ${isActive === "USD" && "active"}`}>⌄</div>
        </div>
        {isActive === "USD" && <ExchRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("EUR")}>
          <h3>유럽(EUR)</h3>
          <div className="info blue">
            <span className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </span>
            <span className="vs">▼ 8.76</span>
            <span className="rate">- 0.65%</span>
          </div>
          <div className={`arrow ${isActive === "EUR" && "active"}`}>⌄</div>
        </div>
        {isActive === "EUR" && <ExchRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("JPY")}>
          <h3>일본 JPY(100엔)</h3>
          <div className="info red">
            <span className="index" style={{ marginLeft: "auto" }}>
              1,046.72
            </span>
            <span className="vs">▲ 8.76</span>
            <span className="rate">+ 0.42%</span>
          </div>
          <div className={`arrow ${isActive === "JPY" && "active"}`}>⌄</div>
        </div>
        {isActive === "JPY" && <ExchRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("CNY")}>
          <h3>중국(CNY)</h3>
          <div className="info blue">
            <span className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </span>
            <span className="vs">▼ 8.76</span>
            <span className="rate">- 0.65%</span>
          </div>
          <div className={`arrow ${isActive === "CNY" && "active"}`}>⌄</div>
        </div>
        {isActive === "CNY" && <ExchRateChart />}
      </div>

      <div className="item">
        <div
          className="title"
          style={{ display: "flex" }}
          onClick={() => isActiveHandler("GBP")}>
          <h3>영국(GBP)</h3>
          <div className="info red">
            <span className="index" style={{ marginLeft: "auto" }}>
              1,340.28
            </span>
            <span className="vs">▲ 4.36</span>
            <span className="rate">+ 0.42%</span>
          </div>
          <div className={`arrow ${isActive === "GBP" && "active"}`}>⌄</div>
        </div>
        {isActive === "GBP" && <ExchRateChart />}
      </div>
    </ExchRate>
  );
};

export default MainExchRate;
