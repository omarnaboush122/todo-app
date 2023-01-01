import { useState } from "react";
import NewTask from "./components/NewTask";
import TasksContainer from "./components/TasksContainer";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [tasksArray, setTasksArray] = useState([
    {
      text: "task",
      id: nanoid(),
      completed: false,
    },
  ]);
  const [mode, setMode] = useState("dark");
  const [inputText, setInputText] = useState("");

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  function addTask(taskText) {
    const newTask = {
      text: taskText,
      id: nanoid(),
      completed: false,
    };
    if(taskText !== "") {
      setTasksArray((prevTasksArray) => [newTask, ...prevTasksArray]);
    }
    setInputText("");
  }

  function deleteTask(id) {
    setTasksArray((prevTasksArray) =>
      prevTasksArray.filter((task) => task.id !== id)
    );
  }

  return (
    <div className={`container ${mode}`}>
      <div className={`header ${mode}`}>
        <div className="top">
          <h1>Todo</h1>
          <img
            src={`./images/icon-${mode ? "sun" : "moon"}.svg`}
            alt="sun"
            onClick={toggleMode}
          />
        </div>
        <NewTask mode={mode} addTask={addTask} inputText={inputText} setInputText={setInputText} />
        <TasksContainer
          mode={mode}
          tasksArray={tasksArray}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
