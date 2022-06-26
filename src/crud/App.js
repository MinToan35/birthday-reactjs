import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import "./crud.scss";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else return [];
};
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "item added to the list");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearAll = () => {
    setList([]);
    showAlert(true, "danger", "empty list");
  };
  const editItem = (id) => {
    const itemEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setName(itemEdit.title);
    setEditID(id);
    showAlert(true, "danger", "edit item");
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "danger", "item removed");
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div className="grocery-body">
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} showAlert={showAlert} />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            {list.map(({ id, title }) => {
              return (
                <article key={id} className="grocery-item">
                  <p className="title">{title}</p>
                  <div>
                    <button className="edit-btn" onClick={() => editItem(id)}>
                      edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => removeItem(id)}
                    >
                      delete
                    </button>
                  </div>
                </article>
              );
            })}

            <button className="clear-btn" onClick={clearAll}>
              clear all
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
export default App;
