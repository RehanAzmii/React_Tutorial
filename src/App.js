import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Country_Table from "./Components/Country_Table";
import Header from "./Components/Header";
import State from "./Components/State";
import City from "./Components/City";
import { getCookie } from "./Components/Cookies";
import Register from "./Components/Register";
import Table from "./Components/Table";
import Generate_Token from "./Components/GenerateToken";
import Login from "./Components/Login";
import { DATACONSTANT } from "./constant/data.constant";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState(true);
  let x = getCookie(DATACONSTANT.SETCOOKIE);
  // let token = localStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    // let token = localStorage.getItem("token");
    // if (!getCookie(".milkyfie_user")) {
    console.log(x);
    // if (!token) {
    //   setName(false);
    //   return navigate("/log");
    // } else {
    //   setName(true);
    //   navigate("/");
    // }
  }, [name ]);

  return (
    <div>
      {/* <Login /> */}
      {name ? (
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/state" element={<State />} />
          <Route exact path="/country" element={<Country_Table />} />
          <Route exact path="/city" element={<City />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/civil" element={<Table />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/log" element={<Generate_Token />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
