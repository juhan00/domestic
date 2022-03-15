import React, { useState } from "react";
import { StockNewsWrapper } from "./style";

const StockNews = ({ data }) => {
  const [stockNews, setStockNews] = useState(data.items);

  return (
    <StockNewsWrapper>
      <div className="top">
        <h2>주요 종목 뉴스</h2>
      </div>
      <ul>
        {stockNews.map((item) => (
          <li key={item.id}>
            <div className="title" onClick={() => window.open(item.link)}>
              {item.title}
            </div>
            <div className="date">{item.date}</div>
          </li>
        ))}
      </ul>
    </StockNewsWrapper>
  );
};

export default StockNews;
