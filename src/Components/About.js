import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="about-control"><h4>About</h4> <h4>Course Ratings</h4> <h4>Discussions</h4> </div><div><hr /><br /></div>
      </div>
      <div className="about-course">
        <h2>About this course</h2>
        <br />
        <p>
          What is design thinking, and what part does it play in the wider
          scheme of user experience design?{" "}
        </p>
        <br />
        <p>
          {" "}
          This short design thinking course will teach you the basics you need
          to kickstart your career as a digital designer in UX. You'll develop
          the knowledge and skills needed to successfully implement design
          thinking practices grounded in solid UX fundamentals in the workplace.
        </p>{" "}
        <br />
        <p>
          {" "}
          By getting to grips with the design thinking framework, you'll be able
          to tackle large, complex and even unknown issues within product
          development. It will give you the tools, skills and mindset to seek
          out practical and logical innovation, and to take a solution-based
          view to solving problems as a UX designer.
        </p>
      </div>
      <div className="about-learn">
        <h3>What will you learn in this online course?</h3>
        <h5>By the end of the course, you'll be able to...</h5>
        <ul>
          <li>Define and justify an ideation plan</li>
          <li>
            Articulate how to leverage the concepts of diverge/converge in order
            to find wise solutions
          </li>
          <li>Articulate the key elements of an implementation plan</li>
          <li>Justify the right moment to execute an implementation plan</li>
          <li>
            Recognise support mechanisms to keep an implementation plan going
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
