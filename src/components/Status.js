

const Status = ({dark}) => {
  const style = {
    backgroundColor: dark ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"
  }
  return (
    <div className='task status' style={style}>
      <div className="left">2 items left</div>
      <div className="filter">
        <div className='active'>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div className="completed">Clear Completed</div>
    </div>
  );
}

export default Status;
