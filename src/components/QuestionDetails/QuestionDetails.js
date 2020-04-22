import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import { saveAnswer } from '../../store/actions/questions';
import { fetchAllData } from '../../store/actions/data';
import './QuestionDetails.scss';

class QuestionDetails extends Component {
	state = {
		value: null,
		questionID: window.location.pathname.slice(11),
		isAnswered: false
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
		this.props.onFetchAllData();
		this.setState({ isAnswered: true });
	};

	render() {
		const { location } = this.props;
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

				{(location.state.isAnswered === false && !this.state.isAnswered) && (
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
								<form className='question-form' onSubmit={this.submitNewAnswer}>
									<div className='question-form-row'>
										<input
											type='radio'
											name='optionOneText'
											id='optionOneText'
											value='optionOne'
											checked={this.state.value === 'optionOne'}
											onChange={this.handleChange}
										/>
										<label
											htmlFor='optionOneText'
											className='question-form-label'
										>
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
										<label
											htmlFor='optionOneText'
											className='question-form-label'
										>
											{currentQuestion[0].optionTwo.text}
										</label>
									</div>
									<div className='question-form-row question-form-button'>
										<input
											type='submit'
											value='Vote'
											className='primary-button'
											disabled={this.state.value !== null ? false : true}
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
				{(location.state.isAnswered === true || this.state.isAnswered) && (
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
								<div className='question-details-row'>
									<p>{currentQuestion[0].optionOne.text}</p>
									<p>{currentQuestion[0].optionTwo.text}</p>
								</div>
							</div>
						</div>
					</div>
				)}

				<Link to='/dashboard'>
					<PrimaryButton>Back</PrimaryButton>
				</Link>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		questions: state.questions,
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSaveAnswer: (answer) => dispatch(saveAnswer(answer)),
		onFetchAllData: () => dispatch(fetchAllData()),
	};
};
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
);
