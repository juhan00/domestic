import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Layout/Header";
import { Base, MainSection } from "@components/Layout/style";

const Layout = () => {
  return (
    <Base>
      <Header />
      <MainSection>
        <Outlet />
      </MainSection>
    </Base>
  );
};

export default Layout;
