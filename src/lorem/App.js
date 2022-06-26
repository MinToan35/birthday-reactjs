import React, { useState } from "react";
import data from "./data";
import "./lorem.scss";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) amount = 1;
    if (count > 8) amount = 8;
    setText(data.slice(0, amount));
  };
  return (
    <div className="lorem-body">
      <section className="section-center">
        <h3 className="lorem-title">tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </div>
  );
};

export default App;
