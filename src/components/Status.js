

const Status = ({mode,tasksArray,selectedBtn,setTaskStatus}) => {

  return (
    <div>
      <div className={`task status ${mode}`}>
      <div className="left">{tasksArray.length} items left</div>
      <div className={`filter ${mode}`}>
        <div onClick={()=> setTaskStatus("all")} className={selectedBtn === 1 ? "active": ""}>All</div>
        <div onClick={()=> setTaskStatus("active")} className={selectedBtn === 2 ? "active":""}>Active</div>
        <div onClick={()=> setTaskStatus("completed")} className={selectedBtn === 3 ? "active":""}>Completed</div>
      </div>
      <div className={`completed ${mode}`}>Clear Completed</div>
    </div>

    <div className={`task status-mobile ${mode}`}>
      <div className="top">
      <div className="left">{tasksArray.length} items left</div>
      <div className={`completed ${mode}`}>Clear Completed</div>
      </div>
    </div>
    <div className={`task bottom ${mode}`}>
    <div className={`filter ${mode}`}>
        <div className='active'>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
    </div>
    </div>
  );
}

export default Status;
