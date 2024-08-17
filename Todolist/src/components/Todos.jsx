import styles from "./Todos.module.css";
import React, { useState } from "react";

const Todos = () => {
  const [intial, setIntial] = useState("");
  const [data, setdata] = useState([]);

  const getInput = (event) => {
    console.log(event.target.value);
    setIntial(event.target.value);
  };

  const getData = () => {
    console.log(intial);
    let store = [...data, intial];
    setdata(store);
    setIntial("");
  };

  // New function to delete a task
  const deleteTask = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setdata(updatedData);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Todo-App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter the Text"
            onChange={getInput}
            value={intial}
            className={styles.Inputfield}
          />
          <button className={styles.button} onClick={getData}>
            Add
          </button>
        </div>
        {data.map((curVal, index) => {
          return (
            <div key={index} className={styles.taskData}>
              <p>{curVal}</p>
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteTask(index)}
              ></i>{" "}
              {/* Updated */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
