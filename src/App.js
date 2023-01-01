import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import TasksContainer from "./components/TasksContainer";

const App = () => {
  const [dark,setDark] = useState(true);

  function toggleMode() {
    setDark(prevDark => !prevDark);
  }
  return (
    <div className="container">
      <Header dark={dark} toggleMode={toggleMode}/>
      <TasksContainer/>
    </div>
  );
}

export default App;
