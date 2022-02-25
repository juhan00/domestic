import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic";
import Global from "./routes/Global";
import DoComInfo from "./routes/DoComInfo";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="domestic" element={<Domestic />} />
          <Route path="domestic/cominfo" element={<DoComInfo />} />
          <Route path="domestic/statement" element={<DoStatement />} />
          <Route path="global" element={<Global />} />

          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
