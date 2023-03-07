import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const NavFooter = ({ children }) => {
  return (
    <div className="">
      <div className="mb-10">
        <Nav />
      </div>
      {children}
      <div className="mt-44 bottom-0 relative">
        <Footer />
      </div>
    </div>
  );
};

export default NavFooter;
