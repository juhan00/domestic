import React from "react";
import { MainStockNewsWrapper } from "./style";

const MainNews = () => {
  return (
    <MainStockNewsWrapper>
      <div className="top" style={{ display: "flex" }}>
        <h2>주요 종목 뉴스</h2>
      </div>
    </MainStockNewsWrapper>
  );
};

export default MainNews;
