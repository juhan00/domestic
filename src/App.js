import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic/Domestic";
import DoComInfo from "./routes/Domestic/DoComInfo";
import Header from "./components/Domestic/Statement/Header";
import DoStatement from "./routes/Domestic/DoStatement/DoStatement";
import DoBalance from "./routes/Domestic/DoStatement/DoBalance";
import DoCashFlow from "./routes/Domestic/DoStatement/DoCashFlow";
import DoIncome from "./routes/Domestic/DoStatement/DoIncome";
import DoBeta from "./routes/Domestic/DoBeta";
import DoCorrelation from "./routes/Domestic/DoCorrelation";

import Global from "./routes/Global/Global";
import GoStatement from "./routes/Global/GoStatement/GoStatement";
import GoBalance from "./routes/Global/GoStatement/GoBalance";
import GoCashFlow from "./routes/Global/GoStatement/GoCashFlow";
import GoIncome from "./routes/Global/GoStatement/GoIncome";
import GoComInfo from "./routes/Global/GoCominfo";
import GoBeta from "./routes/Global/GoBeta";
import GoCorrelation from "./routes/global/GoCorrelation";

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
          <Route path="/domestic/Statement" element={<Header />}>
            <Route index element={<DoStatement />} />
            <Route path="Balance" element={<DoBalance />} />
            <Route path="Income" element={<DoIncome />} />
            <Route path="CashFlow" element={<DoCashFlow />} />
          </Route>
          <Route path="/domestic/financial" element={<DomesticStock />} />
          <Route path="/domestic/disclosure" element={<Disclosure />} />
          <Route path="/domestic/Beta" element={<DoBeta />} />
          <Route path="/domestic/Correlation" element={<DoCorrelation />} />

          <Route path="/global" element={<Global />} />
          <Route path="/global/cominfo" element={<GoComInfo />} />
          <Route path="/global/Statement" element={<Header />}>
            <Route index element={<GoStatement />} />
            <Route path="Balance" element={<GoBalance />} />
            <Route path="Income" element={<GoIncome />} />
            <Route path="CashFlow" element={<GoCashFlow />} />
          </Route>
          <Route path="/global/disclosure" element={<Disclosure />} />
          <Route path="/global/Beta" element={<GoBeta />} />
          <Route path="/global/Correlation" element={<GoCorrelation />} />

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
