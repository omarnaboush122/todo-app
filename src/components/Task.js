import { useState } from "react";


const Task = ({mode,text,deleteTask,taskCompleted,toggleCompleted}) => {
  return (
    <div className={`task ${mode}`}>
      <div className={`circle ${taskCompleted && "completed"}`} onClick={toggleCompleted}></div>
      <div className="text">{text}</div>
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" onClick={deleteTask} />
      </div>
    </div>
  );
}

export default Task;
