import React, { useEffect, useState } from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Navbar from "./Narbar";
import "./City_Table.css";
import { Button } from "react-bootstrap";
import Model from "./Modal";

export const City = () => {
  //use effect
  useEffect(() => {
    callAPI();
  }, []);

  //use State
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  // functions
  const callAPI = async () => {
    const url = "https://reqres.in/api/users?page=2";
    const res = await fetch(url);
    const response = await res.json();
    setData([...response.data]);
  };

  console.log(data);
  const tableHead = [
    { title: "id", width: "5%" },
    { title: "eamil", width: "55%" },
    { title: "first_name", width: "20%" },
    { title: "last_namel", width: "20%" },
  ];

  return (
    <div>
      <div>
        {" "}
        <header id="topnav">
          <div className="topbar-main">
            <div className="container-fluid">
              <Leftbar />
             <Rightbar />
             <div className="clearfix"></div>
            </div>
            </div>
               <Navbar />
              </header>
        <div className="container-fluid py-5 cus-top">
          <div className="row">
            <div className="col-lg-12 bg-white rounded shadow">
              <div className="d-flex pt-2 pb-2 right">
                <Button
                  className="btn btn-danger"
                  onClick={() => setOpen(true)}>
                  New
                </Button>
              </div>
               {open && (
                 <Model
                 setData={setData}
                 open={open}
                 onClose={() => setOpen(false)}
                 closeModal={setOpen}
               />
 
               )}
             
              <div className="table-responsive cus-tb">
                <table className="table table-bordered cus-bd">
                  <thead>
                    <tr>
                      {tableHead.map((data) => {
                        return (
                          <th
                            scope="col"
                            className=""
                            style={{ width: data.width }}
                          >
                            {data.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{data.id}</th>
                          <td>{data.email}</td>
                          <td className="">{data.first_name}</td>
                          <td className="">{data.last_name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//   useEffect(()=>{

//     fetch("https://reqres.in/api/users?page=2").then((result)=>{
//         result.json().then((response)=>{
//            setData(response)
//         })
//     })
// },[])

//     const [data,setData] = useState([])

//   console.log(data)

//   return (
//     <div>
//       <table border="1">
//         <tr>
//             <td>Id</td>
//             <td>Email</td>
//             <td>First_name</td>
//             <td>Last_name</td>
//         </tr>
//         {
//             data.map((item) =>
//             <tr>
//             <td>{item.id}</td>
//             <td>{item.email}</td>
//             <td>{item.first_name}</td>
//             <td>{item.last_name}</td>
//         </tr>
//             )
//         }
//       </table>
//     </div>
//   )
// }

export default City;
