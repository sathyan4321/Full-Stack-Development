import React from 'react';
import './Greeting.scss';

function Greeting() {
  const name = "Sathya Narayanan";
  
  return (
    <div className='greeting'>
      <h1>Hello {name} !</h1>
    </div>
  )
}

export default Greeting
