import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiFillStar } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { AiOutlineCheckCircle } from "react-icons/ai";

const courseDetails = [
    {
        id:1,
        image:'course-img1.jpg',
        title:'The Complete Graphic Design Theory for Beginners Course',
    },
    {
        id:2,
        image:'course-img1.jpg',
        title:'The Complete Graphic Design Theory for Beginners Course',
    },
    {
        id:3,
        image:'course-img1.jpg',
        title:'The Complete Graphic Design Theory for Beginners Course',
    },
    {
        id:4,
        image:'course-img1.jpg',
        title:'The Complete Graphic Design Theory for Beginners Course',
    },
    {
        id:5,
        image:'course-img1.jpg',
        title:'The Complete Graphic Design Theory for Beginners Course',
    },
    
];



const MoreCourses = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 

  return (
    <div className='morecourses-container'>
        <div><h2>Courses You Might Be Interested In</h2></div>
      <Carousel responsive={responsive}
        showDots={false}
      >
        {courseDetails.map((course)=>{
            return(
                <div key={course.id} className='courses-details'>
                    <div className='course-main-details'>
                    <div><img className='course-img' src={course.image} alt="course" /></div>
                    <div className='center-row'><div className='development'><h6>Development</h6></div> <div className='row'><h6 className='row'>4.5 <AiFillStar className='star'/> (24) </h6></div></div>
                    <div><h4>{course.title}</h4></div>
                    <div className='center-row'><h5 className='row'><BiBookBookmark className='star'/> 24 Lessons</h5> <h5 className='row'><AiOutlineCheckCircle className='star'/> 12hr 30mins</h5></div>
                    <div className='center-row course-ins'><h4>by John Doe</h4><div className='row'><h4>$5.45</h4><h4 className='old-price'>$5.45</h4></div></div>
                    </div>
                </div>
            )
        })}

      </Carousel>
    </div>
  )
}

export default MoreCourses