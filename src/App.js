import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic";
import Global from "./routes/Global";

const App = () => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="domestic" element={<Domestic />} />
        <Route path="global" element={<Global />} />

        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
