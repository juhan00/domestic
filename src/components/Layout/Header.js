import React from "react";
import InfoTable from "./StockInfo";
import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <input placeholder="종목명/지수명 검색" />
        </div>
      </HeaderStyle>
      <InfoTable />
    </>
  );
};
