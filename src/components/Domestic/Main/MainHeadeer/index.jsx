import React, { useState } from "react";
import { Header } from "./style";

function MainHeadeer({ type, stocks, setStocks }) {
  const [isActive, setIsActive] = useState(null);

  const itemActiveHandler = (index) => {
    setIsActive(index);
  };
  const deleteStock = (index) => {
    setStocks(stocks.filter((stock, idx) => index !== idx));
  };

  return (
    <Header>
      <h2>{type === "recent" ? `최근 본 종목` : `관심 종목`}</h2>
      <div className="itemWrapper">
        {stocks.map((stock, index) => (
          <div
            className={`item ${isActive === index && "active"}`}
            key={index}
            onMouseEnter={() => itemActiveHandler(index)}
            onMouseLeave={() => setIsActive(null)}>
            {isActive === index && (
              <span className="del" onClick={() => deleteStock(index)}>
                삭제
              </span>
            )}
            <div className="inner">
              <h3>{stock.name}</h3>
              <p>
                {stock.stockIndex}
                <span>▲0.54%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Header>
  );
}

export default MainHeadeer;
