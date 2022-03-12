import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { BaseStyle, Inner } from "./style";

export const OldLayout = () => {
  return (
    <BaseStyle>
      <Header />
      <Nav />
      <Inner>
        <Outlet />
      </Inner>
    </BaseStyle>
  );
};

export default OldLayout;
