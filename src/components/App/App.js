import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Leaderboard from '../Leaderboard/Leaderboard';
import NewQuestion from '../NewQuestion/NewQuestion';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

import './App.scss';

const App = ({location}) => (
			<div className='App' id="app">
				<Switch>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/`}
						component={Home}
						key={location.pathname}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/dashboard`}
						component={Dashboard}
						key={location.pathname}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/leaderboard`}
						component={Leaderboard}
						key={location.pathname}
					/>
					<Route
						exact
						path={`${process.env.PUBLIC_URL}/add`}
						component={NewQuestion}
						key={location.pathname}
					/>
					<Route 
						exact
						path={`${process.env.PUBLIC_URL}/questions/:id`}
						component={QuestionDetails}
						key={location.pathname}
					/>
				</Switch>
			</div>
		);

export default withRouter(App);
