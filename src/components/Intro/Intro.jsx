import React from "react";
import "./Intro.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Intro() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section id="intro">
      <div className="intro_container">
        <div className="hello">
          <h1 className="hi">
            Plan <br />
            Your Next <span>Adventure</span>!
          </h1>
          <div className="round-container">
            <div className="left-container">
              <input
                type="text"
                className="round-textfield"
                placeholder="Location"
              />
            </div>
            <div className="right-container">
              <DatePicker
                className="round-datepicker"
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Start Date"
              />

              <DatePicker
                className="round-datepicker"
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="End Date"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
