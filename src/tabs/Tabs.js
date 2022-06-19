import React, { useState, useEffect } from "react";
import "./Tabs.scss";

const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchTabs = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const newTabs = await res.json();
      setLoading(false);
      setTabs(newTabs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTabs();
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { title, dates, duties, company } = tabs[value];

  return (
    <div className="tabs-container-body">
      <div className="tabs-header">
        <h2 className="tabs-header-title">Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="tabs-container">
        <div className="btn-container">
          {tabs.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`btn-tabs ${index === value && "active-btn"}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="tabs-info">
          <h3 className="tabs-info-title">{title}</h3>
          <strong className="tabs-info-company">{company}</strong>
          <p className="tabs-info-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <p key={index} className="tabs-info-text">
                <i className="fa-solid fa-angles-right"></i> {duty}
              </p>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Tabs;
