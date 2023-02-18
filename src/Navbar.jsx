import React, { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { FaPaw } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";
import SignUp from "./SignUp";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    console.log("working");
  };

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
          <li onClick={toggleProfile}>
            <CgProfile className="icon" />
          </li>
        </ul>
      </nav>
      <div style={{ display: showProfile ? "flex" : "none" }}>
        <SignUp />
      </div>
    </div>
  );
}

export default Navbar;
