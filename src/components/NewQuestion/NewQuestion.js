import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NewQuestion.scss';
import Header from '../Header/Header';

class NewQuestion extends Component {
  render() {
    return (
      <div>
        <Header />
        New Question component
      </div>
    );
  }
}

export default withRouter(NewQuestion);