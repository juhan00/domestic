import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Layout/Header";
import StockInfo from "@components/Layout/StockInfo";
import Nav from "@components/Layout/Nav";
import { Base, MainSection } from "@components/Layout/style";

const Layout = () => {
  return (
    <Base>
      <Header />
      <StockInfo />
      <Nav />
      <MainSection>
        <Outlet />
      </MainSection>
    </Base>
  );
};

export default Layout;
