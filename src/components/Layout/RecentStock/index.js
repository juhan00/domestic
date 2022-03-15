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
  }, [location]);

  const targetStock = useMemo(() => {
    let target = [];
    if (location.includes("domestic")) {
      target = domesticStocks;
    } else if (location.includes("global")) {
      target = globalStocks;
    }
    return target;
  }, [domesticStocks, globalStocks, location]);

  const targetUrl = useMemo(() => {
    let target = "";
    if (location.includes("domestic")) {
      target = "domestic";
    } else if (location.includes("global")) {
      target = "global";
    }
    return target;
  });

  return (
    <RecentStockWrapper>
      <h2>
        최근
        <br />
        조회
      </h2>
      <div className="itemWrapper">
        {!targetStock || targetStock.length === 0 ? (
          <div className="default">최근 조회종목이 없습니다.</div>
        ) : (
          targetStock.map((stock, index) => (
            <div
              className="item"
              key={index}
              onClick={
                isActive
                  ? null
                  : () => navigate(`${targetUrl}/financial/${stock.id}`)
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
                {stock.name ? <h3>{stock.name}</h3> : <h3>{stock.id}</h3>}
                <div className="index">
                  {stock.price}
                  {stock.rate > 0 ? (
                    <div className="rate red">
                      <img src={stock_up} alt="stock up" />
                      {stock.rate}%
                    </div>
                  ) : (
                    <div className="rate blue">
                      <img src={stock_down} alt="stock up" />
                      {stock.rate}%
                    </div>
                  )}
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
