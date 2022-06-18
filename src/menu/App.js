import React, { useState } from "react";
import data from "./data";
import "./menu.scss";
const allCategory = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [category] = useState(allCategory);
  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <div className="menu-body-container">
      <div className="menu-container">
        <div className="menu-container-header">
          <h2 className="menu-container-title">Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {category.map((category, index) => {
            return (
              <button
                className="btn-filter"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <section className="menu-section">
          {menu.map(({ id, title, price, img, desc }) => {
            return (
              <article className="menu-container-item" key={id}>
                <img className="menu-img" src={img} alt={title} />
                <div className="menu-info">
                  <div className="menu-info-header">
                    <h3 className="menu-info-title">{title}</h3>
                    <span className="menu-info-price">${price}</span>
                  </div>
                  <p className="menu-info-desc">{desc}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default App;
