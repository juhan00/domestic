import React, { useState, useEffect } from "react";
import { Header } from "./style";

const MainHeadeer = ({ type }) => {
  const [isActive, setIsActive] = useState(null);
  const [stocks, setStocks] = useState(null);

  const itemActiveHandler = (index) => {
    setIsActive(index);
  };
  const deleteStock = (index, type) => {
    const filterStocks = stocks.filter((stock, idx) => index !== idx);
    setStocks(filterStocks);
    if (type === "recent") {
      localStorage.setItem("recentStocks", JSON.stringify(filterStocks));
    } else {
      localStorage.setItem("interestStocks", JSON.stringify(filterStocks));
    }
  };

  useEffect(() => {
    if (type === "recent") {
      const recentStocks = JSON.parse(localStorage.getItem("recentStocks"));
      setStocks(recentStocks);
    } else {
      const interestStocks = JSON.parse(localStorage.getItem("interestStocks"));
      setStocks(interestStocks);
    }
  }, []);

  return (
    <Header>
      <h2>{type === "recent" ? `최근 본 종목` : `관심 종목`}</h2>
      <div className="itemWrapper">
        {stocks &&
          stocks.map((stock, index) => (
            <div
              className={`item ${isActive === index && "active"}`}
              key={index}
              onMouseEnter={() => itemActiveHandler(index)}
              onMouseLeave={() => setIsActive(null)}>
              {isActive === index && (
                <span className="del" onClick={() => deleteStock(index, type)}>
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
};

export default MainHeadeer;
