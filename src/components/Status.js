

const Status = ({mode}) => {

  return (
    <div>
      <div className={`task status ${mode}`}>
      <div className="left">2 items left</div>
      <div className={`filter ${mode}`}>
        <div className='active'>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div className={`completed ${mode}`}>Clear Completed</div>
    </div>

    <div className={`task status-mobile ${mode}`}>
      <div className="top">
      <div className="left">2 items left</div>
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
