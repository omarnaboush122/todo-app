import React from 'react';

const Task = () => {
  return (
    <div className='task'>
      <div className="circle add"></div>
      <div className="text">read 1 hour</div>
      <div className="delete">
        <img src="./images/icon-cross.svg" alt="cross" />
      </div>
    </div>
  );
}

export default Task;
