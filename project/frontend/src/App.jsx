import React from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./Common/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Sidebar />} />
    </Routes>
  );
}

export default App;
