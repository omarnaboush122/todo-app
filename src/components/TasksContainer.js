import Status from "./Status";
import Task from "./Task";


const TasksContainer = () => {
  return (
    <div className="tasks-container">
      <Task/>
      <Task/>
      <Task/>
      <Status/>
    </div>
  );
}

export default TasksContainer;
