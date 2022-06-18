import React, { useState } from "react";
import data from "./data";
import "./review.scss";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];
  const checkNumber = (number) => {
    if (number > data.length - 1) return 0;
    if (number < 0) return data.length - 1;
    return number;
  };
  const nextPerson = (number) => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = (number) => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = (number) => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random() * data.length);
      if (newIndex === index) newIndex += 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <main className="review-body">
      <header className="reviews-header">
        <h1 className="review-title">Our reviews</h1>
        <div className="underline"></div>
      </header>
      <section className="review-container">
        <div className="review-img-container">
          <img className="review-img" src={image} alt={name}></img>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <h3 className="review-person-name">{name}</h3>
        <p className="review-person-job">{job}</p>
        <p className="review-person-text">{text}</p>
        <div className="btn-container">
          <button className="prevPerson">
            <i
              className="fa-solid fa-angle-left"
              onClick={() => prevPerson()}
            ></i>
          </button>
          <button className="nextPerson">
            <i
              className="fa-solid fa-angle-right"
              onClick={() => nextPerson()}
            ></i>
          </button>
        </div>
        <button
          className="suprisePerson"
          onClick={() => randomPerson()}
        ></button>
      </section>
    </main>
  );
};

export default Review;
