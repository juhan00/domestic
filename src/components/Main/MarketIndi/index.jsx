import React, { useState } from "react";
import { MarketIndiWrapper } from "./style";
import market_interest_rate from "@images/market_interest_rate.svg";
import market_oil_price from "@images/market_oil_price.svg";
import market_gold from "@images/market_gold.svg";
import stock_up from "@images/stock_up.svg";
import stock_down from "@images/stock_down.svg";
import stock_none from "@images/stock_none.svg";

// const initialMarketIndi = {
//   indiData: [
//     { type: "금리", descript: "CD(91일)", index: 1.5, vs: 0 },
//     { type: "유가", descript: "WTI", index: 91.59, vs: 8.76 },
//     { type: "금", descript: "국제금", index: 91.59, vs: 8.76 },
//     { type: "금", descript: "국내금", index: 91.59, vs: 8.76 },
//   ],
//   date: "2022.02.28",
// };

const MarketIndi = ({ data }) => {
  const [marketIndi, setMarketIndi] = useState(data);

  return (
    <MarketIndiWrapper>
      <div className="top">
        <h2>시장지표</h2>
        <span>{marketIndi.date} 기준</span>
      </div>
      <ul>
        {marketIndi.data.map((item, index) => (
          <li key={index}>
            <img
              src={
                item.type === "금리"
                  ? market_interest_rate
                  : data.type === "유가"
                  ? market_oil_price
                  : market_gold
              }
              alt="interest rate"
            />
            <div className="title">
              <h3>{item.type}</h3>
              <p>{item.descript}</p>
            </div>
            <div className="index">
              <div className="point">{item.index}</div>
              <div className="vs">
                <img src={stock_none} alt="stock none" /> {item.vs}
              </div>
            </div>
          </li>
        ))}
        {/* <li>
          <img src={market_interest_rate} alt="interest rate" />
          <div className="title">
            <h3>금리</h3>
            <p>CD(91일)</p>
          </div>
          <div className="index">
            <div className="point">1.50</div>
            <div className="vs">
              <img src={stock_none} alt="stock none" /> 0.00
            </div>
          </div>
        </li> */}
        {/* <li>
          <img src={market_oil_price} alt="interest rate" />
          <div className="title">
            <h3>유가</h3>
            <p>WTI</p>
          </div>
          <div className="index blue">
            <div className="point">91.59</div>
            <div className="vs">
              <img src={stock_down} alt="stock down" /> 8.76
            </div>
          </div>
        </li>
        <li>
          <img src={market_gold} alt="interest rate" />
          <div className="title">
            <h3>금</h3>
            <p>국제금</p>
          </div>
          <div className="index red">
            <div className="point">91.59</div>
            <div className="vs">
              <img src={stock_up} alt="stock up" /> 8.76
            </div>
          </div>
        </li>
        <li>
          <img src={market_gold} alt="interest rate" />
          <div className="title">
            <h3>금</h3>
            <p>국내금</p>
          </div>
          <div className="index blue">
            <div className="point">91.59</div>
            <div className="vs">
              <img src={stock_down} alt="stock down" /> 8.76
            </div>
          </div>
        </li> */}
      </ul>
    </MarketIndiWrapper>
  );
};

export default MarketIndi;
