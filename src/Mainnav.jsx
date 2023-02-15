import React from "react";
import "./App.css";
import { TbPremiumRights } from "react-icons/tb";

function Mainnav() {
  return (
    <div>
      <nav className="mainnav">
        <TbPremiumRights />
        <h1>WoofMatch</h1>
      </nav>
    </div>
  );
}

export default Mainnav;
