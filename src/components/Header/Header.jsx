import React from "react";
import "./Header.css";
import Logo from "../images/logo.png";
import { slide as Menu } from "react-burger-menu";

function Header() {
  return (
    <header className="header">
      <div className="container">
        {" "}
        <div className="logo">
          <img src={Logo} alt="" />
          <h1>
            <a href="/">ProDetailing</a>
          </h1>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Book Appointment</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
