import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic/Domestic";
import DoComInfo from "@routes/DoComInfo/DoComInfo";
import StatisticsHeader from "./components/Domestic/StatisticsHeader";
import DoStatistics from "./routes/DoStatistics/DoStatistics";
import DoBalance from "./routes/Domestic/DoBalance";
import DoIncome from "./routes/Domestic/DoIncome";
import DoBeta from "./routes/Domestic/DoBeta";
import DoCorrelation from "./routes/Domestic/DoCorrelation";
import DoDisclosure from "./routes/Domestic/DoDisclosure";

import Global from "./routes/Global/Global";
import GoStatistics from "./routes/Global/GoStatistics";
import GoBalance from "./routes/Global/GoBalance";
import GoIncome from "./routes/Global/GoIncome";
import GoComInfo from "./routes/Global/GoCominfo";
import GoBeta from "./routes/Global/GoBeta";
import GoCorrelation from "./routes/global/GoCorrelation";
import GoDisclosure from "./routes/Global/GoDisclosure";

import { Layout } from "./components/Layout";
import DomesticStock from "./routes/DomesticFinance";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/domestic/cominfo/:stockId" element={<DoComInfo />} />
          <Route
            path="/domestic/Statistics/:stockId"
            element={<StatisticsHeader />}>
            <Route index element={<DoStatistics />} />
            <Route path="Balance" element={<DoBalance />} />
            <Route path="Income" element={<DoIncome />} />
          </Route>
          <Route
            path="/domestic/financial/:stockId"
            element={<DomesticStock />}
          />
          <Route
            path="/domestic/disclosure/:stockId"
            element={<DoDisclosure />}
          />
          <Route path="/domestic/Beta/:stockId" element={<DoBeta />} />
          <Route
            path="/domestic/Correlation/:stockId"
            element={<DoCorrelation />}
          />

          <Route path="/global" element={<Global />} />
          <Route path="/global/cominfo" element={<GoComInfo />} />
          <Route path="/global/Statistics" element={<StatisticsHeader />}>
            <Route index element={<GoStatistics />} />
            <Route path="Balance" element={<GoBalance />} />
            <Route path="Income" element={<GoIncome />} />
          </Route>
          <Route path="/global/disclosure" element={<GoDisclosure />} />
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
