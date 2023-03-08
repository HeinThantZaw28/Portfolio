import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMoon } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FaDownload } from "react-icons/fa";
import {AiOutlineMenuUnfold} from "react-icons/ai";
const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button bg-red-400"
          >
            <AiOutlineMenuUnfold />
          </label>
          
      </div>
      <div className="navbar-center">
        <Link to="/">
        <button className="btn btn-ghost normal-case text-xl">Andres K</button>
        </Link>
        
      </div>
      <div className="navbar-end">
        <button>
          {/* <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            {darkMode ? <BiMoon className="text-white" /> : }
          </IconContext.Provider> */}
          <BiMoon />
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
  );
};

export default Nav;
