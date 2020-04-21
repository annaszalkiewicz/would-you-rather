import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Leaderboard from '../Leaderboard/Leaderboard';
import NewQuestion from '../NewQuestion/NewQuestion';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

import './App.scss';

class App extends Component {

	render() {
		return (
			<div className='App' id='app'>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/`}
						component={Home}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/dashboard`}
						component={Dashboard}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/leaderboard`}
						component={Leaderboard}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/add`}
						component={NewQuestion}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/questions/:id`}
						component={QuestionDetails}
					/>
			</div>
		);
	}
}

export default withRouter(App);
