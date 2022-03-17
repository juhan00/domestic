import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "@components/Layout/Header";
import { Base, MainSection } from "@components/Layout/style";
import Footer from "@components/Layout/Footer";

const Layout = () => {
  const stockId = useParams().stockId;

  return (
    <Base>
      <Header />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </Base>
  );
};

export default Layout;
