import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Medical from "./pages/Medical";
import AI from "./pages/AI";
import Aerospace from "./pages/Aerospace";
import Fintech from "./pages/Fintech";
import Energy from "./pages/Energy";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="/fintech" element={<Fintech />} />
        <Route path="/energy" element={<Energy />} />
      </Routes>
    </Layout>
  );
}
