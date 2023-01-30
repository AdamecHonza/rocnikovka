import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"

import { Homepage } from "./pages";
// import './App.css'

export const BASE_URL = "http://localhost:3000";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
