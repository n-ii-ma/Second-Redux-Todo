import { useDispatch } from "react-redux";
import { toggleComplete, removeTask } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Toggle Complete
  const handleToggle = () => dispatch(toggleComplete(task));

  // Remove Task
  const handleRemove = () => dispatch(removeTask(task));

  return (
    <div
      className="task"
      style={{
        textDecoration: task.completed ? "line-through" : "",
        opacity: task.completed ? "0.5" : "",
      }}
    >
      {task.text}
      <button style={{ backgroundColor: "red" }} onClick={handleRemove}>
        &#10540;
      </button>
      <button style={{ backgroundColor: "green" }} onClick={handleToggle}>
        &#10003;
      </button>
    </div>
  );
};

export default Task;
