import React from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./Common/Sidebar";
import HomeResearcher from "./researcher/pages/HomeResearcher";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Sidebar />} />
      <Route path="/researcher/home" element={<HomeResearcher/>}/>
    </Routes>
  );
}

export default App;
