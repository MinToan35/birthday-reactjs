import React, { useState } from "react";
import data from "./data";
import List from "./List";
const Birthday = () => {
  const [people, setpeople] = useState(data);
  const [reset, setReset] = useState(false);
  const handleDelete = () => {
    setReset(!reset);
    if (reset === true) setpeople(data);
    else setpeople([]);
  };
  return (
    <div className="birthday-body">
      <main className="birthday-container">
        <h1 className="birthday-title">{people.length} birthdays today</h1>
        <List people={people} />
        <button className="person-deleteAll" onClick={() => handleDelete()}>
          {reset ? "Refresh" : "Delete All"}
        </button>
      </main>
    </div>
  );
};

export default Birthday;
