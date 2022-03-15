import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@routes/Home";
import Layout from "@components/Layout";

import Domestic from "@routes/Domestic/Domestic";
import DomesticStock from "@routes/DomesticFinance";

import DoComInfo from "@routes/DoComInfo/DoComInfo";
import DoStatistics from "@routes/DoStatistics/DoStatistics";
import DoBalance from "@routes/DoBalance/DoBalance";
import DoIncome from "@routes/DoIncome/DoIncome";
import DoDisclosure from "@routes/DoDisclosure";
import DoBeta from "@routes/DoBeta";
import DoCorrelation from "@routes/DoCorrelation";

import Global from "@routes/Global/Global";
import GoStatistics from "@routes/Global/GoStatistics";
import GoBalance from "@routes/Global/GoBalance";
import GoIncome from "@routes/Global/GoIncome";
import GoComInfo from "@routes/GoComInfo/GoComInfo";
import GoDisclosure from "@routes/Global/GoDisclosure";
import GoBeta from "@routes/Global/GoBeta";
import GoCorrelation from "@routes/global/GoCorrelation";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/domestic" element={<Domestic />} />
        <Route
          path="/domestic/financial/:stockId"
          element={<DomesticStock />}
        />
        <Route path="/domestic/cominfo/:stockId" element={<DoComInfo />} />
        <Route path="/domestic/Statistics/" element={<DoStatistics />}>
          <Route path="ratio/:stockId" />
          <Route path="balance/:stockId" element={<DoBalance />} />
          <Route path="income/:stockId" element={<DoIncome />} />
        </Route>
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
        <Route path="/global/financial/:stockId" element={<DomesticStock />} />
        <Route path="/global/cominfo/:stockId" element={<GoComInfo />} />
        <Route path="/global/Statistics/" element={<GoStatistics />}>
          <Route path="ratio/:stockId" />
          <Route path="balance/:stockId" element={<GoBalance />} />
          <Route path="income/:stockId" element={<GoIncome />} />
        </Route>
        <Route path="/global/disclosure/:stockId" element={<GoDisclosure />} />
        <Route path="/global/Beta/:stockId" element={<GoBeta />} />
        <Route
          path="/global/Correlation/:stockId"
          element={<GoCorrelation />}
        />

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
  );
};

export default Router;
