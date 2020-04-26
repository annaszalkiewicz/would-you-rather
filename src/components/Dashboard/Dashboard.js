import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Header from '../Header/Header';
import Question from '../Question/Question';

import './Dashboard.scss';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';

class Dashboard extends Component {
	state = {
		selectedIndex: 0,
	};

	handleSelect = (index) => {
		this.setState({ selectedIndex: index });
	};

	handleClick = () => {
		this.setState({ selectedIndex: 0 });
	};

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

		const unanswered = Object.values(questions)
			.filter((question) => !answers.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp);

		const answered = Object.values(questions)
			.filter((question) => answers.includes(question.id))
			.sort((a, b) => b.timestamp - a.timestamp);

		return (
			<div id='dashbboard'>
				<Header />
				<main className='tabs-container'>
					<Tabs
						selectedIndex={this.state.selectedIndex}
						onSelect={this.handleSelect}
					>
						<TabList>
							<Tab>Unanswered Questions</Tab>
							<Tab>Answered Questions</Tab>
						</TabList>
						<TabPanel>
							{unanswered.length === 0 && (
								<div className='no-more-unanswered'>
									<h2 className='no-more-answers'>
										Congratulations! You have answered to all question
									</h2>
									<p>Create more polls and answer to new questions!</p>
									<Link to='/add'>
										<PrimaryButton>Create new poll</PrimaryButton>
									</Link>
								</div>
							)}
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
							{answered.length === 0 && (
								<div className='no-more-unanswered'>
									<h2 className='no-more-answers'>
										You haven't answered to any poll yet :(
									</h2>
									<p>Start answering to questions and earn higher score!</p>
									<PrimaryButton onClick={this.handleClick}>
										Answer Questions
									</PrimaryButton>
								</div>
							)}
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
