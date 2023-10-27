import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Teachers = () => {
  return (
    <div className='row instructor-container'>
      <div>
        <img src="instructor.jpg" alt="instructor" className="image" />
      </div>
      <div>
        <h3>Memi Lavi</h3>
        <h5>Database Administration, Database Management</h5>
        <div className="row">
          <div className="row">
            <AiFillStar className="star" />
            <h5>4.5 Instructor Rating</h5>
          </div>
          <div className="row">
            <FiUsers className="star" />
            <h5>123 Students</h5>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <AiOutlineCheckCircle className="star" />
            <h5>1200 Reviews</h5>
          </div>
          <div className="row">
            <BiBookBookmark className="star" />
            <h5>12 Courses</h5>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio non
          exercitationem suscipit fugit voluptatum accusantium nulla odio
          perferendis, quia ducimus voluptas accusamus provident, ipsum qui
          libero reprehenderit recusandae voluptatem natus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Debitis, reiciendis obcaecati
          cumque deleniti pariatur alias nemo quae ex recusandae consequuntur
          quia mollitia dolorem voluptate id corporis quos, praesentium nesciunt
          repellat!
        </p>
      </div>
    </div>
  );
};

const Instructors = () => {
  return (
    <div>
      <div className="instructor-title">
        <h2>Who will you learn with</h2>
      </div>
      <div>
        <Teachers />
        <Teachers />
      </div>
    </div>
  );
};

export default Instructors;
