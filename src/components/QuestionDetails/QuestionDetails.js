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
    const currentQuestion = Object.values(this.props.questions).filter(question => {
      return question.id === questionID;
    })
    console.log(questionID);
    console.log(typeof(currentQuestion) );
    
    
  }

  render() {
    return (
      <>
        <Header />
        {this.props.isAnswered && (
          <div>This question has been answered</div>
        )}
        {!this.props.isAnswered && (
          <div>This question has not been answered</div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authUser,
    questions: state.questions,
    users: state.users,
    isAnswered: state.data.isAnswered
  }
}
export default withRouter(connect(mapStateToProps, null)(QuestionDetails));