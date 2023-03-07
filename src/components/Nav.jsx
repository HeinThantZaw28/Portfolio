import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FaDownload } from "react-icons/fa";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link to="/aboutMe">
                  <button>About</button>
                </Link>
              </li>
              <li>
                <Link to="/service">
                  <button>Service</button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <button>Contact</button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <span></span>
          <button className="btn btn-ghost normal-case text-xl">
            Andres K
          </button>
        </div>
        <div className="navbar-end">
          <button onClick={handleDark}>
            
              <IconContext.Provider
                value={{ className: "shared-class", size: 30 }}
              >
                {darkMode ? (
              <BiMoon className="text-white" />
            ) : (
                <BiMoon />
                )}
              </IconContext.Provider>
           
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img src="https://avatars.githubusercontent.com/u/99752332?s=400&u=cb39c49fb2066c4f811d09787168ba73a22fd85f&v=4" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li className="justify-center">
                <button>
                  Download CV
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
