import { useState } from "react";
import star from "./assets/icon-star.svg";
import plus from "./assets/icon-plus.svg";
import minus from "./assets/icon-minus.svg";
import accordionData from "./accordionData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <main>
        <div className="accordion">
          <div className="title">
            <img src={star} alt="star icon" />
            <h1>FAQs</h1>
          </div>

          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                <h3>{item.title}</h3>
                <img src={activeIndex === index ? minus : plus} alt="" />
              </button>
                <p className="accordion-content">{item.content}</p>
              
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor
          </a>
          . Coded by <a href="#">N. Srinu Vinay Kumar</a>.
        </p>
      </footer>
    </>
  );
};

export default FAQ;
