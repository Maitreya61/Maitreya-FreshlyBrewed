import React from "react";
import About from "./About";
import PriceDetails from "./PriceDetails";
import Skills from "./Skills";
import TimeStamps from "./TimeStamps";
import Instructors from "./Instructors";

const Details = () => {
  return (
    <div className="details-container">
      <div>
        <About />
        <Skills />
        <TimeStamps/>
        <Instructors/>
      </div>
      <div>
        <PriceDetails />
      </div>
    </div>
  );
};

export default Details;
