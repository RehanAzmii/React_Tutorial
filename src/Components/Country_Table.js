import React from "react";
import Leftbar from "./Leftbar";
import "./Country_table.css";
import Rightbar from "./Rightbar";
import Navbar from "./Narbar";
import { JsonData } from "../data1";
import { Button } from "react-bootstrap";

function Country_Table() {
  const tableHead = [
    { title: "#", width: "45%" },
    { title: "name", width: "45%" },
    { title: "city", width: "45%" },
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

      <div className="container-fluid py-5 cus-top">
        <div className="row">
          <div className="col-lg-8 bg-white rounded shadow d-block m-auto">
            <div className="d-flex pt-2 pb-2 right">
              <Button className="btn btn-danger">New</Button>
            </div>

            {/* <!-- Fixed header table--> */}
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    {tableHead.map((data, index) => {
                      return (
                        <th scope="col" style={{ width: data.width }}>
                          {data.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {JsonData.map((data, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{data.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* <!-- End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country_Table;
