import React from 'react';

const NewTask = ({mode}) => {
  return (
    <div className={`new-task ${mode}`}>
      <div className="circle"></div>
      <input className={`input ${mode}`} type="text" placeholder='Create a new todo...' />
    </div>
  );
}

export default NewTask;
