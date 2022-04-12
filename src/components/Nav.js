import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      {/* <li>
          <Link to="/">
            <h2>home</h2>
          </Link>
        </li>
        <Link to="/dinner">
          <h2>dinner</h2>
        </Link>
        <Link to="/outfits">
          <h2>outfits</h2>
        </Link>
        <Link to="vacation">
          <h2>vacation</h2>
        </Link> */}

      <Link to="/">
        <h2>home</h2>
      </Link>
      <Link to="/dinner">
        <h2>dinner</h2>
      </Link>
      <Link to="/outfits">
        <h2>outfits</h2>
      </Link>
      <Link to="vacation">
        <h2>vacation</h2>
      </Link>
    </nav>
  );
}

export default Nav;
