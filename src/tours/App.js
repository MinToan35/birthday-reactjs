import React, { useState, useEffect } from "react";
import "./Tours.scss";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [remove, setRemove] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  const handleDelete = (id) => {
    setRemove(!remove);

    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main className="tours">
      <header className="tours-header">
        <h1 className="tour-title">Our tours</h1>
        <div className="underline"></div>
      </header>
      {tours.length === 0 && (
        <button className="btn-tour-reset" onClick={() => fetchTours()}>
          <span> Refresh</span>
        </button>
      )}
      {tours.map((tour) => {
        return (
          <section className="tour-container" key={tour.id}>
            <img className="tour-img" src={tour.image} alt={tour.name} />
            <div className="tour-footer">
              <div className="tour-info">
                <h3 className="tour-name">{tour.name}</h3>
                <span className="tour-price">${tour.price}</span>
              </div>
              <p className="tour-text">
                {readMore
                  ? `${tour.info}`
                  : `${tour.info.substring(0, 200)}...`}
                <button
                  className="btn-readMore"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {readMore ? "Show less" : "Read More"}
                </button>
              </p>
              <button
                className="btn-tour-delete"
                onClick={() => {
                  handleDelete(tour.id);
                }}
              >
                Not Interested
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default App;
