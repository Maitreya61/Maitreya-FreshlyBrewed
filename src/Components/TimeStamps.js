import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import {BsPlayCircle} from 'react-icons/bs'
import { useState } from "react";

const details = [
  {
    id: 1,
    title: "What is User Experience Design?",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 2,
    title: "Understanding the Elements of User Experience",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 3,
    title: "Using the Elements - Strategy",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 4,
    title: "Using the Elements - Scope",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 5,
    title: "Using the Elements - Structure",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 6,
    title: "Using the Elements - Skeleton",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
  {
    id: 7,
    title: "Takeaways and Resources",
    more: [
      "Introduction: a UXD Parable",
      "What UXD isn't",
      "What UXD is?",
      "Why Should We Care About UXD?",
    ],
  },
];

const TimeStamps = () => {
    const [clickedArray, setClickedArray] = useState([]); 

    const toggleClick = (index) => {
      const updatedClickedArray = [...clickedArray];
      updatedClickedArray[index] = !updatedClickedArray[index];
      setClickedArray(updatedClickedArray);
    };

  return (
    <div>
      <div className="ts-title"><h2>What's in this course?</h2></div>
      {details.map((details, index) => {
        return (
          <div key={details.id}>
            <div onClick={() => toggleClick(index)} className={ clickedArray[index] ? 'ts-open' : 'ts-close'}>
              <div className="time-stamp">
                {clickedArray[index] ? <BiUpArrow />  :  <BiDownArrow/>}
                <h4>{details.title}</h4>
              </div>
              <div>
                <h4>4 lectures | 49 min</h4>
              </div>
            </div>
            {clickedArray[index] ? <div className="ts-details-container">{details.more.map((details)=>{return(
                <div className="ts-details"><div className="time-stamp"><BsPlayCircle/><h4>{details}</h4></div> <div><h4>4:24</h4></div></div>
            )})}</div>: ''}
          </div>
        );
      })}
    </div>
  );
};

export default TimeStamps;
