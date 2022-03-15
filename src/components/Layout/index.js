import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "@components/Layout/Header";
import RecentStock from "@components/Layout/RecentStock";
import { Base, MainSection } from "@components/Layout/style";

const Layout = () => {
  const stockId = useParams().stockId;

  return (
    <Base>
      <Header />
      <MainSection>
        {!stockId ? <RecentStock /> : null}
        <Outlet />
      </MainSection>
    </Base>
  );
};

export default Layout;
