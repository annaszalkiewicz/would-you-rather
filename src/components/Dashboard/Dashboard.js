import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Header from '../Header/Header';
import Question from '../Question/Question';
import './Dashboard.scss';

class Dashboard extends Component {
	state = {
		answered: [],
		unanswered: [],
	};
	componentDidMount = () => {
		const answeredQuestionsId = Object.keys(this.props.authUser.answers);

		const answered = Object.values(this.props.questions)
			.filter((question) => answeredQuestionsId.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp);

		const unanswered = Object.values(this.props.questions)
			.filter((question) => !answeredQuestionsId.includes(question.id))
			.sort((a, b) => (b.timestamp = a.timestamp));

		this.setState((prevState) => {
			return {
				...prevState,
				answered: answered,
				unanswered: unanswered,
			};
		});
	};

	render() {
		const { answered, unanswered } = this.state;
		return (
			<div id="dashbboard">
				<Header />
				<div className='tabs-container'>
					<Tabs>
						<TabList>
							<Tab>Unanswered Questions</Tab>
							<Tab>Answered Questions</Tab>
						</TabList>
						<TabPanel>
							{unanswered.map((question) => {
								return ( <Question question={question} key={question.id} /> );
							})}
						</TabPanel>
						<TabPanel>
							{answered.map((question) => {
								return (<Question question={question} key={question.id} />);
							})}
						</TabPanel>
					</Tabs>
				</div>
			</div>
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

export default withRouter(connect(mapStateToProps)(Dashboard));
