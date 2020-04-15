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
    const { authUser } = this.props
    return (
      <nav className="nav">
        <NavLink to={`/${authUser.id}`} className="nav-link">Dashboard</NavLink>
        <NavLink exact to='/new-question' className="nav-link">New Question</NavLink>
        <NavLink exact to='/leaderboard' className="nav-link">Leaderboard</NavLink>
        <NavLink exact to='/' className="nav-link" onClick={this.logout}>Logout</NavLink>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.auth.authUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);