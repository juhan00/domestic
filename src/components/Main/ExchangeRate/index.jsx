import React, { useState } from "react";
import { ExchangeRateWrapper } from "./style";
import ExchangeRateChart from "./ExchangeRateChart";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import exch_rate_arrow_icon from "@images/exch_rate_arrow_icon.svg";
import { FromList } from "@components/ContentLoader";
import numberWithCommas from "@utils/numberWithComma";

export const ExchangeRateLoader = () => {
  return (
    <ExchangeRateWrapper>
      <FromList />
    </ExchangeRateWrapper>
  );
};

const ExchangeRate = ({ type, data }) => {
  const [isActive, setIsActive] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(data.items);

  const isActiveHandler = (country) => {
    setIsActive(country);
  };

  return (
    <ExchangeRateWrapper className={type}>
      <div className="top">
        <h2>환율</h2>
      </div>

      {exchangeRate.map((item, index) => (
        <div className="itemWrapper" key={item.id}>
          <div className={`item ${isActive === index && "active"}`}>
            <div className="title" onClick={() => isActiveHandler(index)}>
              <h3>
                {item.id === "usd"
                  ? "미국(USD)"
                  : item.id === "eur"
                  ? "유럽연합(EUR)"
                  : item.id === "jpy"
                  ? "일본 JPY(100엔)"
                  : item.id === "cny"
                  ? "중국(CNY)"
                  : item.id === "gbp" && "영국(GBP)"}
              </h3>
              <div className="listInfoWrapper">
                {Math.sign(item.vs) === 1 ? (
                  <div className="info up">
                    <div className="index">
                      {numberWithCommas(item.stockIndex)}
                    </div>
                    <div className="vs">
                      <img src={stock_up} alt="stock up" />
                      {item.vs.toFixed(2)}
                    </div>
                    <div className="rate">+{item.rate.toFixed(2)}</div>
                  </div>
                ) : Math.sign(item.vs) === -1 ? (
                  <div className="info down">
                    <div className="index">
                      {numberWithCommas(item.stockIndex)}
                    </div>
                    <div className="vs">
                      <img src={stock_down} alt="stock down" />
                      {Math.abs(item.vs.toFixed(2))}
                    </div>
                    <div className="rate">{item.rate.toFixed(2)}</div>
                  </div>
                ) : (
                  <div className="info">
                    <div className="index">
                      {numberWithCommas(item.stockIndex)}
                    </div>
                    <div className="vs">
                      <img src={stock_none} alt="stock none" />
                      {item.vs.toFixed(2)}
                    </div>
                    <div className="rate">{item.rate.toFixed(2)}</div>
                  </div>
                )}
                <div className="arrow">
                  <img src={exch_rate_arrow_icon} alt="arrow" />
                </div>
              </div>
            </div>
            {
              <div className="content">
                <div className="info">
                  {Math.sign(item.vs) === 1 ? (
                    <div className="indexWrapper up">
                      <div className="index">
                        {numberWithCommas(item.stockIndex)}
                      </div>
                      <div className="vs">
                        <img src={stock_up} alt="stock up" />
                        {item.vs.toFixed(2)}
                      </div>
                      <div className="rate">+{item.rate.toFixed(2)}</div>
                    </div>
                  ) : Math.sign(item.vs) === -1 ? (
                    <div className="indexWrapper down">
                      <div className="index">
                        {numberWithCommas(item.stockIndex)}
                      </div>
                      <div className="vs">
                        <img src={stock_down} alt="stock down" />
                        {Math.abs(item.vs.toFixed(2))}
                      </div>
                      <div className="rate">{item.rate.toFixed(2)}</div>
                    </div>
                  ) : (
                    <div className="indexWrapper">
                      <div className="index">
                        {numberWithCommas(item.stockIndex)}
                      </div>
                      <div className="vs">
                        <img src={stock_none} alt="stock none" />
                        {item.vs.toFixed(2)}
                      </div>
                      <div className="rate">{item.rate.toFixed(2)}</div>
                    </div>
                  )}

                  <div className="upDownWrapper">
                    <div className="upDown">
                      <div className="item">
                        <h4>고가</h4>
                        <p className="up">
                          {numberWithCommas(item.high.toFixed(2))}
                        </p>
                      </div>
                      <div className="item">
                        <h4>저가</h4>
                        <p className="down">
                          {numberWithCommas(item.low.toFixed(2))}
                        </p>
                      </div>
                    </div>
                    <div className="week">
                      <div className="item">
                        <h4>52주 최고</h4>
                        <p>{numberWithCommas(item.weekHigh.toFixed(2))}</p>
                      </div>
                      <div className="item">
                        <h4>52주 최저</h4>
                        <p>{numberWithCommas(item.weekLow.toFixed(2))}</p>
                      </div>
                    </div>
                  </div>
                  <div className="date">
                    2022.02.23 하나은행 기준 <span>고시회차 333회</span>
                  </div>
                </div>
                <div className="chart">
                  <ExchangeRateChart data={item.chartData} />
                </div>
              </div>
            }
          </div>
        </div>
      ))}
    </ExchangeRateWrapper>
  );
};

export default ExchangeRate;
