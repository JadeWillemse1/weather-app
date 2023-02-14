import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import ResultsPage from "./pages/results"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
