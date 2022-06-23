import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Country_Table from "./Components/Country_Table";
import Header from "./Components/Header";
import State from "./Components/State";

function App() {
  return (
    <div>
      {/* <Country_Table /> */}
      {/* <State /> */}
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/state" element={<State />} />
        <Route exact path="/country" element={<Country_Table />} />
      </Routes>
    </div>
  );
}

export default App;
