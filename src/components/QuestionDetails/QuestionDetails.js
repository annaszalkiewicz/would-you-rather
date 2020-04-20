import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import { saveAnswer } from '../../store/actions/questions';
import {  setQuestionStatus, fetchAllData } from '../../store/actions/data';
import './QuestionDetails.scss';

class QuestionDetails extends Component {
	state = {
    value: null,
    questionID: window.location.pathname.slice(11)
  };

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	submitNewAnswer = (e) => {
    const authedUser = this.props.auth.id;
    const qid = this.state.questionID;
    const answer = this.state.value;

    e.preventDefault();
    this.props.onSaveAnswer({ authedUser, qid, answer });
		this.props.onSetQuestionStatus(true);
		this.props.onFetchAllData();

	};

	render() {
		const currentQuestion = Object.values(this.props.questions).filter(
			(question) => {        
				return question.id === this.state.questionID;
			}
		);
		const currentAuthor = Object.values(this.props.users).filter(
			(user) => currentQuestion[0].author === user.id
		);

		return (
			<>
				<Header />
				
		
					<div className='question'>
						<div className='question-heading'>
							<h2>{currentAuthor[0].name} asks:</h2>
						</div>
						<div className='question-details'>
							<div className='question-details-left'>
								<img
									src={currentAuthor[0].avatarURL}
									alt={currentAuthor[0].name}
								/>
							</div>
							<div className='question-details-right'>
								<h3>Would you rather</h3>
								<form
									className='question-form'
									onSubmit={this.submitNewAnswer}
								>
									<div className='question-form-row'>
										<input
											type='radio'
											name='optionOneText'
											id='optionOneText'
											value='optionOne'
											checked={this.state.value === 'optionOne'}
											onChange={this.handleChange}
										/>
										<label htmlFor='optionOneText' className="question-form-label">
											{currentQuestion[0].optionOne.text}
										</label>
									</div>
									<div className='question-form-row'>
										<input
											type='radio'
											name='optionOneText'
											id='optionOneText'
											value='optionTwo'
											checked={this.state.value === 'optionTwo'}
											onChange={this.handleChange}
										/>
										<label htmlFor='optionOneText' className="question-form-label">
											{currentQuestion[0].optionTwo.text}
										</label>
									</div>
									<div className='question-form-row question-form-button'>
										<input type="submit" value="Vote" className="primary-button" />
									</div>
								</form>
							</div>
						</div>
					</div>
			
				{this.props.isAnswered && <div>This question has been answered</div>}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		questions: state.questions,
		users: state.users,
		isAnswered: state.data.isAnswered,
	};
};

const mapDispatchToProps = dispatch => {
  return {
		onSaveAnswer: (answer) => dispatch(saveAnswer(answer)),
		onSetQuestionStatus: status => dispatch(setQuestionStatus(status)),
		onFetchAllData: () => dispatch(fetchAllData())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionDetails));
