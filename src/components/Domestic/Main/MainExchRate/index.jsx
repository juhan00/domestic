import React, { useState } from "react";
import { ExchRate } from "./style";
import ExchRateChart from "./ExchRateChart";

const MainExchRate = () => {
  const [isActive, setIsActive] = useState("usd");

  const isActiveHandler = (country) => {
    setIsActive(country);
  };

  return (
    <ExchRate>
      <h2>환율</h2>
      <div style={{ borderTop: "1px solid #F0F0F6", padding: "10px 0" }}>
        <div style={{ display: "flex" }}>
          <h3>미국(USD)</h3>
          <span style={{ marginLeft: "auto" }}>1,340.28</span>
          <span>- 8.76</span>
          <span>- 0.65%</span>
          <button onClick={() => isActiveHandler("usd")}>⌄</button>
        </div>
        {isActive === "usd" && <ExchRateChart />}
      </div>
      <div style={{ borderTop: "1px solid #F0F0F6", padding: "10px 0" }}>
        <div style={{ display: "flex" }}>
          <h3>유럽(EUR)</h3>
          <span style={{ marginLeft: "auto" }}>1,340.28</span>
          <span>- 8.76</span>
          <span>- 0.65%</span>
          <button onClick={() => isActiveHandler("eur")}>⌄</button>
        </div>
        {isActive === "eur" && <ExchRateChart />}
      </div>
      <div style={{ borderTop: "1px solid #F0F0F6", padding: "10px 0" }}>
        <div style={{ display: "flex" }}>
          <h3>일본(JPY)</h3>
          <span style={{ marginLeft: "auto" }}>1,340.28</span>
          <span>- 8.76</span>
          <span>- 0.65%</span>
          <button onClick={() => isActiveHandler("jpy")}>⌄</button>
        </div>
        {isActive === "jpy" && <ExchRateChart />}
      </div>
    </ExchRate>
  );
};

export default MainExchRate;
