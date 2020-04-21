import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '../Header/Header';
import Question from '../Question/Question';

import './Dashboard.scss';

class Dashboard extends Component {
	state = {
		answered: [],
		unanswered: [],
	};

	componentDidMount = () => {
		this.forceUpdate();
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
	componentWillUnmount = () => {
		document.getElementById('container').innerHTML = null;
		console.log(document.getElementById('container').innerHTML);
	};

	render() {
		const { unanswered, answered } = this.state;

		const cardYellow = {
			borderTop: 'solid 5px #1BC495',
		};
		const cardGreen = {
			borderTop: 'solid 5px #138564',
		};
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
