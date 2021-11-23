import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Update Input State
  const handleInput = (e) => setInput(e.target.value);

  // Add Task
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask(input));

    setInput("");
  };

  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        className="field"
        placeholder="Add Todo..."
        required
      />
      <br />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default Form;
