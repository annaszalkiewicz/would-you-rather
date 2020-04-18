import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';

class QuestionDetails extends Component {
	state = {
		value: null,
	};

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	submitNewQuestion = (e) => {
		console.log(this.state.value);
		e.preventDefault();
	};

	render() {
		const questionID = window.location.pathname.slice(11);
		const currentQuestion = Object.values(this.props.questions).filter(
			(question) => {
				return question.id === questionID;
			}
		);
		const currentAuthor = Object.values(this.props.users).filter(
			(user) => currentQuestion[0].author === user.id
		);

		return (
			<>
				<Header />
				{!this.props.isAnswered && (
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
									onSubmit={this.submitNewQuestion}
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
										<label htmlFor='optionOneText'>
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
										<label htmlFor='optionOneText'>
											{currentQuestion[0].optionTwo.text}
										</label>
									</div>
									<div className='question-form-row'>
										<input type='submit' value='Vote' />
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
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
export default withRouter(connect(mapStateToProps, null)(QuestionDetails));
