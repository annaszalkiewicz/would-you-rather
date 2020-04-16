import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';

class QuestionDetails extends Component {

  state = {
    currentQuestion: {}
  }

  componentDidMount = () => {
    const questionID = window.location.pathname.slice(11);
    Object.values(this.props.questions).filter(question => {
      return question.id === questionID ? this.setState({currentQuestion: question}) : '';
    })
    console.log(this.props.auth.answers === questionID);
    
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authUser,
    questions: state.questions,
    users: state.users
  }
}
export default withRouter(connect(mapStateToProps, null)(QuestionDetails));