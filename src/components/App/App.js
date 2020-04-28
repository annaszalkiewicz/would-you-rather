import React from 'react';
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Leaderboard from '../Leaderboard/Leaderboard';
import NewQuestion from '../NewQuestion/NewQuestion';
import QuestionDetails from '../QuestionDetails/QuestionDetails';
import Page404 from '../Page404/Page404';

import './App.scss';

const App = (props) => {
	const { location, auth } = props;

	return (
		<div className='App' id='app'>
			<Switch>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/`}
					render={() => <Home />}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/dashboard`}
					render={() =>
						auth === undefined ? <Redirect to='/' /> : <Dashboard />
					}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/leaderboard`}
					render={() =>
						auth === undefined ? (
							<Redirect
								to={{
									pathname: '/',
									state: {
										from: location,
									},
								}}
							/>
						) : (
							<Leaderboard />
						)
					}
				/>
				<Route
					path={`${process.env.PUBLIC_URL}/add`}
					render={() =>
						auth === undefined ? (
							<Redirect
								to={{
									pathname: '/',
									state: {
										from: location,
									},
								}}
							/>
						) : (
							<NewQuestion />
						)
					}
				/>

				<Route
					path={`${process.env.PUBLIC_URL}/questions/:id`}
					render={() =>
						auth === undefined ? (
							<Redirect
								to={{
									pathname: '/',
									state: {
										from: location,
										isAnswered: true,
									},
								}}
							/>
						) : (
							<QuestionDetails />
						)
					}
				/>
				<Route path='*' render={() => <Page404 />} />
			</Switch>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.authUser,
		questions: state.questions,
	};
};

export default withRouter(connect(mapStateToProps, null)(App));
