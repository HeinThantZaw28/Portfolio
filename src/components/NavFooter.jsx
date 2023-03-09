import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const NavFooter = ({ children }) => {
  return (
    <div className="relative">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Nav />

          {children}

          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu p-4 w-52 bg-base-100 text-base-content">
            <Link to="/aboutMe">
              <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                About Me
              </button>
            </Link>
            <Link to="/service">
              <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                Service
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-primary py-1 my-2 bg-base-200 w-full">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
