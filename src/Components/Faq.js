import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";

const details = [
  {
    id: 1,
    title: "What is User Experience Design?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 2,
    title: "Understanding the Elements of User Experience",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 3,
    title: "Using the Elements - Strategy",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 4,
    title: "Using the Elements - Scope",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 5,
    title: "Using the Elements - Structure",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 6,
    title: "Using the Elements - Skeleton",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
  {
    id: 7,
    title: "Takeaways and Resources",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt hic officiis nulla perferendis! Maxime error obcaecati blanditiis, doloremque, perspiciatis ab, quasi harum dolor aut quos autem aliquid sit cumque.",
  },
];

const Faq = () => {
  const [clickedArray, setClickedArray] = useState([]);

  const toggleClick = (index) => {
    const updatedClickedArray = [...clickedArray];
    updatedClickedArray[index] = !updatedClickedArray[index];
    setClickedArray(updatedClickedArray);
  };

  return (
    <div className="faq-contianer">
        <div><h2>Frequently asked Questions</h2></div>
      <div >
        {details.map((details, index) => {
          return (
            <div key={details.id}>
              <div
                onClick={() => toggleClick(index)}
                className={clickedArray[index] ? "faq-open" : "faq-close"}
              >
                <div className="faq-question">
                  <div>
                    <h4>{details.title}</h4>
                  </div>
                  <div>
                    {clickedArray[index] ? <AiFillMinusCircle /> :  <AiFillPlusCircle />}
                  </div>
                </div>
                <div>
                  {clickedArray[index] ? (
                    <div>
                      <p>{details.answer}</p>
                      <p>{details.answer}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
