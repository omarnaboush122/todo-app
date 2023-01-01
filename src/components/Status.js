import React from 'react';

const Status = () => {
  return (
    <div className='task status'>
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
