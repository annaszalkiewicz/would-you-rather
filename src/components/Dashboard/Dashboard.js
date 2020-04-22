import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '../Header/Header';
import Question from '../Question/Question';

import './Dashboard.scss';

class Dashboard extends Component {
	render() {
		const cardYellow = {
			borderTop: 'solid 5px #1BC495',
		};
		const cardGreen = {
			borderTop: 'solid 5px #138564',
		};

		const { questions } = this.props;

		const authedUser = Object.keys(this.props.users)
			.filter((user) => user === this.props.authUser.id)
			.join('');

		const answers = Object.keys(this.props.users[authedUser].answers);

		const unanswered = Object.values(questions).filter(
			(question) => !answers.includes(question.id)
		);

		const answered = Object.values(questions).filter((question) =>
			answers.includes(question.id)
		);

		return (
			<div id='dashbboard'>
				<Header />
				<main className='tabs-container' id='container'>
					<Tabs>
						<TabList>
							<Tab>Unanswered Questions</Tab>
							<Tab>Answered Questions</Tab>
						</TabList>
						<TabPanel>
							{unanswered.map((question) => {
								return (
									<Question
										question={question}
										key={question.id}
										card={cardYellow}
										isAnswered={false}
									/>
								);
							})}
						</TabPanel>
						<TabPanel>
							{answered.map((question) => {
								return (
									<Question
										question={question}
										key={question.id}
										card={cardGreen}
										isAnswered={true}
									/>
								);
							})}
						</TabPanel>
					</Tabs>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.auth.authUser,
		users: state.users,
		questions: state.questions,
	};
};

export default withRouter(connect(mapStateToProps)(Dashboard));
