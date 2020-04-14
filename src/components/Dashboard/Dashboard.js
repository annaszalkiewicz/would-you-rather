import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '../Header/Header';
import { getAnsweredQuestions } from '../../store/actions/auth';
import './Dashboard.scss';

class Dashboard extends Component {

  componentDidMount = () => {
    const answeredQuestionsId = Object.keys(this.props.authUser.answers);

    const answered = Object.values(this.props.questions)
    .filter(question => answeredQuestionsId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp)

    this.props.onGetAnsweredQuestions(answered);
    
  }
  render() {
    return (
      <>
      <Header />
      <Tabs>
        <TabList>
          <Tab>Unanswered Questions</Tab>
          <Tab>Answered Questions</Tab>
        </TabList>
        <TabPanel>
          Unanswered Questions
        </TabPanel>
        <TabPanel>Answere Questions</TabPanel>
      </Tabs>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.auth.authUser,
    answered: state.auth.answered,
    users: state.users,
    questions: state.questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAnsweredQuestions: questions => dispatch(getAnsweredQuestions(questions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);