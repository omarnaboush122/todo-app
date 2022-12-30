import React from 'react';

const Intro = ({getStarted}) => {
  return (
    <div className='intro' onClick={getStarted}>
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button>Start quiz</button>
    </div>
  );
}

export default Intro;
