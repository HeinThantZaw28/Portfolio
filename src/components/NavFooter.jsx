import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const NavFooter = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <div className="bottom-0 absolute w-screen mt-5">
      <Footer />
      </div>
      
    </div>
  );
};

export default NavFooter;
