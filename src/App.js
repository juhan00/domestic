import { BrowserRouter } from "react-router-dom";
import HelmetCom from "@components/Helmet";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Router from "./Router";
import ScrollToTop from "@utils/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetCom />
      <ScrollToTop />
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
