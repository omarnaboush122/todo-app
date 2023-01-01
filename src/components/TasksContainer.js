import Status from "./Status";
import Task from "./Task";


const TasksContainer = ({mode}) => {
  return (
    <div className="tasks-container">
      <Task mode={mode}/>
      <Status mode={mode}/>
    </div>
  );
}

export default TasksContainer;
