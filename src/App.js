import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic";
import Global from "./routes/Global";
import DoComInfo from "./routes/DoComInfo";
import DoStatistics from "./routes/DoStatistics";
import { Layout } from "./components/Layout";
import Header from "./components/Domestic/Statistics/Header";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/domestic/cominfo" element={<DoComInfo />} />
          <Route path="/domestic/statistics" element={<Header />}>
            <Route index element={<DoStatistics />} />
            <Route path="1" element={<DoStatistics />} />
            <Route path="2" element={<DoStatistics />} />
            <Route path="3" element={<DoStatistics />} />
          </Route>
          <Route path="/global" element={<Global />} />

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
    </BrowserRouter>
  );
};

export default App;
