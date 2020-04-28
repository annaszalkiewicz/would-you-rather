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
		isAnswered: false,
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
		this.setState({ isAnswered: true });
	};

	render() {
		const { location, users, questions } = this.props;

		const currentQuestion = Object.values(questions).filter((question) => {
			return question.id === this.state.questionID;
		});

		if (currentQuestion[0] === undefined) {
			return (
				<div className='not-found'>
					<h2>Page not found</h2>
					<PrimaryButton onClick={() => this.props.history.push('/dashboard')}>
						Go to Dashboard
					</PrimaryButton>
				</div>
			);
		}

		const currentAuthor = Object.values(this.props.users).filter(
			(user) => currentQuestion[0].author === user.id
		);
		const optionOneVotes = currentQuestion[0].optionOne.votes.length;

		const optionTwoVotes = currentQuestion[0].optionTwo.votes.length;

		const totalVotes = optionOneVotes + optionTwoVotes;

		const optionOnePercentage = Math.round((optionOneVotes * 100) / totalVotes);

		const optionTwoPercentage = Math.round((optionTwoVotes * 100) / totalVotes);

		const user = users[this.props.auth.id];
		const userVote = user.answers[currentQuestion[0].id];

		const fillerOneStyle = {
			width:
				window.innerWidth < 640 && optionOnePercentage < 20
					? '20%'
					: window.innerWidth >= 640 &&
					  window.innerWidth < 1280 &&
					  optionOnePercentage < 10
					? '10%'
					: `${optionOnePercentage}%`,
			minWidth: '7%',
			background: userVote === 'optionOne' ? '#138564' : 'grey',
		};

		const fillerTwoStyle = {
			width:
				window.innerWidth < 640 && optionTwoPercentage < 20
					? '20%'
					: window.innerWidth >= 640 &&
					  window.innerWidth < 1280 &&
					  optionTwoPercentage < 10
					? '10%'
					: `${optionTwoPercentage}%`,
			minWidth: '7%',
			background: userVote === 'optionTwo' ? '#138564' : 'grey',
		};

		return (
			<>
				<Header />

				{(location.state.oldPath !== undefined ||
					location.state.isAnswered === true ||
					this.state.isAnswered) && (
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
									<div className='question-votes'>
										<p>{currentQuestion[0].optionOne.text}</p>
										<div
											className={
												userVote === 'optionOne'
													? 'progress-bar voted'
													: 'progress-bar'
											}
										>
											<div
												className='progress-bar-filler'
												style={fillerOneStyle}
											>{`${optionOnePercentage}%`}</div>
										</div>
										<p className='question-votes-details'>{`${optionOneVotes} of ${totalVotes} votes`}</p>
									</div>
									<div className='question-votes'>
										<p>{currentQuestion[0].optionTwo.text}</p>
										<div
											className={
												userVote === 'optionTwo'
													? 'progress-bar voted'
													: 'progress-bar'
											}
										>
											<div
												className='progress-bar-filler'
												style={fillerTwoStyle}
											>{`${optionTwoPercentage}%`}</div>
										</div>
										<p className='question-votes-details'>{`${optionTwoVotes} of ${totalVotes} votes`}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{location.state.isAnswered === false && !this.state.isAnswered && (
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
