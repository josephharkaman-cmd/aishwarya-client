import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layouts/AppLayout";
import DashboardScreen from "./screens/DashboardScreen";
import StudentScreen from "./screens/StudentScreen";
import PageNotFound from "./screens/PageNotFound";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardScreen />} />
          <Route path="student" element={<StudentScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
