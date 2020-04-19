import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setQuestionStatus } from '../../store/actions/data';
import './Question.scss';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';

class Question extends Component {
	state = {
		avatar: null,
		author: null
		// currentQuestion: {
		// 	userName: this.state.author,
		// 	userAvatar: this.state.avatar,
		// 	timestamp: this.props.question.timestamp
		// }
	}
	componentDidMount = () => {
		const { users, question } = this.props;
		Object.values(users).filter((user) => {
			return question.author === user.id ? this.setState({avatar: user.avatarURL}) : '';
		});
		Object.values(users).filter((user) => {
			return question.author === user.id ? this.setState({author: user.name}) : '';
		})

		this.props.onSetQuestionStatus(this.props.isAnswered)
	};

	componentDidUpdate = () => {
		this.props.onSetQuestionStatus(this.props.isAnswered)
	}

	render() {
		const { question, card } = this.props;
		const { author } = this.state;
		return (
			<Link to={{pathname: `/questions/${question.id}`}} className='question' style={card} role="button">
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
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		users: state.users,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSetQuestionStatus: status => dispatch(setQuestionStatus(status))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);
