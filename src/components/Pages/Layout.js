import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import No_Page from "../No_Page";
import About from "./About";
import Home from "./Home";

function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<About />} />
          <Route path="*" element={<No_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
