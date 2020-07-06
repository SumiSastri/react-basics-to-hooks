import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="center">
      <img src={logo} alt="logo" />
      <div>
        {" "}
        <h3>Breaking Bad App with React Hooks</h3>
      </div>
    </header>
  );
};

export default Navbar;
