import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import { setQuestionStatus } from '../../store/actions/data';
import Header from '../Header/Header';
import Question from '../Question/Question';

// import 'react-tabs/style/react-tabs.css';
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
		const cardYellow = {
			borderTop: 'solid 5px #1BC495'
		}
		const cardGreen = {
			borderTop: 'solid 5px #138564'
		}
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
								return ( <Question question={question} key={question.id} card={cardYellow} /> );
							})}
						</TabPanel>
						<TabPanel>
							{answered.map((question) => {
								return (<Question question={question} key={question.id} card={cardGreen} />);
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

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onSetQuestionStatus: status => dispatch(setQuestionStatus(status))
// 	};
// };

export default withRouter(connect(mapStateToProps)(Dashboard));
