import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import './Question.scss';

class Question extends Component {
	state = {
		avatar: null,
		author: null,
		showDetails: false,
		isAnswered: false,
	};
	componentDidMount = () => {
		const { users, question } = this.props;
		Object.values(users).filter((user) => {
			return question.author === user.id
				? this.setState({ avatar: user.avatarURL })
				: '';
		});
		Object.values(users).filter((user) => {
			return question.author === user.id
				? this.setState({ author: user.name })
				: '';
		});
	};

	render() {
		const { question, card, isAnswered } = this.props;
		const { author } = this.state;
		return (
			<>
				{!isAnswered && (
					<Link
						to={{
							pathname: `/questions/${question.id}`,
							state: {
								isAnswered: false,
							},
						}}
						className='question'
						style={card}
						role='button'
					>
						<div className='question-heading'>
							<h2>{author} asks:</h2>
						</div>
						<div className='question-details'>
							<div className='question-details-left'>
								<img src={this.state.avatar} alt={question.author} />
							</div>
							<div className='question-details-right'>
								<h3>Would you rather</h3>
								<p>{question.optionOne.text}</p>
								<PrimaryButton>Answer question</PrimaryButton>
							</div>
						</div>
					</Link>
				)}
				{isAnswered && (
					<Link
						to={{
							pathname: `/questions/${question.id}`,
							state: {
								isAnswered: true,
							},
						}}
						className='question'
						style={card}
						role='button'
					>
						<div className='question-heading'>
							<h2>{author} asks:</h2>
						</div>
						<div className='question-details'>
							<div className='question-details-left'>
								<img src={this.state.avatar} alt={question.author} />
							</div>
							<div className='question-details-right'>
								<h3>Would you rather</h3>
								<p>{question.optionOne.text}</p>
								<PrimaryButton>View Results</PrimaryButton>
							</div>
						</div>
					</Link>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		users: state.users,
		questions: state.questions,
	};
};

export default withRouter(connect(mapStateToProps, null)(Question));
