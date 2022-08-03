import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "src/pages/main";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
