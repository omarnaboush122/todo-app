import React from 'react';

const NewTask = ({dark}) => {
  const style = {
    backgroundColor: dark ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"
  }
  return (
    <div className='new-task' style={style}>
      <div className="circle"></div>
      <input style={style} type="text" placeholder='Create a new todo...' />
    </div>
  );
}

export default NewTask;
