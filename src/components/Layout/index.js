import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Nav from "./Nav";
import { MainSection } from "./style";

export const Layout = () => {
  return (
    <>
      <Nav />
      <MainSection>
        <Header />
        <Outlet />
      </MainSection>
    </>
  );
};
