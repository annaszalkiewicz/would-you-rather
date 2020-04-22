import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Leaderboard from '../Leaderboard/Leaderboard';
import NewQuestion from '../NewQuestion/NewQuestion';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

import './App.scss';
import Page404 from '../Page404/Page404';

class App extends Component {

	render() {
		return (
			<div className='App' id='app'>
				<Switch>
					<Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/dashboard`}
						render={() =>
							this.props.auth === undefined ? (
								<Redirect to='/' />
							) : (
								<Dashboard />
							)
						}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/leaderboard`}
						render={() =>
							this.props.auth === undefined ? (
								<Redirect to='/' />
							) : (
								<Leaderboard />
							)
						}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/add`}
						render={() =>
							this.props.auth === undefined ? (
								<Redirect to='/' />
							) : (
								<NewQuestion />
							)
						}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/questions/:id`}
						render={() =>
							this.props.auth === undefined ? <Page404 /> : <QuestionDetails />
						}
					/>
					<Route path='*' render={() => <Page404 />} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		questions: state.questions,
	};
};

export default withRouter(connect(mapStateToProps, null)(App));
