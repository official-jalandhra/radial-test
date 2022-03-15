import "./App.css";
import Header from "./components/Header";
import TaskLists from "./components/TaskLists";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <TaskLists />
    </div>
  );
}

export default App;
