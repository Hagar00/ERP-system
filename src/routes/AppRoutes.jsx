import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Teams" element={<Dashboard />} />
        <Route path="/Employees" element={<Dashboard />} />
        <Route path="/Settings" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
