import React, { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { FaPaw } from "react-icons/fa";
import { TbPremiumRights } from "react-icons/tb";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <FaPaw className="icon" />
            </Link>
          </li>
          <li onClick={toggleProfile}>
            <Link to="/SignUp">
              <CgProfile className="icon" />
            </Link>
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
