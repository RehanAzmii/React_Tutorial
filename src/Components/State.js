import React from "react";
import { stockData } from "../date";
import "./State.css";

import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Navbar from "./Narbar";

function State() {
  const tableHead1 = [
    { title: "userId", width: "5%" },
    { title: "#", width: "5%" },
    { title: "title", width: "45%" },
    { title: "body", width: "45%" },
  ];
  return (
    <div>
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
      <div className="table-responsive cus-table">
        <table className="table">
          <thead>
            <tr>
              {tableHead1.map((data ) => {
                return (
                  <th scope="col" style={{ width: data.width }}>
                    {data.title}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {stockData.map((data, index) => {
              return (
                <tr>
                  <td>{data.userId}</td>
                  <th>{index + 1}</th>
                  {/* <td>{data.userId}</td> */}
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default State;
