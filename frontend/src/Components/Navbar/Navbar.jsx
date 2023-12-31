import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";
import icon from "./icon.png"
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/" className="logo-new">
            <img className="logo" src={icon} height="60px" width="120px" alt="logo" />
          </Link>
        </span>

        {!user && (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
