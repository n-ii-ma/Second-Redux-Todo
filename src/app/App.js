import RemainingTasks from "../features/remainingTasks/RemainingTasks";
import TaskList from "../components/TaskList";
import Form from "../components/Form";
import "../App.css";

function App() {
  return (
    <main className="parent-container">
      <div className="todo-container">
        <RemainingTasks />
        <TaskList />
        <Form />
      </div>
      <footer>&copy; All Rights Reserved</footer>
    </main>
  );
}

export default App;
