import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question-container">
      <header className="question-header">
        <h3 className="question-title">{title}</h3>
        <button
          className="btn-showInfo"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
        </button>
      </header>
      {showInfo && <p className="question-info">{info}</p>}
    </article>
  );
};

export default Question;
