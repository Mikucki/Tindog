import React from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";

import { FaPaw } from "react-icons/fa";

import { TbPremiumRights } from "react-icons/tb";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <TbPremiumRights className="icon" />
          </li>
          <li>
            <FaPaw className="icon" />
          </li>
          <li>
            <CgProfile className="icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
