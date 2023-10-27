import React from "react";
import { CiDesktopMouse1 } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import { Link } from "react-router-dom";
import Main from "./Main";
import Details from "./Details";
import Faq from "./Faq";
import Courses from "./Courses";
import MoreCourses from "./MoreCourses";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
    <div className="navbar-container">
      <div className="navbar-left">
        <CiDesktopMouse1 className="icon" />
        <h2 className="title-left">Course</h2>
        <h2 className="title-right">Whiz</h2>
      </div>
      <div className="navbar-right">
        <h4>Courses</h4>
        <h4>Projects</h4>
        <h4>Pricing</h4>
        <h4>For Business</h4>
        <h4>More</h4>
        <GoSearch className="icon"/>
        <HiOutlineShoppingCart className="icon"/>
        <Link to={'/'} className="navlink" >Sign in</Link>
        <button>Start free trial</button>
      </div>
    </div>
    <div className="navigation">
        <h4>Home</h4>
        <h4>/</h4>
        <h4>Explore</h4>
        <h4>/</h4>
        <h4>Design</h4>
        <h4>/</h4>
        <h4 style={{color:"#120A43"}}>User Experience Design</h4>
    </div>
    <Main/>
    <Details/>
    <Courses/>
    <MoreCourses/>
    <Faq/>
    <NewsLetter/>
    <Footer/>
    </>
  );
};

export default Navbar;
