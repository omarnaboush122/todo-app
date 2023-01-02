import Status from "./Status";
import Task from "./Task";


const TasksContainer = ({mode,tasksArray,filteredTasks,deleteTask,toggleCompleted,selectedBtn,setTaskStatus}) => {
  const allTasks = filteredTasks.map(task => {
    return <Task key={task.id} mode={mode} text={task.text} deleteTask={()=> deleteTask(task.id)} taskCompleted={task.completed} toggleCompleted={()=>toggleCompleted(task.id)}/>
  })
  return (
    <div className="tasks-container">
      {allTasks}
      <Status mode={mode} tasksArray={tasksArray} selectedBtn={selectedBtn} setTaskStatus={setTaskStatus}/>
    </div>
  );
}

export default TasksContainer;
