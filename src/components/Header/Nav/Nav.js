import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../../store/actions/auth';

import './Nav.scss';

class Nav extends Component {

  logout = () => {
    this.props.onLogoutUser();
  }

  render() {
    return (
      <nav className="nav">
        <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
        <NavLink to='/new-question' className="nav-link">New Question</NavLink>
        <NavLink to='/leaderboard' className="nav-link">Leaderboard</NavLink>
        <NavLink to='/' className="nav-link" onClick={this.logout}>Logout</NavLink>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(Nav);