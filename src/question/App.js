import React, { useState } from "react";
import data from "./data";
import "./question.scss";
import Question from "./Question";
const App = () => {
  const [questions] = useState(data);
  return (
    <main className="question-body">
      <div className="question-body-container">
        <h2 className="question-container-title">
          Questions And Answers About Login
        </h2>
        <section className="question-section">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
