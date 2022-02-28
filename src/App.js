import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic/Domestic";
import Global from "./routes/Global/Global";
import DoComInfo from "./routes/Domestic/DoComInfo";
import Header from "./components/Domestic/Statistics/Header";
import DoStatistics from "./routes/Domestic/DoStatistics/DoStatistics";
import DoBalance from "./routes/Domestic/DoStatistics/DoBalance";
import DoCashFlow from "./routes/Domestic/DoStatistics/DoCashFlow";
import DoIncome from "./routes/Domestic/DoStatistics/DoIncome";
import GoStatistics from "./routes/Global/GoStatistics/GoStatistics";
import GoBalance from "./routes/Global/GoStatistics/GoBalance";
import GoCashFlow from "./routes/Global/GoStatistics/GoCashFlow";
import GoIncome from "./routes/Global/GoStatistics/GoIncome";
import GoComInfo from "./routes/Global/GoCominfo";

import Disclosure from "./components/Disclosure";

import { Layout } from "./components/Layout";
import DomesticStock from "./routes/DomesticStock";

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
            <Route path="Balance" element={<DoBalance />} />
            <Route path="Income" element={<DoIncome />} />
            <Route path="CashFlow" element={<DoCashFlow />} />
          </Route>

          <Route path="/domestic/financial" element={<DomesticStock />} />
          <Route path="/domestic/disclosure" element={<Disclosure />} />

          <Route path="/global" element={<Global />} />
          <Route path="/global/cominfo" element={<GoComInfo />} />
          <Route path="/global/statistics" element={<Header />}>
            <Route index element={<GoStatistics />} />
            <Route path="Balance" element={<GoBalance />} />
            <Route path="Income" element={<GoIncome />} />
            <Route path="CashFlow" element={<GoCashFlow />} />
          </Route>

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
