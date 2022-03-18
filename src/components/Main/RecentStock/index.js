import React, { useState, useEffect, useMemo } from "react";
import { RecentStockWrapper } from "./style";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import recent_close_icon from "@images/recent_close_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import numberWithCommas from "@utils/numberWithComma";
//react swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import HashLoader from "react-spinners/HashLoader";

export const RecentStockLoader = () => {
  return (
    <RecentStockWrapper>
      <div className="hash_loader_wrapper">
        <HashLoader color={"#48a185"} size={50} />
      </div>
    </RecentStockWrapper>
  );
};

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
          <Swiper
            navigation={true}
            modules={[Navigation]}
            allowTouchMove={false}
            slidesPerView={"auto"}>
            {targetStock.map((stock, index) => (
              <SwiperSlide key={index}>
                <div
                  className="item"
                  onClick={
                    isActive ? null : () => navigate(`financial/${stock.id}`)
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
                    {<h3>{stock.name}</h3>}
                    <div className="index">
                      {numberWithCommas(stock.price)}
                      {Math.sign(stock.rate) === 1 ? (
                        <div className="rate up">
                          <img src={stock_up} alt="stock up" />
                          {stock.rate}%
                        </div>
                      ) : Math.sign(stock.rate) === -1 ? (
                        <div className="rate down">
                          <img src={stock_down} alt="stock down" />
                          {stock.rate}%
                        </div>
                      ) : (
                        <div className="rate">
                          <img src={stock_none} alt="stock none" />
                          {stock.rate}%
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </RecentStockWrapper>
  );
};

export default RecentStock;
