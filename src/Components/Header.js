import React from "react";

import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Navbar from "./Narbar";
import Body from "./Body";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <header id="topnav">
        <div className="topbar-main">
          <div className="container-fluid">
            {/* <!-- Logo container--> */}
            <Leftbar />
            {/* <!-- End Logo container--> */}
            <Rightbar />
            {/* <!-- end menu-extras --> */}
            <div className="clearfix"></div>
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end topbar-main --><!-- MENU Start --> */}
        <Navbar />
        {/* <!-- end navbar-custom --> */}
      </header>
      <Body />
      <Footer />
    </div>
  );
};

export default Header;
