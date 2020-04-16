import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Question.scss';

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
	};

	render() {
		const { question } = this.props;
		const { author } = this.state;
		return (
			<Link to={`/questions/${question.id}`} className='question'>
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
						<button>Answer poll</button>
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
export default connect(mapStateToProps, null)(Question);
