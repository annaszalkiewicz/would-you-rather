import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewQuestion.scss';

class NewQuestion extends Component {
  render() {
    return (
      <div>
        New Question component
      </div>
    );
  }
}

export default withRouter(NewQuestion);