import React, { useState, useEffect } from "react";
import { RecentStockWrapper } from "./style";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";

// const initialStocks = [
//   {
//     name: "삼성전자",
//     stockIndex: "74,300",
//   },
//   {
//     name: "엘지전자",
//     stockIndex: "74,300",
//   },
//   {
//     name: "현대차",
//     stockIndex: "74,300",
//   },
//   {
//     name: "카카오",
//     stockIndex: "74,300",
//   },
//   {
//     name: "네이버",
//     stockIndex: "74,300",
//   },
// ];

const RecentStock = () => {
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

  // //초기 데이터 데이터 넣기
  // useEffect(() => {
  //   localStorage.setItem("recentStocks", JSON.stringify(initialStocks));
  // }, []);

  return (
    <RecentStockWrapper>
      <h2>
        최근
        <br />
        조회
      </h2>
      <div className="itemWrapper">
        {!stocks || stocks.length === 0 ? (
          <div className="default">최근 조회종목이 없습니다.</div>
        ) : (
          stocks.map((stock, index) => (
            <div
              className={`item ${isActive === index && "active"}`}
              key={index}
              onMouseEnter={() => itemActiveHandler(index)}
              onMouseLeave={() => setIsActive(null)}>
              {isActive === index && (
                <span className="del" onClick={() => deleteStock(index)}></span>
              )}
              <div className="inner">
                <h3>{stock.name}</h3>
                <div className="index red">
                  {stock.stockIndex}
                  <div className="rate">
                    <img src={stock_up} alt="stock up" />
                    {stock.rate}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </RecentStockWrapper>
  );
};

export default RecentStock;
