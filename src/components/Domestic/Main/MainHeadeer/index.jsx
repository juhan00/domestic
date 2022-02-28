import React from "react";
import { Header } from "./style";

function MainHeadeer({ type, stocks }) {
  return (
    <Header>
      <h2>{type === "recent" ? `최근 본 종목` : `관심 종목`}</h2>
      <div className="itemWrapper">
        {stocks.map((stock) => (
          <div className="item">
            <h3>{stock.name}</h3>
            <p>
              {stock.stockIndex}
              <span>▲0.54%</span>
            </p>
          </div>
        ))}
      </div>
    </Header>
  );
}

export default MainHeadeer;
