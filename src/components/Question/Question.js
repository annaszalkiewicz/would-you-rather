import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Question.scss';

class Question extends Component {
	state = {
		avatar: null
	}
	componentDidMount = () => {
		const { users, question } = this.props;
		Object.values(users).filter((user) => {
			return question.author === user.id ? this.setState({avatar: user.avatarURL}) : '';
		});
	};

	render() {
		const { question } = this.props;
		return (
			<div className='question'>
				<div className='question-heading'>
					<h2>{question.author} asks:</h2>
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};
export default connect(mapStateToProps, null)(Question);
