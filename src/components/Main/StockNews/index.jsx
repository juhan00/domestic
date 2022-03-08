import React from "react";
import { StockNewsWrapper } from "./style";

const StockNews = () => {
  return (
    <StockNewsWrapper>
      <div className="top" style={{ display: "flex" }}>
        <h2>주요 종목 뉴스</h2>
      </div>
    </StockNewsWrapper>
  );
};

export default StockNews;
