import React from "react";
import { CiDesktopMouse1 } from "react-icons/ci";
import {
  LiaInstagram,
  LiaFacebookSquare,
  LiaTwitterSquare,
  LiaLinkedin,
} from "react-icons/lia";

const NewsLetter = () => {
  return (
    <div>
  <div className="nl-1"></div>
  <div className="nl-2">
    <div className="nl-3">
      <h4>NEWSLETTER</h4>
      <h1>Get new offers on your email</h1>
      <h4>Subscribe to get tips and tactics to grow the way you want.</h4>
      <div className="nl-search">
        <input type="text" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
  <div className="nl-4">
    <div className="row">
    <CiDesktopMouse1 style={{fontSize:'30px'}} />
      <h1>
        Course
      </h1>
      <h1 style={{fontWeight:'100'}}>Whiz</h1>
    </div>
    <div className="row">
      <h6>CourseWhiz Business</h6>
      <h6>Teach on Course</h6>
      <h6>About Us</h6>
      <h6>Terms & Privacy Policy</h6>
      <h6>Help and Support</h6>
    </div>
    <div>
      <h2><LiaFacebookSquare />
      <LiaInstagram />
      <LiaTwitterSquare />
      <LiaLinkedin /></h2>
    </div>
  </div>
</div>

  );
};

export default NewsLetter;
