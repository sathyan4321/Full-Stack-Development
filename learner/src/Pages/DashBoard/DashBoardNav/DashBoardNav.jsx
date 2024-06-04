import React from 'react';
import './DashboardNav.scss';
import { Link } from 'react-router-dom';

function DashBoardNav() {
  return (
    <div>
        <div className="db-nav">

            <div className="db-nav-list">
                <ul>
                    <li><Link to={'/'}>Profile</Link></li>
                    <li><Link to= {"/course-status"}>Course Status</Link></li>
                    <li><Link to={"/support"}>Support</Link></li>
                    <li><Link to={"/feed-back"}>FeedBack</Link></li>
                    <li><Link to={"/invoice"}>Invoice</Link></li>
                    <li><Link to={"/logout"}>LogOut</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashBoardNav;