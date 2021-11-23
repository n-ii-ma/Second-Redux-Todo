import Form from "../components/Form";
import TaskList from "../components/TaskList";
import "../App.css";

function App() {
  return (
    <div className="todo-container">
      <header className="header">Add Tasks</header>
      <TaskList />
      <Form />
    </div>
  );
}

export default App;
