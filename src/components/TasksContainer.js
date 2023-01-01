import Status from "./Status";
import Task from "./Task";


const TasksContainer = ({mode,tasksArray}) => {
  const allTasks = tasksArray.map(task => {
    return <Task key={task.id} mode={mode} text={task.text}/>
  })
  return (
    <div className="tasks-container">
      {allTasks}
      <Status mode={mode}/>
    </div>
  );
}

export default TasksContainer;
