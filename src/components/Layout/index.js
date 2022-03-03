import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Nav from "./Nav";
import InfoTable from "./StockInfo";
import { BaseStyle, MainSection } from "./style";

export const Layout = () => {
  return (
    <BaseStyle>
      <Header />
      <Nav />
      <MainSection>
        <InfoTable />
        <Outlet />
      </MainSection>
    </BaseStyle>
  );
};
