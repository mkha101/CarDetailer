import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="title">
          <h1>Our Services</h1>
          <p>
            At ProDetailing, no matter what your needs are we will work with you
            to get your desired results. We pride ourselves in offering the most
            <br />
            competitive pricing on the market. Currently we provide interior and
            exterior detailing, as well as scratch removal and leather and cloth
            repair.
          </p>
        </div>
        <div className="cards">
          <div id="left" className="card">
            <h1>Exterior</h1>
            <h4>STARTING AT</h4>

            <h3>$100</h3>
            <p>Full power-wash along with hand-scrub, tire, and rim shine</p>
            <button id="left-btn" className="button">
              GET IN TOUCH
            </button>
          </div>
          <div id="middle" className="card">
            <h1>Interior</h1>
            <h4>STARTING AT</h4>
            <h3>$100</h3>
            <p>Full power-wash along with hand-scrub, tire, and rim shine</p>
            <button id="middle-btn" className="button">
              GET IN TOUCH
            </button>
          </div>
          <div id="right" className="card">
            <h1>Repairs</h1>
            <h4>STARTING AT</h4>

            <h3>$300</h3>
            <p>Full power-wash along with hand-scrub, tire, and rim shine</p>
            <button id="right-btn" className="button">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
