import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Router from "./Router";
import ScrollToTop from "@utils/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
};

export default App;
