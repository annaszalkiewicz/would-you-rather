import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
			<Router>
				<div className='App'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/:id' component={Dashboard} />
						<Route 
						exact
						path='/leaderboard' 
						render={() => <Leaderboard />} 
						/>
						<Route exact path='/new-question' component={NewQuestion} />
					</Switch>
				</div>
			</Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
