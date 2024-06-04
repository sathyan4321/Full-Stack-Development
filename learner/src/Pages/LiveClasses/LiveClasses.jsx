import React from 'react';
import './LiveClasses.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upcoming from './Upcoming/Upcoming';
import Completed from './Completed/Completed';
import LiveClassNav from './LiveClassNav';

function LiveClasses() {
  return (
    <div>
      <div className="LiveClass-container">
        <Router>
          
          <LiveClassNav />
          <div className='live-class'>
          <Routes>
            <Route path ="/" element={<Upcoming />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default LiveClasses;
