import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '../Header/Header';
import {
	getAnsweredQuestions,
	getUnansweredQuestions,
} from '../../store/actions/auth';
import './Dashboard.scss';

class Dashboard extends Component {
	componentDidMount = () => {
		const answeredQuestionsId = Object.keys(this.props.authUser.answers);

		const answered = Object.values(this.props.questions)
			.filter((question) => answeredQuestionsId.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp);

		const unanswered = Object.values(this.props.questions)
			.filter((question) => !answeredQuestionsId.includes(question.id))
			.sort((a, b) => (b.timestamp = a.timestamp));
		console.log(unanswered);

		this.props.onGetAnsweredQuestions(answered);
		this.props.onGetUnansweredQuestions(unanswered);
	};
	render() {
		return (
			<>
				<Header />
				<Tabs>
					<TabList>
						<Tab>Unanswered Questions</Tab>
						<Tab>Answered Questions</Tab>
					</TabList>
					<TabPanel>Unanswered Questions</TabPanel>
					<TabPanel>Answere Questions</TabPanel>
				</Tabs>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.auth.authUser,
		answered: state.auth.answered,
		unanswered: state.auth.unanswered,
		users: state.users,
		questions: state.questions,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetAnsweredQuestions: (questions) =>
			dispatch(getAnsweredQuestions(questions)),
		onGetUnansweredQuestions: (questions) =>
			dispatch(getUnansweredQuestions(questions)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
