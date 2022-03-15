import React, { useState, useEffect, useMemo } from "react";
import { RecentStockWrapper } from "./style";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import recent_close_icon from "@images/recent_close_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const RecentStock = () => {
  const [domesticStocks, setDomesticStocks] = useState(null);
  const [globalStocks, setGlobalStocks] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const deleteStock = (index) => {
    if (location.includes("domestic")) {
      const filterStocks = domesticStocks.filter((stock, idx) => index !== idx);
      setDomesticStocks(filterStocks);
      localStorage.setItem("domesticRecent", JSON.stringify(filterStocks));
    } else if (location.includes("global")) {
      const filterStocks = globalStocks.filter((stock, idx) => index !== idx);
      setGlobalStocks(filterStocks);
      localStorage.setItem("globalRecent", JSON.stringify(filterStocks));
    }
  };

  useEffect(() => {
    if (location.includes("domestic")) {
      const recentStocks = JSON.parse(localStorage.getItem("domesticRecent"));
      setDomesticStocks(recentStocks);
    } else if (location.includes("global")) {
      const recentStocks = JSON.parse(localStorage.getItem("globalRecent"));
      setGlobalStocks(recentStocks);
    }
  }, []);

  if (location.includes("domestic")) {
    return (
      <RecentStockWrapper>
        <h2>
          최근
          <br />
          조회
        </h2>
        <div className="itemWrapper">
          {!domesticStocks || domesticStocks.length === 0 ? (
            <div className="default">최근 조회종목이 없습니다.</div>
          ) : (
            domesticStocks.map((stock, index) => (
              <div
                className="item"
                key={index}
                onClick={
                  isActive
                    ? null
                    : () => navigate(`domestic/financial/${stock.id}`)
                }>
                <img
                  src={recent_close_icon}
                  alt="삭제"
                  className="del"
                  onClick={() => deleteStock(index)}
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                />
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
  } else if (location.includes("global")) {
    return (
      <RecentStockWrapper>
        <h2>
          최근
          <br />
          조회
        </h2>
        <div className="itemWrapper">
          {!globalStocks || globalStocks.length === 0 ? (
            <div className="default">최근 조회종목이 없습니다.</div>
          ) : (
            globalStocks.map((stock, index) => (
              <div
                className="item"
                key={index}
                onClick={
                  isActive
                    ? null
                    : () => navigate(`global/financial/${stock.name}`)
                }>
                <img
                  src={recent_close_icon}
                  alt="삭제"
                  className="del"
                  onClick={() => deleteStock(index)}
                  onMouseEnter={() => setIsActive(true)}
                  onMouseLeave={() => setIsActive(false)}
                />
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
  } else {
    return null;
  }
};

export default RecentStock;
