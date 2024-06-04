import React from 'react';
import { NavLink } from 'react-router-dom';
import './LiveClasses.scss';

function LiveClassNav() {
  return (
    <div>
      <div className='buttons'>
        <NavLink to="/" activeClassName="active">Upcoming</NavLink>
        <NavLink to="/completed" activeClassName="active">Completed</NavLink>
      </div>
    </div>
  )
}

export default LiveClassNav;
