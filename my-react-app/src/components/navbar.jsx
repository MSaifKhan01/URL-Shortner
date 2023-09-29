import React from "react";

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="logo">My URL Shortner</div>
        <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
