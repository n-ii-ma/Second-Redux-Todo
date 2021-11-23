import { useSelector } from "react-redux";
import Task from "../features/task/Task";
import { selectTaskSlice } from "../features/task/taskSlice";

const TaskList = () => {
  const taskSlice = useSelector(selectTaskSlice);

  return (
    <div>
      {!taskSlice.length ? (
        <p style={{ textAlign: "center" }}>No Tasks to Show</p>
      ) : (
        taskSlice.map((task) => <Task task={task} key={task.id} />)
      )}
    </div>
  );
};

export default TaskList;
