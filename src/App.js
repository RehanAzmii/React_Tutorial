import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Country_Table from "./Components/Country_Table";
import Header from "./Components/Header";
import State from "./Components/State";
import City from "./Components/City";
import Login from "./Components/Login";
import { getCookie } from "./Components/Cookies";


function App() {
  const navigate = useNavigate()
  const [name,setName] = useState(true);
  let x =  getCookie(".milkyfie_user");
  console.log(x);
  useEffect( () =>{
    if(!getCookie(".milkyfie_user")){
       setName(false)
       return navigate("/")
    }else{
      return setName(true)
    }
   },[name,x])
    
     
  return (
    <div>
      {name ? (
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/state" element={<State />} />
        <Route exact path="/country" element={<Country_Table />} />
        <Route exact path="/city" element={<City />} />
       </Routes>
     ) : ( 
       <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
       )}
    </div>
  );
}

export default App;
