import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Leaderboard from '../Leaderboard/Leaderboard';
import NewQuestion from '../NewQuestion/NewQuestion';
import { fetchAllData } from '../../store/actions/data';

import './App.scss';

class App extends Component {
	componentDidMount = () => {
		this.props.onFetchAllData();
	};

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route
						exact
						path={process.env.PUBLIC_URL + '/'}
						component={Home}
					/>
					<Route
						path={process.env.PUBLIC_URL + '/:id'}
						component={Dashboard}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/leaderboard`}
						component={Leaderboard}
					/>
					<Route
						path={`${process.env.PUBLIC_URL}/new-question`}
						component={NewQuestion}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		questions: state.questions,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchAllData: () => dispatch(fetchAllData()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
