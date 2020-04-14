import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
        <NavLink to='/new-question' className="nav-link">New Question</NavLink>
        <NavLink to='/leaderboard' className="nav-link">Leaderboard</NavLink>
        <NavLink to='/' className="nav-link">Logout</NavLink>
      </nav>
    );
  }
}

export default Nav;