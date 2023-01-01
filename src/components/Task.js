

const Task = ({mode,text,deleteTask}) => {
  return (
    <div className={`task ${mode}`}>
      <div className="circle add"></div>
      <div className="text">{text}</div>
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" onClick={deleteTask} />
      </div>
    </div>
  );
}

export default Task;
