import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map(({ id, name, image, age }) => {
        return (
          <article className="person-container" key={id}>
            <img className="person-img" src={image} alt={name} />
            <div className="person-info">
              <h3 className="person-name">{name}</h3>
              <p className="person-age">{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
