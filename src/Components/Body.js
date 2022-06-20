import React from "react";

import Pagetitle from "./Pagetitle";
import Active from "./Active";
import Project from "./Project";
import Team from "./Team";
import Budget from "./Budget";
import Activity from "./Activity";
import Activity2 from "./Activity2";
import Lead from "./Lead";
import Newclient from "./Newclient";
import Monthly from "./Monthly";
import Code from "./Code";
import Week from "./Week";
import Payment from "./Payment";
import Weeklyrecord from "./Weeklyrecord";


function Body(){
    return(
        <div>
                <div className="wrapper">
      <div className="container-fluid">
        {/* <!-- Page-Title --> */}
       <Pagetitle/>
        {/* <!-- end page title end breadcrumb --> */}
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3">
            <Active/>
              </div>
              <div className="col-lg-3">
               <Project/>
              </div>
              <div className="col-lg-3">
               <Team/>
              </div>
              <div className="col-lg-3">
            <Budget/>
              </div>
            </div>
           <Activity/>
          </div>
          <div className="col-lg-3">
           <Activity2/>
         <Lead/>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
          <Newclient/>
          </div>
          <div className="col-xl-4 col-lg-6">
          <Monthly/>
          <Code/>
          </div>
          <div className="col-xl-4 col-lg-6">
         <Week/>
          </div>
        </div>
       <Payment/>
        {/* <!-- end row --> */}
       
      </div>
      {/* <!-- end container --> */}
    </div>
        </div>
    )
}

export default Body;