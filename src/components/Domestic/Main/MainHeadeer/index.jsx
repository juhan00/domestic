import React, { useState, useEffect } from "react";
import { Header } from "./style";

const initialStocks = [
  {
    name: "삼성전자",
    stockIndex: "74,300",
  },
  {
    name: "엘지전자",
    stockIndex: "74,300",
  },
  {
    name: "현대차",
    stockIndex: "74,300",
  },
  {
    name: "카카오",
    stockIndex: "74,300",
  },
  {
    name: "네이버",
    stockIndex: "74,300",
  },
];

const MainHeadeer = () => {
  const [isActive, setIsActive] = useState(null);
  const [stocks, setStocks] = useState(null);

  const itemActiveHandler = (index) => {
    setIsActive(index);
  };
  const deleteStock = (index) => {
    const filterStocks = stocks.filter((stock, idx) => index !== idx);
    setStocks(filterStocks);
    localStorage.setItem("recentStocks", JSON.stringify(filterStocks));
  };

  useEffect(() => {
    const recentStocks = JSON.parse(localStorage.getItem("recentStocks"));
    setStocks(recentStocks);
  }, []);

  //초기 데이터 데이터 넣기
  useEffect(() => {
    localStorage.setItem("recentStocks", JSON.stringify(initialStocks));
  }, []);

  return (
    <Header>
      <h2>
        최근
        <br />
        조회
      </h2>
      <div className="itemWrapper">
        {stocks &&
          stocks.map((stock, index) => (
            <div
              className={`item ${isActive === index && "active"}`}
              key={index}
              onMouseEnter={() => itemActiveHandler(index)}
              onMouseLeave={() => setIsActive(null)}>
              {isActive === index && (
                <span className="del" onClick={() => deleteStock(index)}>
                  X
                </span>
              )}
              <div className="inner">
                <h3>{stock.name}</h3>
                <p className="red">
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
