import { useState } from "react";
import NewTask from "./components/NewTask";
import TasksContainer from "./components/TasksContainer";
import "./App.css";

const App = () => {
  const [mode,setMode] = useState("dark");

  function toggleMode() {
    if(mode === "dark") {
      setMode("light")
    } else {
      setMode("dark");
    }
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
      <NewTask mode={mode} />
      <TasksContainer mode={mode}/>
    </div>
    </div>
  );
}

export default App;
