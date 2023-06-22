import React from "react";
import "./Intro.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Hero from "../images/cleaning.jpeg";
import Hero2 from "../images/cleaning2.jpeg";
import background from "../images/wash-bg.jpg";

function Intro() {
  return (
    <section id="intro">
      <div className="intro-container">
        <div className="hero-text">
          <h1>Professional Detailing at an Affordable Price</h1>
          <a href="#services">
            <button class="button-24" onclick="id" role="button">
              Our Services
            </button>
          </a>
        </div>
        <div className="heros">
          <img src={Hero} className="under" alt="hero-img" />
          <img src={Hero2} className="over" alt="hero2-img" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
