import React from "react";
import Search from "./Search";
import InfoTable from "./StockInfo";
import {
  HeaderStyle,
  HaederMenuWrapper,
  SearchMenuStyleOnHeader,
} from "./style";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HaederMenuWrapper>
          <SearchMenuStyleOnHeader>
            <Search />
          </SearchMenuStyleOnHeader>
        </HaederMenuWrapper>
      </HeaderStyle>
      <InfoTable />
    </>
  );
};
