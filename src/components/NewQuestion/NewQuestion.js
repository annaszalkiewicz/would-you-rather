import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveNewQuestion } from '../../store/actions/questions.js';
import Header from '../Header/Header';
import './NewQuestion.scss';

class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
		questionAdded: false,
	};

	inputChangeHandler = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	submitForm = (e) => {
		const { optionOneText, optionTwoText } = this.state;
		const author = this.props.auth.id;

		e.preventDefault();

		const question = {
			optionOneText: optionOneText,
			optionTwoText: optionTwoText,
			author: author,
		};

		this.props.onSaveNewQuestion(question).then(() => {
			return this.setState({ questionAdded: true });
		});
	};
	render() {
		return (
			<>
				<Header />
				<main className='question'>
					<h2 className='question-heading'>Create new poll</h2>
					<h3 className='question-text'>Would you rather...</h3>
					<form className='question-form' onSubmit={this.submitForm}>
						<div className='question-form-row'>
							<label htmlFor='optionOneText'>Enter option one text</label>
							<input
								type='text'
								name='optionOneText'
								id='optionOneText'
								value={this.state.optionOneText}
								minLength={5}
								onChange={this.inputChangeHandler}
							/>
						</div>
						<div className='question-form-row'>
							<label htmlFor='optionTwoText'>Enter option two text</label>
							<input
								type='text'
								name='optionTwoText'
								id='optionTwoText'
								value={this.state.optionTwoText}
								minLength={5}
								onChange={this.inputChangeHandler}
							/>
						</div>
						<div className='question-form-row'>
								<input type='submit' value='Submit' className="primary-button" />
						</div>
					</form>
				</main>
				{this.state.questionAdded && <Redirect to='/dashboard' />}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSaveNewQuestion: (question) => dispatch(saveNewQuestion(question)),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
);
