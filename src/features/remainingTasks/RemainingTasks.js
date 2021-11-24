import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRemainingTasksSlice,
  updateRemainingTasks,
} from "./remainingTasksSlice";
import { selectTaskSlice } from "../task/taskSlice";

const RemainingTasks = () => {
  const dispatch = useDispatch();
  const remainingTasksSlice = useSelector(selectRemainingTasksSlice);
  const taskSlice = useSelector(selectTaskSlice);

  useEffect(() => {
    // Number of Incomplete Tasks
    const incompleteTasks = taskSlice.filter((task) => !task.completed).length;

    // Update the State of the Remaining Tasks
    dispatch(updateRemainingTasks(incompleteTasks));
  }, [taskSlice, dispatch]);

  return (
    <div>
      <h1 className="header">
        {remainingTasksSlice > 1
          ? `${remainingTasksSlice} Tasks Left`
          : `${remainingTasksSlice} Task Left`}
      </h1>
    </div>
  );
};

export default RemainingTasks;
