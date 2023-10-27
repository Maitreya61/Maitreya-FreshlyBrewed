import React from "react";
import { BsBarChart, BsFillCheckCircleFill } from "react-icons/bs";
import { PiHourglassSimpleLight } from "react-icons/pi";
import { RxUpdate } from "react-icons/rx";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";


const PriceDetails = () => {
  return (
    <>
    <div className="center-column price-container">
      <div>
        <h2>$18.99</h2>
        <div className="center-row disc">
          <h3>68% Disc.</h3>
          <h3 className="old-price">$59.99USD</h3>
        </div>
        <div className="add-cart">Add to Cart</div>
        <div className="buy-now">Buy Now</div>
        <br />
        <hr />
        <br />
        <div className="center-row">
          <div className="price-left">
            <div className="price-details">
              <BsBarChart className="star" />
              <h4>Skill Level</h4>
            </div>
            <div className="price-details">
              <PiHourglassSimpleLight className="star" />
              <h4>Duration</h4>
            </div>
            <div className="price-details">
              <RxUpdate className="star" />
              <h4>Last Updated</h4>
            </div>
            <div className="price-details">
              <BiBookBookmark className="star" />
              <h4>Lessons</h4>
            </div>
            <div className="price-details">
              <AiOutlineCheckCircle className="star" />
              <h4>Certificate</h4>
            </div>
            <div className="price-details">
              <FiUsers className="star" />
              <h4>Students</h4>
            </div>
          </div>
          <div className="price-right">
            <div className="price-details">
              <h4>Beginner</h4>
            </div>
            <div className="price-details">
              <h4>05hrs 15mins</h4>
            </div>
            <div className="price-details">
              <h4>March 21, 2022</h4>
            </div>
            <div className="price-details">
              <h4>10 Lessons</h4>
            </div>
            <div className="price-details">
              <h4>Digital Certificate</h4>
            </div>
            <div className="price-details">
              <h4>1500</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="price-bottom price-container">
    {" "}
    <h4>What will you achieve?</h4>
    <div className="price-details"><BsFillCheckCircleFill className="star"/><p>Define and justify an ideation plan</p></div>
    <div className="price-details"><BsFillCheckCircleFill className="star"/><p>How to leverage the concepts</p></div>
    <div className="price-details"><BsFillCheckCircleFill className="star"/><p>Articulate the key elements</p></div>
    <div className="price-details"><BsFillCheckCircleFill className="star"/><p>Justify the right moment to execute</p></div>
    <div className="price-details"><BsFillCheckCircleFill className="star"/><p>Recognise support mechanisms</p></div>
  </div>
  </>
  );
};

export default PriceDetails;
