import React, {useEffect,useState} from "react"
import "./Mechanical.css";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Navbar from "./Narbar";
import { Button } from "react-bootstrap";

export const Mechanical = () => {
     // useEffect
     useEffect( ()=>{
        callApi()
     }, []);

       //useState
       const [data, setData] = useState([])

     // function
     const callApi = async() => {
        const Url = "https://reqres.in/api/users?page=2";
        const res = await fetch(Url)
        const response = await res.json();
        setData([...response.data]);
     }
     console.log(data)

    //  const tableHead =  [
    //     { title: "id", width: "5%" },
    //     { title: "email", width: "55%" },
    //     { title: "first_name", width: "20%" },
    //     { title: "last_name", width: "20%" },
    //  ];

    return
    (
  <div>
   
         </div>
    )
}

export default Mechanical