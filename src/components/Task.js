

const Task = ({mode,text}) => {
  return (
    <div className={`task ${mode}`}>
      <div className="circle add"></div>
      <div className="text">{text}</div>
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" />
      </div>
    </div>
  );
}

export default Task;
