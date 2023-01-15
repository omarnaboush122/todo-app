import { useContext } from "react";
import { Context } from "../Context";
import Status from "./Status";
import Task from "./Task";


const TasksContainer = () => {
  const {filteredTasks} = useContext(Context);
  const allTasks = filteredTasks.map(task => {
    return <Task key={task.id} task={task} />
  })
  return (
    <div className="tasks-container">
      {allTasks}
      <Status />
    </div>
  );
}

export default TasksContainer;
