import React, { createContext, useState } from "react";

export const DataContext = createContext({
  test: "",
  updateTest: (data) => {},
  login:"",
  updatelogin: (abcd) => {}
  
});

const DataState = (props) => {
  const [test, setTest] = useState("data");
  const [login,setLogin] = useState()
  const updatelogin = (abcd) =>{
    return setLogin(abcd)
  }
  const updateTest = (data) => {
    return setTest(data);
  };
  return (
    <DataContext.Provider value={{ test, updateTest,login, updatelogin}}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
