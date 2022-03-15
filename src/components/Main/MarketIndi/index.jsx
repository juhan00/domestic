import React, { useState } from "react";
import { MarketIndiWrapper } from "./style";
import market_interest_rate from "@images/market_interest_rate.svg";
import market_oil_price from "@images/market_oil_price.svg";
import market_gold from "@images/market_gold.svg";
import market_gold_global from "@images/market_gold_global.svg";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";
import { FromList } from "@components/ContentLoader";
import numberWithCommas from "@utils/numberWithComma";

export const MarketIndiLoader = () => {
  return (
    <MarketIndiWrapper>
      <FromList />
    </MarketIndiWrapper>
  );
};

const MarketIndi = ({ data }) => {
  const [marketIndi, setMarketIndi] = useState(data);

  return (
    <MarketIndiWrapper>
      <div className="top">
        <h2>시장지표</h2>
        <div className="date">{marketIndi.date} 기준</div>
      </div>
      <div className="itemWrapper">
        {marketIndi.data.map((item, index) => (
          <div className="item">
            <div className="icon">
              <img
                src={
                  item.type === "금리"
                    ? market_interest_rate
                    : item.type === "유가"
                    ? market_oil_price
                    : item.descript === "국내금"
                    ? market_gold
                    : item.descript === "국제금" && market_gold_global
                }
                alt="interest rate"
              />
            </div>
            <ul>
              <li>
                <h3>{item.type}</h3>
              </li>
              <li>
                <div className="descript">{item.descript}</div>
              </li>
              <li>
                {Math.sign(item.vs) === 1 ? (
                  <div className="index up">
                    <div className="point">
                      {numberWithCommas(item.index.toFixed(2))}
                    </div>
                    <div className="vs">
                      <img src={stock_up} alt="stock up" /> {item.vs.toFixed(2)}
                    </div>
                  </div>
                ) : Math.sign(item.compare) === -1 ? (
                  <div className="index down">
                    <div className="point">
                      {numberWithCommas(item.index.toFixed(2))}
                    </div>
                    <div className="vs">
                      <img src={stock_down} alt="stock down" />{" "}
                      {item.vs.toFixed(2)}
                    </div>
                  </div>
                ) : (
                  <div className="index">
                    <div className="point">
                      {numberWithCommas(item.index.toFixed(2))}
                    </div>
                    <div className="vs">
                      <img src={stock_none} alt="stock none" />{" "}
                      {item.vs.toFixed(2)}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </MarketIndiWrapper>
  );
};

export default MarketIndi;
