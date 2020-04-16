import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Leaderboard.scss';
import Header from '../Header/Header';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Leaderboard component</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps, null)(Leaderboard));