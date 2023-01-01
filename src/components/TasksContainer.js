import Status from "./Status";
import Task from "./Task";


const TasksContainer = ({dark}) => {
  return (
    <div className="tasks-container">
      <Task dark={dark}/>
      <Status dark={dark}/>
    </div>
  );
}

export default TasksContainer;
