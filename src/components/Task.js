import { useContext } from "react";
import { Context } from "../Context";


const Task = ({task}) => {
  const {mode,toggleCompleted,deleteTask} = useContext(Context);
  return (
    <div className={`task ${mode}`}>
      <div className={`circle ${task.taskCompleted && "completed"}`} onClick={()=>toggleCompleted(task.id)}></div>
      {task.taskCompleted ? <div className="text removed">{task.text}</div> : <div className="text">{task.text}</div>}
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" onClick={()=>deleteTask(task.id)} />
      </div>
    </div>
  );
}

export default Task;
