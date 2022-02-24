import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Home from "./routes/Home";
import Domestic from "./routes/Domestic";
import Global from "./routes/Global";

const App = () => {
  const exampleMessage = "Hello World";
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Domestic" element={<Domestic />} />
        <Route path="/Global" element={<Global />} />

        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
