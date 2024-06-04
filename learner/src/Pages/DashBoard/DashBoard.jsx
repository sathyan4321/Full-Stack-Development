import React from 'react';
import './DashBoard.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profiles from './Profile/Profiles';
import CourseStatus from './CourseStatus/CourseStatus';
import Support from './Support/Support';
import Invoice from './Invoice/Invoice';
import Logout from './LogOut/LogOut';
import Feedback from './FeedBack/Feedback';
import DashBoardNav from './DashBoardNav/DashBoardNav';

function DashBoard() {
  return (
    <div>
      <h1>DashBoard</h1>
      <div className="board-container">
          <BrowserRouter>
        <div className="side-board">
            <DashBoardNav />
        </div>
        <div className="main-board">
            <Routes>
              <Route path="/" element={<Profiles />} />
              <Route path="/course-status" element={<CourseStatus />} />
              <Route path="/support" element={<Support />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/feed-back" element={<Feedback />} />
            </Routes>
        </div>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default DashBoard;