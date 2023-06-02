import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>
            <a href="/">ItineraryGen</a>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
