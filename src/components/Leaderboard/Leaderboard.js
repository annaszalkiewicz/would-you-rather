import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Leaderboard.scss';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard component</h1>
      </div>
    );
  }
}

export default withRouter(Leaderboard);