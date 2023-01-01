

const Task = ({dark}) => {
  const style = {
    backgroundColor: dark ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"
  }
  const styleText = {
    color: dark ? "hsl(236, 33%, 92%)" : "hsl(236,12%,25%)"
  }
  return (
    <div className='task' style={style}>
      <div className="circle add"></div>
      <div className="text" style={styleText}>read 1 hour</div>
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" />
      </div>
    </div>
  );
}

export default Task;
