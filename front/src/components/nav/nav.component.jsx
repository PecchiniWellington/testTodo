import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.style.scss";

function Nav() {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <NavLink
            activeClassName='selected'
            className='Nav__link'
            to='/create-task'>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='selected'
            className='Nav__link'
            to='/task-list'>
            Task List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
