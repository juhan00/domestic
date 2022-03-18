import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@routes/Home";
import UseTerms from "@routes/UseTerms";
import PrivacyTerms from "@routes/PrivacyTerms";
import Layout from "@components/Layout";

import Domestic from "@routes/Domestic/Domestic";
import DomesticStock from "@routes/DomesticFinance";
import DoComInfo from "@routes/DoComInfo";
import DoStatistics from "@routes/DoStatistics";
import DoDisclosure from "@routes/DoDisclosure";
import DoBeta from "@routes/DoBeta";
import DoCorrelation from "@routes/DoCorrelation";

import Global from "@routes/Global/Global";
import GoDisclosure from "@routes/Global/GoDisclosure";
import NotFound from "@routes/NonFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<UseTerms />} />
      <Route path="/privacy" element={<PrivacyTerms />} />
      <Route element={<Layout />}>
        <Route path="/domestic" element={<Domestic />} />
        <Route
          path="/domestic/financial/:stockId"
          element={<DomesticStock />}
        />
        <Route path="/domestic/cominfo/:stockId" element={<DoComInfo />} />
        <Route
          path="/domestic/statistics/:stockId"
          element={<DoStatistics />}
        />
        <Route path="/domestic/balance/:stockId" element={<DoStatistics />} />
        <Route path="/domestic/income/:stockId" element={<DoStatistics />} />

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
        <Route path="/global/cominfo/:stockId" element={<DoComInfo />} />
        <Route path="/global/Statistics/:stockId" element={<DoStatistics />} />
        <Route path="/global/balance/:stockId" element={<DoStatistics />} />
        <Route path="/global/income/:stockId" element={<DoStatistics />} />

        <Route path="/global/disclosure/:stockId" element={<GoDisclosure />} />
        <Route path="/global/Beta/:stockId" element={<DoBeta />} />
        <Route
          path="/global/Correlation/:stockId"
          element={<DoCorrelation />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
