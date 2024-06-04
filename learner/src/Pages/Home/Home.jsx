import React from 'react';
import './Home.scss';
import Greeting from './Greeting/Greeting';
import Slider from './Slider/Slider';
import SubCourse from './SubCourse/SubCourse';

function Home() {
  return (
    <div>
      <Greeting/>
      <Slider/>
      <SubCourse/>
    </div>
  )
}

export default Home
