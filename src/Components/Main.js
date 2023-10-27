import React from "react";
import {AiFillStar} from 'react-icons/ai'
import {PiNotebookThin} from 'react-icons/pi'
import {AiOutlineFieldTime} from 'react-icons/ai'

const Main = () => {
  return (
    <div className="main-container">
      <div className='main-left'>
        <div className="development">
          <p>Development</p>
        </div>
        <div className="main-title">
          <h1>User Experience Design Essentials - Adobe XD UI UX Design</h1>
        </div>
        <div className="main-subtitle">
          <h4>
            Learn the role of design thinking in UX - from the five stages of
            design thinking to defining and creating an ideation plan.
          </h4>
        </div>
        <div className="ratings"><h6>4.5</h6><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><AiFillStar className="star"/><h6>(260ratings)</h6></div>
        <div className="main-lessons"><div className="main-lessons"><PiNotebookThin className="star"/><h6>24 Lessons</h6></div><div className="main-lessons"><AiOutlineFieldTime className="star"/><h6>12hr 30mins</h6></div></div>
        <div className="main-instructors"><div className="avatar"></div> <h6>Henry S. Miller</h6> <h6>+3 more instructors</h6></div>
      </div>
      <div className="main-right"><iframe width="560" height="315" src="https://www.youtube.com/embed/VhJaCBfZ1pk?si=CCNIuPVjtVJd2FzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
  );
};

export default Main;
