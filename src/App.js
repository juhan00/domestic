import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Router from "./Router";
import ScrollToTop from "@utils/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;
