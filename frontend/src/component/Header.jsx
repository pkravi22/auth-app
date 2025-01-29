import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/userContext";

import logo from "../assets/react.svg";
const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Update context state
    navigate("/"); // Redirect to Home
  };

  return (
    <nav className="bg-black h-screen">
      <div>
        <img src={logo} alt="" className="w-0" />
      </div>
      <ul className="flex gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <div className="flex gap-4">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
