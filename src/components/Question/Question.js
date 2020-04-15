import React, { Component } from 'react';
import './Question.scss';

class Question extends Component {
	render() {
		const { question } = this.props;
		return (
			<div className='question'>
				<div className='question-heading'>
					<h2>{question.author} asks:</h2>
				</div>
				<div className='question-details'>
					<div className='question-details-left'>Avatar</div>
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

export default Question;
