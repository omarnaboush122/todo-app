
import NewTask from "./components/NewTask";
import TasksContainer from "./components/TasksContainer";
import "./App.css";
import { useContext } from "react";
import { Context } from "./Context";

const App = () => {
  const {mode,toggleMode} = useContext(Context);
  
  return (
    <div className={`container ${mode}`}>
      <div className={`header ${mode}`}>
        <div className="top">
          <h1>Todo</h1>
          <img
            src={`./images/icon-${mode ? "sun" : "moon"}.svg`}
            alt=""
            onClick={toggleMode}
          />
        </div>
        <NewTask/>
        <TasksContainer/>
      </div>
    </div>
  );
};

export default App;
